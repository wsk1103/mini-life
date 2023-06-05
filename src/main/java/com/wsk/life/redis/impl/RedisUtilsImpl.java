package com.wsk.life.redis.impl;

import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.redis.RedisType;
import com.wsk.life.tool.Time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import redis.clients.jedis.BinaryClient;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.Pipeline;
import redis.clients.jedis.Response;

import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * @DESCRIPTION : Redis工具类实现
 * @AUTHOR : sk
 * @TIME : 2017/12/31  21:21
 */
@Service
public class RedisUtilsImpl implements IRedisUtils {

    @Autowired
    private RedisTemplate<String, String> template;
    private Jedis jedis = new Jedis();
    private Pipeline pipeline = jedis.pipelined();

    @Override
    public boolean set(String key, String value, long time) {
        if (isEmpty(key) || isEmpty(value) || isEmpty(time)) {
            return false;
        }
        try {
            template.opsForValue().set(key, value, time, TimeUnit.SECONDS);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean set(Map<String, String> map, long time) {
        if (isEmpty(map) || isEmpty(time)) {
            return false;
        }
        try {
            template.opsForValue().multiSet(map);
            for (Map.Entry<String, String> entry : map.entrySet()) {
                expire(entry.getKey(), time);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean set(String key, String value) {
        if (isEmpty(key) || isEmpty(value)) {
            return false;
        }
        try {
            template.opsForValue().set(key, value, Time.TEN_MINUTE);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean set(Map<String, String> map) {
        if (isEmpty(map)) {
            return false;
        }
        try {
            template.opsForValue().multiSet(map);
            for (Map.Entry<String, String> entry : map.entrySet()) {
                expire(entry.getKey(), Time.TEN_MINUTE);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public String get(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForValue().get(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<String> get(String... keys) {
        if (isEmpty(keys)) {
            return null;
        }
        try {
            List<String> list = new ArrayList<>();
            Collections.addAll(list, keys);
            return template.opsForValue().multiGet(list);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<String> get(List<String> keys) {
        if (isEmpty(keys)) {
            return null;
        }
        try {
            return template.opsForValue().multiGet(keys);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Long decr(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForValue().increment(key, -1);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Long decr(String key, long i) {
        if (isEmpty(key) || isEmpty(i)) {
            return null;
        }
        try {
            return template.opsForValue().increment(key, -i);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Long incr(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForValue().increment(key, 1);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Long incr(String key, long i) {
        if (isEmpty(key) || isEmpty(i)) {
            return null;
        }
        try {
            return template.opsForValue().increment(key, i);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean hset(String key, String field, String value, long time) {
        if (isEmpty(key) || isEmpty(value) || isEmpty(time)) {
            return false;
        }
        try {
            template.opsForHash().put(key, field, value);
            expire(key, time);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean hset(String key, Map<String, String> map, long time) {
        if (isEmpty(key) || isEmpty(map) || isEmpty(time)) {
            return false;
        }
        try {
            template.opsForHash().putAll(key, map);
            expire(key, time);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean hset(String key, String field, String value) {
        if (isEmpty(key) || isEmpty(value) || isEmpty(field)) {
            return false;
        }
        try {
            template.opsForHash().put(key, field, value);
            expire(key, Time.TEN_MINUTE);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean hset(String key, Map<String, String> map) {
        if (isEmpty(key) || isEmpty(map)) {
            return false;
        }
        try {
            template.opsForHash().putAll(key, map);
            expire(key, Time.TEN_MINUTE);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public String hget(String key, String field) {
        if (isEmpty(key) || isEmpty(field)) {
            return null;
        }
        try {
            return (String) template.opsForHash().get(key, field);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Object> hget(String key, String... fields) {
        if (isEmpty(key) || isEmpty(fields)) {
            return null;
        }
        try {
            List<Object> list = new ArrayList<>();
            Collections.addAll(list, fields);
            return template.opsForHash().multiGet(key, list);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Set<Object> hkeys(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForHash().keys(key);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Object> hvalues(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForHash().values(key);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean hexists(String key, String fiels) {
        if (isEmpty(key) || isEmpty(fiels)) {
            return false;
        }
        try {
            return template.opsForHash().hasKey(key, fiels);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Map<Object, Object> hgetall(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForHash().entries(key);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Long lpush(String key, long time, String... values) {
        if (isEmpty(key) || isEmpty(time) || isEmpty(values)) {
            return null;
        }
        try {
            long result = template.opsForList().leftPushAll(key, values);
            return expire(key, time) ? result : 0L;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Long lpush(String key, String... values) {
        if (isEmpty(key) || isEmpty(values)) {
            return null;
        }
        try {
            long result = template.opsForList().leftPushAll(key, values);
            return expire(key, Time.TEN_MINUTE) ? result : 0L;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Long rpush(String key, long time, String... values) {
        if (isEmpty(key) || isEmpty(values) || isEmpty(time)) {
            return null;
        }
        try {
            long result = template.opsForList().rightPushAll(key, values);
            return expire(key, time) ? result : 0L;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Long rpush(String key, String... values) {
        if (isEmpty(key) || isEmpty(values)) {
            return null;
        }
        try {
            long result = template.opsForList().rightPushAll(key, values);
            return expire(key, Time.TEN_MINUTE) ? result : 0;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public String lpop(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForList().leftPop(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public String rpop(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForList().rightPop(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Long llen(String key) {
        if (isEmpty(key)) {
            return null;
        }
        try {
            return template.opsForList().size(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<String> lrange(String key, int start, int stop) {
        if (isEmpty(key) || isEmpty(start) || isEmpty(stop)) {
            return null;
        }
        try {
            return template.opsForList().range(key, start, stop);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean ltrim(String key, int start, int end) {
        if (isEmpty(key) || isEmpty(start) || isEmpty(end)) {
            return false;
        }
        try {
            template.opsForList().trim(key, start, end);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Long lrem(String key, int count, String value) {
        if (isEmpty(key) || isEmpty(value) || isEmpty(count)) {
            return null;
        }
        try {
            return template.opsForList().remove(key, count, value);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public String lindex(String key, int index) {
        if (isEmpty(key) || isEmpty(index)) {
            return null;
        }
        try {
            return template.opsForList().index(key, index);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean lset(String key, int index, String value) {
        if (isEmpty(key) || isEmpty(value) || isEmpty(index)) {
            return false;
        }
        try {
            template.opsForList().set(key, index, value);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Long linsert(String key, RedisType type, String piovt, String value) {
        if (isEmpty(key) || isEmpty(value) || isEmpty(piovt) || isEmpty(type)) {
            return null;
        }
        Response<Long> i = null;
        switch (type) {
            case AFTER:
                i = pipeline.linsert(key, BinaryClient.LIST_POSITION.AFTER, piovt, value);
                break;
            case BEFORE:
                i = pipeline.linsert(key, BinaryClient.LIST_POSITION.BEFORE, piovt, value);
                break;
            default:
                break;
        }
        return null != i ? i.get() : null;
    }

    @Override
    public Long sadd(String key, long time, String... values) {
        if (isEmpty(key) || isEmpty(values) || isEmpty(time)) {
            return null;
        }
        try {
            long result = template.opsForSet().add(key, values);
            return expire(key, time) ? result : null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Long sadd(String key, String... values) {
        if (isEmpty(key) || isEmpty(values)  ) {
            return null;
        }
        try {
            long result = template.opsForSet().add(key, values);
            return expire(key, Time.TEN_MINUTE) ? result : null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Long srem(String key, String... value) {
        if (isEmpty(key) || isEmpty(value)  ) {
            return null;
        }
        try {
            return template.opsForSet().remove(key, value);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> smembers(String key) {
        if (isEmpty(key)  ) {
            return null;
        }
        try {
            return template.opsForSet().members(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean sismember(String key, String member) {
        if (isEmpty(key) || isEmpty(member) ) {
            return false;
        }
        try {
            return template.opsForSet().isMember(key, member);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Set<String> sdiff(String key1, String key2) {
        if (isEmpty(key1) || isEmpty(key2)  ) {
            return null;
        }
        try {
            return template.opsForSet().difference(key1, key2);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> sdiff(String k, List<String> keys) {
        if (isEmpty(k) || isEmpty(keys)  ) {
            return null;
        }
        try {
            return template.opsForSet().difference(k, keys);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> sinter(String k1, String k2) {
        if (isEmpty(k1) || isEmpty(k2)  ) {
            return null;
        }
        try {
            return template.opsForSet().intersect(k1, k2);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> sinter(String k, List<String> key) {

        try {
            return template.opsForSet().intersect(k, key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> sunion(String k, String k2) {
        try {
            return template.opsForSet().union(k, k2);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> sunion(String k, List<String> key) {
        try {
            return template.opsForSet().union(k, key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    //未实现
    public boolean sdiffstore(String destination, long time, List<String> keys) {
//        long result = template.opsForSet().differenceAndStore(destination, keys);
        return false;
    }

    @Override
    //未实现
    public boolean sinterstore(String destination, long time, List<String> keys) {
        return false;
    }


    @Override
    //未实现
    public boolean sunionstore(String destination, long time, List<String> keys) {
        return false;
    }

    @Override
    //未实现
    public boolean sdiffstore(String destination, String... keys) {
        return false;
    }

    @Override
    //未实现
    public boolean sdiffstore(String destination, List<String> keys) {
        return false;
    }

    @Override
    //未实现
    public boolean sinterstore(String destination, String... keys) {
        return false;
    }

    @Override
    //未实现
    public boolean sinterstore(String destination, List<String> keys) {
        return false;
    }

    @Override
    //未实现
    public boolean sunionstore(String destination, String... keys) {
        return false;
    }

    @Override
    //未实现
    public boolean sunionstore(String destination, List<String> keys) {
        return false;
    }

    @Override
    public List<String> srandmembers(String key, int count) {
        try {
            return template.opsForSet().randomMembers(key, count);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public String spop(String key) {
        try {
            return template.opsForSet().pop(key);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean zadd(String key, double score, String member, long time) {
        try {
            return template.opsForZSet().add(key, member, score) && expire(key, time);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean zadd(String key, double score, String member) {
        try {
            return template.opsForZSet().add(key, member, score) && expire(key, Time.TEN_MINUTE);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Long zadd(String key, Set<ZSetOperations.TypedTuple<String>> set, long time) {
        try {
            long result = template.opsForZSet().add(key, set);
            return expire(key, time) ? result : null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Long zadd(String key, Set<ZSetOperations.TypedTuple<String>> var2) {
        try {
            long result = template.opsForZSet().add(key, var2);
            return expire(key, Time.TEN_MINUTE) ? result : null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Double zscore(String key, String member) {
        try {
            return template.opsForZSet().score(key, member);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<ZSetOperations.TypedTuple<String>> zrangewithscore(String key, int start, int stop) {
        try {
            return template.opsForZSet().rangeWithScores(key, start, stop);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> zrange(String key, long start, long stop) {
        try {
            return template.opsForZSet().range(key, start, stop);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Set<String> zrevrange(String key, int start, int stop) {
        return template.opsForZSet().reverseRange(key, start, stop);
    }

    @Override
    public Set<ZSetOperations.TypedTuple<String>> zrevrangewithscore(String key, long start, long stop) {
        return template.opsForZSet().reverseRangeWithScores(key, start, stop);
    }

    @Override
    public Set<String> zrangebyscore(String key, double min, double max) {
        return template.opsForZSet().rangeByScore(key, min, max);
    }

    @Override
    public Set<ZSetOperations.TypedTuple<String>> zrangebyscorewithscores(String key, double min, double max) {
        return template.opsForZSet().rangeByScoreWithScores(key, min, max);
    }

    @Override
    public Set<String> zrangebyscore(String key, double min, double max, int offset, int count) {
        return template.opsForZSet().rangeByScore(key, min, max, offset, count);
    }

    @Override
    public Set<String> zrevrangebyscore(String key, double min, double max) {
        return template.opsForZSet().rangeByScore(key, min, max);
    }

    @Override
    public Set<String> zrevrangebyscore(String key, double min, double max, int offset, int count) {
        return template.opsForZSet().reverseRangeByScore(key, min, max, offset, count);
    }

    @Override
    public double zincrby(String key, double incr, String member) {
        return template.opsForZSet().incrementScore(key, member, incr);
    }

    @Override
    public Long zcard(String key) {
        return template.opsForZSet().zCard(key);
    }

    @Override
    public Long zcount(String key, double min, double max) {
        return template.opsForZSet().count(key, min, max);
    }

    @Override
    public Long zrem(String key, Object... o) {
        return template.opsForZSet().remove(key, o);
    }

    @Override
    public Long zremrangebyrank(String key, int start, int stop) {
        return template.opsForZSet().removeRange(key, start, stop);
    }

    @Override
    public Long zremrangebyscore(String key, int start, int stop) {
        return template.opsForZSet().removeRangeByScore(key, start, stop);
    }

    @Override
    public Long zrank(String key, String... member) {
        return template.opsForZSet().rank(key, member);
    }

    @Override
    public Long zrevrank(String key, String member) {
        return template.opsForZSet().reverseRank(key, member);
    }

    @Override
    public boolean del(String key) {
        if (isEmpty(key)  ) {
            return false;
        }
        try {
            template.delete(key);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean del(String... keys) {
        if (isEmpty(keys) ) {
            return false;
        }
        try {
            List<String> list = new ArrayList<>();
            Collections.addAll(list, keys);
            template.delete(list);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean exists(String key) {
        if (isEmpty(key)  ) {
            return false;
        }
        return template.hasKey(key);
    }

    @Override
    public boolean expire(String key, long seconds) {
        if (isEmpty(key) || isEmpty(seconds)  ) {
            return false;
        }
        return template.expire(key, seconds, TimeUnit.SECONDS);
    }

    private <T> boolean isEmpty(T key) {
        return StringUtils.isEmpty(key);
    }

}
