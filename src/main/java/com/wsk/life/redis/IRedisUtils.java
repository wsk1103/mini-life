package com.wsk.life.redis;

import org.springframework.data.redis.core.ZSetOperations;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @DESCRIPTION :Redis工具类接口
 * @AUTHOR : sk
 * @TIME : 2017/12/31  18:30
 */
public interface IRedisUtils {
    /**
     * string
     *
     * @param key   存储的key
     * @param value 存储的值
     * @param time  存储是时长
     * @return 结果
     */
    boolean set(String key, String value, long time);

    boolean set(Map<String, String> map, long time);

    boolean set(String key, String value);

    boolean set(Map<String, String> map);

    String get(String key);

    List get(String... keys);

    List<String> get(List<String> keys);

    Long decr(String key);

    Long decr(String key, long i);

    Long incr(String key);

    Long incr(String key, long i);

    /**
     * hash
     *
     * @param key   存储的key
     * @param field 存储的field
     * @param value 存储的值
     * @param time  存储的时长
     * @return 返回结果
     */
    boolean hset(String key, String field, String value, long time);

    boolean hset(String key, Map<String, String> map, long time);

    boolean hset(String key, String field, String value);

    boolean hset(String key, Map<String, String> map);

    String hget(String key, String field);

    List<Object> hget(String key, String... fields);

    Set<Object> hkeys(String key);

    List<Object> hvalues(String key);

    boolean hexists(String key, String fiels);

    Map<Object, Object> hgetall(String key);

    /**
     * list
     *
     * @param key 存储的key
     * @return 返回结果
     */
    Long lpush(String key, long time, String... values);

    Long lpush(String key, String... values);

    Long rpush(String key, long time, String... values);

    Long rpush(String key, String... values);

    String lpop(String key);

    String rpop(String key);

    Long llen(String key);

    List<String> lrange(String key, int start, int stop);

    boolean ltrim(String key, int start, int end);

    Long lrem(String key, int count, String value);

    String lindex(String key, int index);

    boolean lset(String key, int index, String value);

    Long linsert(String key, RedisType type, String piovt, String value);

    /**
     * 集合
     *
     * @param key    存储的key
     * @param time   存储的时长
     * @param values 存储的值，1至多个
     * @return 结果
     */
    Long sadd(String key, long time, String... values);

    Long sadd(String key, String... values);

    Long srem(String key, String... value);

    Set<String> smembers(String key);

    boolean sismember(String key, String member);

    Set<String> sdiff(String key1, String key2);

    Set<String> sdiff(String k, List<String> key);

    Set<String> sinter(String k1, String k2);

    Set<String> sinter(String k, List<String> key);

    Set<String> sunion(String key, String key2);

    Set<String> sunion(String key, List<String> keys);

    boolean sdiffstore(String destination, long time, List<String> keys);

    boolean sinterstore(String destination, long time, List<String> keys);

    boolean sunionstore(String destination, long time, List<String> keys);

    boolean sdiffstore(String destination, String... keys);

    boolean sdiffstore(String destination, List<String> keys);

    boolean sinterstore(String destination, String... keys);

    boolean sinterstore(String destination, List<String> keys);

    boolean sunionstore(String destination, String... keys);

    boolean sunionstore(String destination, List<String> keys);

    List<String> srandmembers(String key, int count);

    String spop(String key);

    boolean zadd(String key, double score, String member, long time);

    boolean zadd(String key, double score, String member);

    Long zadd(String key, Set<ZSetOperations.TypedTuple<String>> var2, long time);

    Long zadd(String key, Set<ZSetOperations.TypedTuple<String>> var2);

    Double zscore(String key, String member);

    Set<ZSetOperations.TypedTuple<String>> zrangewithscore(String key, int start, int stop);

    Set<String> zrange(String key, long start, long stop);

    Set<String> zrevrange(String key, int start, int stop);

    Set<ZSetOperations.TypedTuple<String>> zrevrangewithscore(String key, long start, long stop);

    Set<String> zrangebyscore(String key, double min, double max);

    Set<ZSetOperations.TypedTuple<String>> zrangebyscorewithscores(String key, double min, double max);

    Set<String> zrangebyscore(String key, double min, double max, int offset, int count);

    Set<String> zrevrangebyscore(String key, double min, double max);

    Set<String> zrevrangebyscore(String key, double min, double max, int offset, int count);

    double zincrby(String key, double incr, String member);

    Long zcard(String key);

    Long zcount(String key, double min, double max);

    Long zrem(String key, Object... o);

    Long zremrangebyrank(String key, int start, int stop);

    Long zremrangebyscore(String key, int start, int stop);

    Long zrank(String key, String... member);

    Long zrevrank(String key, String member);

    //通用
    boolean del(String key);

    boolean del(String... keys);

    boolean exists(String key);

    boolean expire(String key, long seconds);
}
