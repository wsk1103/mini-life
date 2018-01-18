package com.wsk.movie.music;

import com.wsk.movie.music.bean.*;
import com.wsk.movie.music.entity.BaseEntity;
import com.wsk.movie.music.entity.WangYiResponseEntity;
import com.wsk.movie.music.entity.WangYiEntity;
import com.wsk.movie.music.service.WangYiService;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.springdata.WangYiAlbumRepository;
import com.wsk.movie.springdata.WangYiMusicRepository;
import com.wsk.movie.springdata.WangYiSingerRepository;
import com.wsk.movie.springdata.entity.WangyialbumEntity;
import com.wsk.movie.springdata.entity.WangyimusicEntity;
import com.wsk.movie.springdata.entity.WangyisingerEntity;
import com.wsk.movie.tool.Tool;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.wsk.movie.music.WangYiTypeEnum.*;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午1:53
 * @description: JAVA8
 */
@Service
@Data
public class WangYiServiceImpl implements WangYiService {
    private static final String GET_URL = "http://music.163.com/api/search/get/";
    private static final String GET_MUSIC = "http://music.163.com/weapi/song/enhance/player/url?csrf_token=";
    private static final StringBuilder FIRST_PARAM_START = new StringBuilder("{\"ids\":\"[");
    private static final String FIRST_PARAM_END = "]\",\"br\":128000,\"csrf_token\":\"\"}";
    private static final Map<String, String> DATA = new HashMap<>();
    private static final Map<String, String> HEADERS = new HashMap<>();
//    private static final String SONG_SHEET = "1000";//歌单

    @Autowired
    private IRedisUtils redisUtils;

    @Autowired
    private WangYiMusicRepository musicService;
    @Autowired
    private WangYiSingerRepository singerService;
    @Autowired
    private WangYiAlbumRepository albumService;

    private SimpleDateFormat fullDay = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    private void init(String name) {
        DATA.clear();
        HEADERS.clear();

        DATA.put("s", name);
        DATA.put("limit", "10");
        DATA.put("offset", "0");

        HEADERS.put("Content-Type", "application/x-www-form-urlencoded");
        HEADERS.put("Cookie", "appver=1.5.0.75771");
        HEADERS.put("Referer", "http://music.163.com");
    }

    @Transactional
    public BaseEntity getMusicUrl(String name, String type) {
        WangYiResponseEntity responseEntity = new WangYiResponseEntity();
        //结果
        List<WangYiEntity> result = new ArrayList<>();
        //从redis查找
//        String list = redisUtils.get("wangyi_music_" + name);
        List<String> list = redisUtils.lrange("wangyi_music_" + name, 0, -1);
        if (null != list && list.size() > 0) {
            for (String en : list) {
                try {
                    WangYiEntity entity = Tool.getInstance().jsonToBean(en, WangYiEntity.class);
                    result.add(entity);
                } catch (Exception e) {
                    e.printStackTrace();
                    responseEntity.setData(result);
                    responseEntity.setCode(500);
                    responseEntity.setMsg("fail");
                    return responseEntity;
                }
            }
            responseEntity.setData(result);
            responseEntity.setCode(200);
            responseEntity.setMsg("success");
            return responseEntity;
        }
//        if (null != list && list.length() > 0) {
//            System.out.println(list);
//            try {
//                responseEntity = Tool.getInstance().jsonToBean(list, WangYiResponseEntity.class);
//                return responseEntity;
//            } catch (Exception e1) {
//                e1.printStackTrace();
//                responseEntity.setData(null);
//                responseEntity.setCode(200);
//                responseEntity.setMsg("success");
//                return responseEntity;
//            }
//        }
        init(name);
        switch (type) {
            case SINGLE:
                DATA.put("type", SINGLE);
                break;
            case ALBUM:
                DATA.put("type", ALBUM);
                break;
            case SINGER:
                DATA.put("type", SINGER);
                break;
            default:
                return null;
        }
        try {
            WangYiBean bean = HttpUnits.urlToBean(GET_URL, WangYiBean.class, DATA, HEADERS, null, HttpMethodType.POST);
            if (Tool.getInstance().isNullOrEmpty(bean)) {
                return null;
            }
            WangYiSong[] songs;
            if (null != bean) {
                songs = bean.getResult().getSongs();
            } else {
                return null;
            }
            for (WangYiSong song : songs) {
                long song_id = song.getId();
                System.out.println((song_id));
                StringBuilder sb = new StringBuilder();
                sb.append(FIRST_PARAM_START).append(song_id).append(FIRST_PARAM_END);
                String params = URLEncoder.encode(AES.getParams(sb.toString()), "UTF-8");
                String encSecKey = AES.getEncSecKey();
//                System.out.println(params);
//                System.out.println(encSecKey);
                DATA.clear();
                DATA.put("params", params);
                DATA.put("encSecKey", encSecKey);

                WangYiSongDetail songDetail = HttpUnits.urlToBean(GET_MUSIC + "&params=" + params + "&encSecKey=" + encSecKey, WangYiSongDetail.class, DATA, HEADERS, null, HttpMethodType.POST);
                WangYiEntity entity = new WangYiEntity();
                if (null != songDetail) {
                    entity.setUrl(songDetail.getData()[0].getUrl());
                } else {
                    continue;
                }
                entity.setSongid(song_id);
                entity.setSongname(song.getName());
                entity.setAlbumid(song.getAlbum().getId());
                entity.setAlbumname(song.getAlbum().getName());
                entity.setPublishtime(fullDay.format(song.getAlbum().getPublishTime()));

                WangYiArtists[] artists = song.getArtists();
                StringBuilder singerIds = new StringBuilder();
                StringBuilder singerNames = new StringBuilder();
//                List<WangyisingerEntity> singers = new ArrayList<>();
                for (int i = 0; i < artists.length; i++) {
                    WangyisingerEntity singer = new WangyisingerEntity();
                    WangYiArtists artist = artists[i];
                    singerIds.append(artist.getId());
                    singerNames.append(artist.getName());

                    singer.setSongname(artist.getName());
                    singer.setSingerid((int) artist.getId());
                    singer.setId((int) artist.getId());
                    singer.setSongid((int) song_id);
//                    singers.add(singer);
                    if (i != artists.length - 1) {
                        singerIds.append("|");
                        singerNames.append("|");
                    }
                    if (Tool.getInstance().isNullOrEmpty(singerService.getBySingerid(singer.getSingerid()))) {
                        singerService.saveAndFlush(singer);
                    }
                }
                entity.setSingerid(singerIds.toString());
                entity.setSingername(singerNames.toString());
                String[] alias = song.getAlias();
                StringBuilder aliass = new StringBuilder();
                for (int i = 0; i < alias.length; i++) {
                    String alia = alias[i];
                    aliass.append(alia);
                    if (i != alias.length - 1) {
                        aliass.append("|");
                    }
                }
                entity.setAlias(aliass.toString());
                result.add(entity);
                //存入数据库
                //数据库实体
                //存入redis
                WangyimusicEntity music = new WangyimusicEntity();
                music.setSongid((int) song_id);
                music.setAlbumid((int) song.getAlbum().getId());
                music.setAlias(aliass.toString());
                music.setName(song.getName());
                music.setSingerid(singerIds.toString());
                music.setUrl(songDetail.getData()[0].getUrl());
                music.setId((int) song_id);
//                json = Tool.getInstance().toJson(music);
//                redisUtils.rpush("wangyi_music_" + name, json);
                System.out.println(music.getName());
                if (Tool.getInstance().isNullOrEmpty(musicService.getBySongid((int) song_id))) {
                    musicService.saveAndFlush(music);
                } else {
                    musicService.update((int) song_id, songDetail.getData()[0].getUrl());
                }


                WangyialbumEntity album = new WangyialbumEntity();
                album.setAlbumid((int) song.getAlbum().getId());
                album.setAlbumname(song.getAlbum().getName());
                album.setPublishtime(song.getAlbum().getPublishTime());
                album.setSongid((int) song_id);
                album.setId((int) song.getAlbum().getId());

//                json = Tool.getInstance().toJson(album);
//                redisUtils.rpush("wangyi_album_" + name, json);
                if (Tool.getInstance().isNullOrEmpty(albumService.getByAlbumid(album.getAlbumid()))) {
                    albumService.saveAndFlush(album);
                }
                redisUtils.rpush("wangyi_music_" + name, Tool.getInstance().toJson(entity));
            }
            responseEntity.setData(result);
            responseEntity.setCode(200);
            responseEntity.setMsg("success");
//            redisUtils.set("wangyi_music_" + name, Tool.getInstance().toJson(responseEntity));
        } catch (Exception e) {
            e.printStackTrace();
            responseEntity.setData(null);
            responseEntity.setCode(404);
            responseEntity.setMsg("fail");
            return responseEntity;
        }
        return responseEntity;
    }

    public static void main(String[] args) {
        try {
            WangYiBean bean = HttpUnits.urlToBean(GET_URL, WangYiBean.class, DATA, HEADERS, null, HttpMethodType.POST);
            long song_id = bean.getResult().getSongs()[0].getId();
            System.out.println((song_id));
            String params = URLEncoder.encode(AES.getParams(FIRST_PARAM_START.append(song_id).append(FIRST_PARAM_END).toString()), "UTF-8");
            String encSecKey = AES.getEncSecKey();
            System.out.println(params);
            System.out.println(encSecKey);
            DATA.clear();
            DATA.put("params", params);
            DATA.put("encSecKey", encSecKey);

            WangYiSongDetail songDetail = HttpUnits.urlToBean(GET_MUSIC + "&params=" + params + "&encSecKey=" + encSecKey, WangYiSongDetail.class, DATA, HEADERS, null, HttpMethodType.POST);
            System.out.println(songDetail.getData()[0].getUrl());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
