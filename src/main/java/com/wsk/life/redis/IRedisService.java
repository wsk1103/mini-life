package com.wsk.life.redis;

import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2017/12/31  16:30
 */
@Deprecated
public interface IRedisService {

    public boolean set(String key, String value);

    public boolean set(String key, String value, long time);

    public String get(String key);

    public boolean expire(String key, long expire);

    public <T> boolean setList(String key, List<T> list);

    public <T> boolean setList(String key, List<T> list, long time);

    public <T> List<T> getList(String key, Class<T> clz);

    public long lpush(String key, Object obj);

    public long rpush(String key, Object obj);

    public String lpop(String key);

}
