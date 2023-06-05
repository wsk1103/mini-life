package com.wsk.life.jdbc;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * @DESCRIPTION : 原生，使用sql语句查询
 * @AUTHOR : sk
 * @TIME : 2018/3/9  13:40
 */
public class BaseDao {

    private static Connection CONNECTION = null;

    public BaseDao() {
        if (null == CONNECTION) {
            synchronized (this) {
                if (null == CONNECTION) {
                    CONNECTION = getConnection();
                }
            }
        }
    }

    /**
     * 生产一个connection
     *
     * @return connection
     */
    private static Connection getConnection() {
        Properties properties = getPro();
        try {
            Class.forName(properties.getProperty("spring.datasource.driver-class-name"));
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        //建立连接

        //第二步是用适当的驱动程序连接到DBMS，看下面的代码[自行修改您所连接的数据库相关信息]：

        String url = properties.getProperty("spring.datasource.url");

        String username = properties.getProperty("spring.datasource.username");

        String password = properties.getProperty("spring.datasource.password");

        //用url创建连接
        Connection con;
        try {
            con = DriverManager.getConnection(url, username, password);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
        return con;
    }

    /**
     * 读取配置文件
     *
     * @return 配置文件
     */
    private static Properties getPro() {
        InputStream inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream("application.properties");
        Properties props = new Properties();
        try {
            props.load(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return props;
    }

    /**
     * 获取单个查询对象
     *
     * @param sql 查询语句
     * @param c   结果类
     * @param <T> 泛型
     * @return 查询结果
     * @throws SQLException sql异常
     */
    public <T> T get(String sql, Class<T> c) throws SQLException {
        if (null == CONNECTION) {
            return null;
        }
        try (PreparedStatement ps = CONNECTION.prepareStatement(sql); ResultSet rs = ps.executeQuery();) {
            T obj = c.newInstance();
            // 获取所有的属性
            Field[] fields = c.getDeclaredFields();
            if (rs.next()) {
                for (int k = 0; k < fields.length; k++) {
                    fields[k].setAccessible(true);
                    fields[k].set(obj, rs.getObject(k + 1));
                }
            }
            return obj;
        } catch (IllegalAccessException | InstantiationException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 根据条件查询
     *
     * @param sql    查询语句
     * @param c      查询对象
     * @param params 参数
     * @param <T>    泛型
     * @return 查询结果
     * @throws SQLException 查询失败
     */
    public <T> T get(String sql, Class<T> c, Object... params) throws SQLException {
        if (null == CONNECTION) {
            return null;
        }
        PreparedStatement ps = CONNECTION.prepareStatement(sql);
        for (int i = 0; i < params.length; i++) {
            ps.setObject(i + 1, params[i]);
        }
        ResultSet rs = ps.executeQuery();
        try {
            if (rs.next()) {
                // 获取所有的属性
                Field[] fields = c.getDeclaredFields();
                T obj;
                obj = c.newInstance();
                for (int k = 0; k < fields.length; k++) {
                    fields[k].setAccessible(true);
                    fields[k].set(obj, rs.getObject(k + 1));
                }
                return obj;
            }
        } catch (InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
        } finally {
            if (null != rs) {
                rs.close();
            }
            ps.close();
        }
        return null;
    }

    /**
     * 获取多个查询对象
     *
     * @param sql 查询语句
     * @param c   结果类
     * @param <T> 泛型
     * @return 查询结果
     * @throws SQLException sql异常
     */
    public <T> List<T> list(String sql, Class<T> c) throws SQLException {
        if (null == CONNECTION) {
            return null;
        }
        List<T> result = new ArrayList<>();
        try (PreparedStatement ps = CONNECTION.prepareStatement(sql); ResultSet rs = ps.executeQuery();) {
            // 获取所有的属性
            Field[] fields = c.getDeclaredFields();
            while (rs.next()) {
                T obj = c.newInstance();
                for (int k = 0; k < fields.length; k++) {
                    fields[k].setAccessible(true);
                    fields[k].set(obj, rs.getObject(k + 1));
                }
                result.add(obj);
            }
        } catch (IllegalAccessException | InstantiationException e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 根据条件查询
     *
     * @param sql    查询语句
     * @param c      查询对象
     * @param params 参数
     * @param <T>    泛型
     * @return 查询结果
     * @throws SQLException 查询失败
     */
    public <T> List<T> list(String sql, Class<T> c, Object... params) throws SQLException {
        if (null == CONNECTION) {
            return null;
        }
        List<T> result = new ArrayList<>();
        PreparedStatement ps = CONNECTION.prepareStatement(sql);
        for (int i = 0; i < params.length; i++) {
            ps.setObject(i + 1, params[i]);
        }
        ResultSet rs = ps.executeQuery();
        try {
            // 获取所有的属性
            Field[] fields = c.getDeclaredFields();
            while (rs.next()) {
                T obj;
                obj = c.newInstance();
                for (int k = 0; k < fields.length; k++) {
                    fields[k].setAccessible(true);
                    fields[k].set(obj, rs.getObject(k + 1));
                }
                result.add(obj);
            }
        } catch (InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
        } finally {
            if (null != rs) {
                rs.close();
            }
            ps.close();
        }
        return result;
    }

}
