package com.wsk.life.tool;

import io.protostuff.LinkedBuffer;
import io.protostuff.ProtobufIOUtil;
import io.protostuff.ProtostuffIOUtil;
import io.protostuff.Schema;
import io.protostuff.runtime.RuntimeSchema;

import java.util.Arrays;

/**
 * Author: wsk1103
 * Date: 2018/7/12 0012
 * Des: <--这里写描述-->
 */
public class ProtoBufUtil {

    /**
     * 序列化工具
     *
     * @param o   序列化对象
     * @param <T> 泛型
     * @return 结果
     */
    public static <T> byte[] serializer(T o) {
        Schema schema = RuntimeSchema.getSchema(o.getClass());
        return ProtobufIOUtil.toByteArray(o, schema, LinkedBuffer.allocate(256));
    }

    /**
     *  将序列化后的对象转换为String
     * @param t 对象
     * @param <T> 泛型
     * @return String
     */
    public static <T> String serializerToString(T t){
        return Arrays.toString(serializer(t));
    }

    /**
     *  反序列化
     * @param bytes 已经序列化后的数组
     * @param clazz 结果类
     * @param <T> 泛型
     * @return 结果对象
     */
    public static <T> T deserializer(byte[] bytes, Class<T> clazz) {
        T obj = null;
        try {
            obj = clazz.newInstance();
            Schema schema = RuntimeSchema.getSchema(obj.getClass());
            ProtostuffIOUtil.mergeFrom(bytes, obj, schema);
        } catch (InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
        }

        return obj;
    }

    /**
     *  反序列化
     * @param s 序列化后的数组转换为string
     * @param clazz 需要转换的对象
     * @param <T> 泛型
     * @return 结果对象
     */
    public static <T> T deserializerFromString(String s, Class<T> clazz) {
        byte[] bytes = s.getBytes();
        return deserializer(bytes, clazz);
    }
}
