package com.wsk.life.music;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.wsk.life.music.bean.*;
import com.wsk.life.music.entity.*;
import com.wsk.life.music.service.WangYiService;
import com.wsk.life.music.thread.MusicRunnable;
import com.wsk.life.music.thread.MusicThread;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.springdata.WangYiAlbumRepository;
import com.wsk.life.springdata.WangYiLrcRepository;
import com.wsk.life.springdata.WangYiMusicRepository;
import com.wsk.life.springdata.WangYiSingerRepository;
import com.wsk.life.springdata.entity.WangyialbumEntity;
import com.wsk.life.springdata.entity.WangyilrcEntity;
import com.wsk.life.springdata.entity.WangyimusicEntity;
import com.wsk.life.springdata.entity.WangyisingerEntity;
import com.wsk.life.tool.Down;
import com.wsk.life.tool.JSONUtil;
import com.wsk.life.tool.Time;
import com.wsk.life.tool.Tool;
import lombok.Data;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.*;

import static com.wsk.life.music.WangYiTypeEnum.*;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午1:53
 * @description: JAVA8
 */
@Service
@Data
public class WangYiServiceImpl implements WangYiService {

    //下载音乐到本地
    private static final MusicThread THREAD = MusicThread.getInstance();

    //链接的数据
    private static final Map<String, String> DATA = new HashMap<>();
    private static final Map<String, String> HEADERS = new HashMap<>();

    WangYiResponseEntity responseEntity = new WangYiResponseEntity();
    //结果
    List<WangYiEntity> result = new ArrayList<>();

    private final IRedisUtils redisUtils;

    private final WangYiMusicRepository musicService;
    private final WangYiSingerRepository singerService;
    private final WangYiAlbumRepository albumService;
    private final WangYiLrcRepository lrcRepository;

    @Autowired
    public WangYiServiceImpl(IRedisUtils redisUtils, WangYiMusicRepository musicService, WangYiSingerRepository singerService, WangYiAlbumRepository albumService, WangYiLrcRepository lrcRepository) {
        this.redisUtils = redisUtils;
        this.musicService = musicService;
        this.singerService = singerService;
        this.albumService = albumService;
        this.lrcRepository = lrcRepository;
    }

    private void init(String name) {
        DATA.clear();
        HEADERS.clear();

        DATA.put("s", name);
        DATA.put("limit", "10");
        DATA.put("offset", "0");
        DATA.put("type", SINGLE);

        HEADERS.put("Content-Type", "application/x-www-form-urlencoded");
        HEADERS.put("Cookie", "appver=1.5.0.75771");
        HEADERS.put("Referer", "http://music.163.com");
    }

    public BaseEntity getMusic(String name, String type) {
        result.clear();
        //从redis查找
//        String list = redisUtils.get("wangyi_music_" + name);
        List<String> list = redisUtils.lrange("wangyi_music_" + name, 0, -1);
        if (null != list && list.size() > 0) {
            for (String en : list) {
                try {
                    WangYiEntity entity = JSONUtil.toBean(en, WangYiEntity.class);
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
        List<WangyimusicEntity> wangyimusicEntities = musicService.findByNameStartsWith(name + "%");
        //直接获取数据库已经存好的数据,只有当相应的歌曲存量大于5首才查询数据库
        if (null != wangyimusicEntities && wangyimusicEntities.size() > 5) {
            redisUtils.del("wangyi_music_" + name);
            for (WangyimusicEntity music : wangyimusicEntities) {
                WangyialbumEntity album = albumService.getByAlbumid(music.getAlbumid());
                String allSingerId = music.getSingerid();
                String[] singerids = allSingerId.split(",");
                StringBuilder singernames = new StringBuilder();
                //歌手名
                for (int i = 0; i < singerids.length; i++) {
                    WangyisingerEntity singer = singerService.getBySingerid(Integer.parseInt(singerids[i]));
                    singernames.append(singer.getSongname());
                    if (i == singerids.length - 1) {
                        break;
                    }
                    singernames.append(",");
                }
                WangYiEntity entity = new WangYiEntity();
                entity.setId(music.getId());
                entity.setSongid(music.getSongid());
                entity.setSongname(music.getName());
                entity.setSingerid(music.getSingerid());
                entity.setSingername(singernames.toString());
                entity.setAlbumid(album.getAlbumid());
                entity.setAlbumname(album.getAlbumname());
                entity.setPublishtime(Time.DAY.format(null == album.getPublishtime() ? new Date() : album.getPublishtime()));
                entity.setUrl(music.getUrl());
                entity.setAlias(music.getAlias());
                entity.setPicurl(music.getPicurl());
                result.add(entity);
                redisUtils.rpush("wangyi_music_" + name, JSONUtil.toJson(entity));
            }
            responseEntity.setMsg("success");
            responseEntity.setCode(200);
            responseEntity.setData(result);
            return responseEntity;
        }
        //从网易云获取
        init(name);
        //暂时只开放根据歌名查找
        switch (type) {
            case SINGLE:
                DATA.put("type", SINGLE);
                break;
            case ALBUM:
                DATA.put("type", ALBUM);
                return null;
            case SINGER:
                DATA.put("type", SINGER);
                return null;
            default:
                return null;
        }
        WangYiBean bean;
        try {
            bean = HttpUnits.urlToBean(GET_URL, WangYiBean.class, DATA, HEADERS, null, HttpMethodType.POST);
        } catch (Exception e) {
            e.printStackTrace();
            return responseEntity;
        }
        if (Tool.getInstance().isNullOrEmpty(bean)) {
            return responseEntity;
        }
        ;
        WangYiSong[] songs = bean.getResult().getSongs();
        responseEntity = saveMusic(songs, name);
        return responseEntity;
    }

    /**
     * 通过歌名获取当个id，目的是为了获取评论
     *
     * @param name
     * @return
     */
    private Long getWangYiUrlMusicId(String name) {
        init(name);
        DATA.put("limit", "1");
        WangYiBean bean;
        try {
            bean = HttpUnits.urlToBean(GET_URL, WangYiBean.class, DATA, HEADERS, null, HttpMethodType.POST);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        if (Tool.getInstance().isNullOrEmpty(bean)) {
            return null;
        }
        WangYiSong[] songs = bean.getResult().getSongs();
        if (Tool.getInstance().isNullOrEmpty(songs) || songs.length < 1) {
            return null;
        }
        return songs[0].getId();
    }

    @Override
    /**
     * 根据歌名获取歌曲的评论
     */
    public BaseEntity getMusicComments(String name) {

        Long song_id = getWangYiUrlMusicId(name);
        if (Tool.getInstance().isNullOrEmpty(song_id)) {
            return null;
        }
        return getMusicComments(song_id);
    }

    //根据歌曲id获得评论
    @Override
    public BaseEntity getMusicComments(long song_id) {
        //默认返回
        WangYiCommentResponseEntity entity = new WangYiCommentResponseEntity();
        entity.setData(null);
        entity.setSongid(song_id);
        entity.setCode(500);
        entity.setMsg("fail");

        String result = redisUtils.hget(COMMENT_CACHE , String.valueOf(song_id));
        WangYiAllCommentBean commentBean;
        if (null != result) {
            try {
//                System.out.println(result);
                commentBean = JSONUtil.toBean(result, WangYiAllCommentBean.class);
                entity.setData(commentBean);
                entity.setCode(200);
                entity.setMsg("success");
                return entity;
            } catch (Exception e) {
                e.printStackTrace();
                return entity;
            }
        }
        String params;
        try {
            params = URLEncoder.encode(AES.getParams(String.valueOf(FIRST_PARAM_START) + song_id + FIRST_PARAM_END), "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            return entity;
        }
        String encSecKey = AES.getEncSecKey();
        String url = COMMENTS_URL_START + song_id + COMMENTS_URL_END + "&params=" + params + "&encSecKey=" + encSecKey;
        try {
            commentBean = HttpUnits.urlToBean(url, WangYiAllCommentBean.class, DATA, HEADERS, null, HttpMethodType.POST);
        } catch (Exception e) {
            return entity;
        }
        if (Tool.getInstance().isNotNull(commentBean)) {
            for (WangYiCommentsBean bean : commentBean.getHotComments()) {
                bean.setTime(Time.FULL_DAY.format(Long.valueOf(bean.getTime())));
            }
        }
        //成功返回
        entity.setData(commentBean);
        entity.setCode(200);
        entity.setMsg("success");
//        System.out.println(redisUtils.hset(COMMENT_CACHE , String.valueOf(song_id), JSONUtil.toJson(commentBean), Time.FIVE_MINUTE));
        return entity;
    }

    /**
     * 通过song_id获取图片
     *
     * @param song_id
     * @return
     */
    private String getMusicPicture(Long song_id) {
        WangYiResult result;
        try {
            result = HttpUnits.urlToBean(MUSIC_PIC + "id" + song_id + "&ids=%5B" + song_id + "%5D", WangYiResult.class);
            if (Tool.getInstance().isNullOrEmpty(result) || Tool.getInstance().isNullOrEmpty(result.getSongs())) {
                //默认图片
                return "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg";
        }
        return result.getSongs()[0].getAlbum().getPicUrl();
    }

    @Override
    public boolean delRedis(String name) {
        return redisUtils.del("wangyi_music_" + name);
    }

    @Override
    public boolean delRedisUrl(String url) {
        return redisUtils.del(url);
    }

    //云音乐飙升榜-2
    @Override
    public BaseEntity getHottingMusic() {
//        System.out.println("hotting=====");
        return getHot(HOTTING_MUSIC);
    }

    @Override
    /**
     * //云音乐热歌榜-1
     */
    public BaseEntity getHotMusic() {
//        System.out.println("hot======");
        return getHot(HOT_MUSIC);
    }

    @Override
    /**
     * //云音乐新歌榜-3
     */
    public BaseEntity getNewMusic() {
//        System.out.println("new=======");
        return getHot(NEW_MUSIC);
    }

    //根据歌曲id获得歌曲url
    @Override
    public BaseEntity getMusicUrlById(long song_id) {
        WangYiUrlEntity wangYiUrlEntity = new WangYiUrlEntity();
        wangYiUrlEntity.setCode(200);
        wangYiUrlEntity.setMsg("success");
        wangYiUrlEntity.setSong_id(song_id);
//        System.out.println((song_id));
        String url = redisUtils.get("wangyi_music_url_" + song_id);
        if (Tool.getInstance().isNotNull(url)) {
            wangYiUrlEntity.setUrl(url);
            return wangYiUrlEntity;
        }
        WangyimusicEntity entity = musicService.getBySongid((int) song_id);
        if (Tool.getInstance().isNotNull(entity)) {
            wangYiUrlEntity.setUrl(entity.getUrl());
            return wangYiUrlEntity;
        }
        String params;
        try {
            params = URLEncoder.encode(AES.getParams(String.valueOf(FIRST_PARAM_START) + song_id + FIRST_PARAM_END), "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            wangYiUrlEntity.setCode(500);
            wangYiUrlEntity.setMsg("fail");
            return wangYiUrlEntity;
        }
        String encSecKey = AES.getEncSecKey();
        DATA.clear();
        DATA.put("params", params);
        DATA.put("encSecKey", encSecKey);
        WangYiSongDetail songDetail;
        try {
            songDetail = HttpUnits.urlToBean(GET_MUSIC + "&params=" + params + "&encSecKey=" + encSecKey, WangYiSongDetail.class, DATA, HEADERS, null, HttpMethodType.POST);
            if (Tool.getInstance().isNullOrEmpty(songDetail)) {
                wangYiUrlEntity.setCode(500);
                wangYiUrlEntity.setMsg("fail");
                wangYiUrlEntity.setUrl("");
                return wangYiUrlEntity;
            }
            wangYiUrlEntity.setUrl(songDetail.getData()[0].getUrl());
            return wangYiUrlEntity;
        } catch (Exception e) {
            e.printStackTrace();
            wangYiUrlEntity.setCode(500);
            wangYiUrlEntity.setMsg("fail");
            wangYiUrlEntity.setUrl("");
            return wangYiUrlEntity;
        }
    }

    /**
     * 获取3种热门音乐
     *
     * @param url
     * @return
     */
    private BaseEntity getHot(String url) {
        result.clear();
        String json = redisUtils.get(url);
        if (Tool.getInstance().isNotNull(json)) {
            WangYiResult wangYiResult;
            try {
                wangYiResult = JSONUtil.toBean(json, WangYiResult.class);
            } catch (Exception e) {
                e.printStackTrace();
                responseEntity.setData(null);
                responseEntity.setCode(500);
                responseEntity.setMsg("fail");
                return responseEntity;
            }
            for (WangYiSong song : wangYiResult.getSongs()) {
                try {
                    WangYiEntity entity = new WangYiEntity();
                    entity.setId(song.getId());
                    entity.setSongid(song.getId());
                    entity.setSongname(song.getName());
                    WangYiArtists[] artists = song.getArtists();
                    StringBuilder singerIds = new StringBuilder();
                    StringBuilder singerNames = new StringBuilder();
                    for (int i = 0; i < artists.length; i++) {
                        singerIds.append(artists[i].getId());
                        singerNames.append(artists[i].getName());
                        if (i == artists.length - 1) {
                            break;
                        }
                        singerIds.append(",");
                        singerNames.append(",");
                    }
                    entity.setSingerid(singerIds.toString());
                    entity.setSingername(singerNames.toString());
                    entity.setAlbumid(song.getAlbum().getId());
                    entity.setAlbumname(song.getAlbum().getName());
                    entity.setPublishtime(Time.DAY.format(song.getPublishTime()));
                    String song_url = redisUtils.get("wangyi_music_url_" + entity.getSongid());
                    if (Tool.getInstance().isNullOrEmpty(song_url)) {
                        song_url = musicService.getBySongid((int) entity.getSongid()).getUrl();
                    }
                    entity.setUrl(song_url);
                    String[] aliases = song.getAlias();
                    StringBuilder alia = new StringBuilder();
                    for (int i = 0; i < aliases.length; i++) {
                        alia.append(aliases[i]);
                        if (i == artists.length - 1) {
                            break;
                        }
                        alia.append(",");
                    }
                    entity.setAlias(alia.toString());
                    entity.setPicurl(song.getAlbum().getPicUrl());
                    result.add(entity);
                } catch (Exception e) {
//                    e.printStackTrace();
                }
            }
            responseEntity.setData(result);
            responseEntity.setCode(200);
            return responseEntity;
        }
        Element element;
        responseEntity.setData(null);
        responseEntity.setCode(500);
        responseEntity.setMsg("fail");
        try {
            element = HttpUnits.urlToString(url);
        } catch (IOException e) {
            e.printStackTrace();
            return responseEntity;
        }
        if (Tool.getInstance().isNullOrEmpty(element)) {
            return responseEntity;
        }
        String response = element.getElementById("song-list-pre-cache").text();
        if (response.contains("[{\"")) {
            json = response.substring(response.indexOf("[{\""), response.length());
        } else {
            return responseEntity;
        }
        json = "{\"songs\":" + json + "}";
//        System.out.println(json);
        try {
            WangYiResult result = JSONUtil.toBean(json, WangYiResult.class);
            WangYiSong[] songs = result.getSongs();
            redisUtils.set(url, json, Time.FIVE_MINUTE);
            return saveMusic(songs, null);
        } catch (Exception e) {
            e.printStackTrace();
//            System.out.println(json);
            return responseEntity;
        }
    }

    /**
     * 保存音乐实体
     *
     * @param songs
     * @return
     */
    private WangYiResponseEntity saveMusic(WangYiSong[] songs, String searchName) {
        result.clear();
//        System.out.println("the wangyi result is \n" + JSON.toJSONString(songs,true));
        try {
            for (WangYiSong song : songs) {
                long song_id = song.getId();
//                System.out.println((song_id));
//                如果该歌曲数据库或者缓存已经存在了，则直接获取数据库的歌曲
                String song_url = redisUtils.get("wangyi_music_url_" + song_id);
                WangYiEntity entity = new WangYiEntity();
                if (Tool.getInstance().isNullOrEmpty(song_url)) {
                    WangyimusicEntity music = musicService.getBySongid((int) song_id);
                    if (Tool.getInstance().isNotNull(music)) {
                        song_url = music.getUrl();
                    } else {
                        WangYiSongDetail songDetail;
                        //解密
                        String params = URLEncoder.encode(AES.getParams(String.valueOf(FIRST_PARAM_START) + song_id + FIRST_PARAM_END), "UTF-8");
                        String encSecKey = AES.getEncSecKey();
//                System.out.println(params);
//                System.out.println(encSecKey);
                        DATA.clear();
                        DATA.put("params", params);
                        DATA.put("encSecKey", encSecKey);
                        try {
                            songDetail = HttpUnits.urlToBean(GET_MUSIC + "&params=" + params + "&encSecKey=" + encSecKey, WangYiSongDetail.class, DATA, HEADERS, null, HttpMethodType.POST);
                        } catch (Exception e) {
                            e.printStackTrace();
                            continue;
                        }
                        if (null != songDetail) {
                            try {
//                                entity.setUrl(songDetail.getData()[0].getUrl());
                                song_url = songDetail.getData()[0].getUrl();
                            } catch (NullPointerException e) {
                                e.printStackTrace();
                                continue;
                            }
                        } else {
                            continue;
                        }
                    }
                }
                entity.setUrl(song_url);
                entity.setSongid(song_id);
                entity.setSongname(song.getName());
                entity.setAlbumid(song.getAlbum().getId());
                entity.setAlbumname(song.getAlbum().getName());
                entity.setPublishtime(Time.DAY.format(song.getAlbum().getPublishTime()));

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
                        singerIds.append(",");
                        singerNames.append(",");
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
                        aliass.append(",");
                    }
                }
                entity.setAlias(aliass.toString());
                String picurl = getMusicPicture(song_id);
                entity.setPicurl(picurl);
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
                music.setUrl(song_url);
                music.setId((int) song_id);
                music.setPicurl(picurl);
//                json = Tool.getInstance().toJson(music);
//                redisUtils.rpush("wangyi_music_" + name, json);
//                System.out.println(music.getName());
                if (Tool.getInstance().isNullOrEmpty(musicService.getBySongid((int) song_id))) {
                    musicService.saveAndFlush(music);
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
                MusicRunnableBean musicRunnableBean = new MusicRunnableBean();
                if (Tool.getInstance().isNullOrEmpty(entity.getUrl())) {
                    continue;
                }
                if (Tool.getInstance().isNullOrEmpty(searchName)) {
                    redisUtils.rpush("wangyi_music_" + song.getName(), JSONUtil.toJson(entity));
                } else {
                    redisUtils.rpush("wangyi_music_" + searchName, JSONUtil.toJson(entity));
                }
                String fileName = Down.randomName(entity.getUrl());
                musicRunnableBean.setFileName(fileName);
                musicRunnableBean.setEntity(entity);
                musicRunnableBean.setMusicEntity(music);
                MusicRunnable runnable = new MusicRunnable(musicRunnableBean, musicService, redisUtils);
                THREAD.executor(runnable);
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

    /**
     * 根据song_id获取图片
     *
     * @param song_id
     * @return
     */
    @Deprecated
    private String getMusicPicUrl(long song_id) {
        String url = "http://music.163.com/song?id=" + song_id;
        try {
            Element element = HttpUnits.urlToString(url);
            element = element.getElementsByClass("j-img").first();
            return element.attr("data-src");
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }

    //获取歌词,https://music.163.com/api/song/lyric?id=33206214&lv=1&kv=1&tv=-1
    public String getMusicLyric(long song_id) {
        String lyric;
        //从缓存中取
        lyric = redisUtils.hget(LYRIC_CACHE, String.valueOf(song_id));
        if (Tool.getInstance().isNotNull(lyric)) {
            return lyric;
        }
        //先从数据库获取
        WangyilrcEntity lrcEntity = lrcRepository.getById(song_id);
        if (Tool.getInstance().isNotNull(lrcEntity)) {
            return lrcEntity.getLrc();
        }
        String url = "https://music.163.com/api/song/lyric?id=" + song_id + "&lv=1&kv=1&tv=-1";
        try {
            String result = HttpUnits.urlToStringPost(url);
//            System.out.println(result);
            if (Tool.getInstance().isNullOrEmpty(result)) {
                return null;
            }
            JSONObject object = JSONObject.parseObject(result);
            if (object.containsKey("lrc")){
                JSONObject lrc = JSONObject.parseObject(object.getString("lrc"));
                if (lrc.containsKey("lyric")) {
                    lyric = lrc.getString("lyric");
                    WangyilrcEntity entity = new WangyilrcEntity();
                    entity.setId((int) song_id);
                    entity.setLrc(lyric);
                    lrcRepository.save(entity);
                    //保存缓存
                    redisUtils.hset(LYRIC_CACHE, String.valueOf(song_id), lyric, Time.ONE_DAY);
                    return lyric;
                }
            }
            return null;
        } catch (IOException e) {
            return null;
        }
    }

    public static void main(String[] args) {
        try {
            String ss = "[00:00.00] 作曲 : 林俊杰\n" +
                    "[00:01.00] 作词 : 方文山\n" +
                    "[00:23.770]落叶堆积了好几层\n" +
                    "[00:27.460]而我踩过青春\n" +
                    "[00:31.360]听见\n" +
                    "[00:33.400]前世谁在泪语纷纷\n" +
                    "[00:39.290]一次缘份结一次绳\n" +
                    "[00:43.280]我今生还在等\n" +
                    "[00:46.160]一世就只能有一次的认真\n" +
                    "[00:54.300]确认过眼神我遇上对的人\n" +
                    "[01:01.600]我挥剑转身而鲜血如红唇\n" +
                    "[01:07.580]前朝记忆渡红尘伤人的不是刀刃\n" +
                    "[01:14.789]是你转世而来的魂\n" +
                    "[01:18.780]确认过眼神我遇上对的人\n" +
                    "[01:24.420]我策马出征马蹄声如泪奔\n" +
                    "[01:30.789]青石板上的月光照进这山城\n" +
                    "[01:37.400]我一路的跟你轮回声我对你用情极深\n" +
                    "[02:07.600]洛阳城旁的老树根\n" +
                    "[02:11.150]像回忆般延伸\n" +
                    "[02:14.400]你问经过是谁的心跳声\n" +
                    "[02:21.780]我拿醇酒一坛饮恨\n" +
                    "[02:25.590]你那千年眼神\n" +
                    "[02:28.540]是我醉醉坠入赤壁的伤痕\n" +
                    "[02:37.970]确认过眼神我遇上对的人\n" +
                    "[02:43.400]我挥剑转身而鲜血如红唇\n" +
                    "[02:47.880]前朝记忆渡红尘伤人的不是刀刃\n" +
                    "[02:56.780]是你转世而来的魂\n" +
                    "[03:01.170]确认过眼神我遇上对的人\n" +
                    "[03:06.830]我策马出征马蹄声如泪奔\n" +
                    "[03:13.110]青石板上的月光照进这山城\n" +
                    "[03:19.860]我一路的跟你轮回声我对你用情极深\n" +
                    "[03:30.370]确认过眼神我遇上对的人\n" +
                    "[03:36.160]我策马出征马蹄声如泪奔\n" +
                    "[03:42.150]青石板上的月光照进这山城\n" +
                    "[03:49.280]我一路的跟你轮回声我对你用情极深\n" +
                    "[03:58.110]我一路的跟你轮回声我对你用情极深";
            System.out.println(ss.replaceAll("\\[[0-9]+:[0-9]+\\.[0-9]+\\]",""));
//            System.out.println(getMusicLyric(33206214));
//            WangYiBean bean = HttpUnits.urlToBean(GET_URL, WangYiBean.class, DATA, HEADERS, null, HttpMethodType.POST);
//            long song_id = bean.getResult().getSongs()[0].getId();
//            long song_id = 33223036;
//            System.out.println((song_id));
//            String params = URLEncoder.encode(AES.getParams(FIRST_PARAM_START.append(song_id).append(FIRST_PARAM_END).toString()), "UTF-8");
//            String encSecKey = AES.getEncSecKey();
//            System.out.println(params);
//            System.out.println(encSecKey);
//            DATA.clear();
//            DATA.put("params", params);
//            DATA.put("encSecKey", encSecKey);
//            String url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_33223036?csrf_token=";
//            WangYiSongDetail songDetail = HttpUnits.urlToBean(url + "&params=" + params + "&encSecKey=" + encSecKey, WangYiSongDetail.class, DATA, HEADERS, null, HttpMethodType.POST);
//            System.out.println(songDetail.getData()[0].getUrl());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
