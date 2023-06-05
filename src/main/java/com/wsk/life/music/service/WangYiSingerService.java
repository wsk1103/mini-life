package com.wsk.life.music.service;

import com.wsk.life.jdbc.BaseDao;
import com.wsk.life.springdata.entity.WangyisingerEntity;

import java.sql.SQLException;
import java.util.List;

/**
 * @DESCRIPTION : 自定义语句查询歌手,多个
 * @AUTHOR : sk
 * @TIME : 2018/5/1  19:24
 */
public class WangYiSingerService {
    private static final BaseDao BASE_DAO = new BaseDao();

    public static String getSingers(String ids){
        String sql = "select * from wangyisinger where singerid in ( " + ids + " )";
        List<WangyisingerEntity> entities;
        try {
            entities = BASE_DAO.list(sql, WangyisingerEntity.class);
        } catch (SQLException e) {
            e.printStackTrace();
            return "";
        }
        StringBuilder result = new StringBuilder();
        for (WangyisingerEntity entity : entities) {
            result.append(entity.getSongname());
            result.append("，");
        }
        if (result.length() > 0) {
            result.delete(result.length() - 1, result.length());
        }
        return result.toString();
    }
}
