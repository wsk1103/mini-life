# 这是一个集电影，音乐和书籍于一体的Java web应用（还在完善中）

### 框架：Spring,Spring MVC,MyBatis,Spring Data,Shiro,Dubbo
### 数据库:MySQL
### 缓存:Redis
### 页面解析框架:Thymeleaf
### 负载均衡:Nginx
### 服务器:Tomcat
### 访问路径：http://119.29.194.92/  
==================================================
##### 项目结构
    com.wsk.movie
        aspect:切面应用
        bean:回显的实体类
            celebrity:json影人条目信息
            maoyan:猫眼
                cinema:json单个电影院信息
                cinemas:json多个电影院信息
                movie:json电影信息
        config:spring启动加载配置
        controller:链接控制
            webSocket:websocket相关配置和实现
        dao:Mybatis接口
        error:自定义异常处理
        music:网易云音乐
            bean:网易云音乐json解析类
            entity:数据库实体类
            service:操作数据库
            thread:线程相关
        pojo:电影相关的数据库实体
        redis:redis操作类
            impl:接口的实现
        service:电影相关的服务操作
            impl:接口的实现
        session:session存活时间配置
        springdata:网易云音乐spring data操作
            entity:网易云音乐的数据库实体类
        task:自定义的定时器
            entity:数据库实体类
            runnable:任务
            service:数据库相关操作
            tool:工具类
        token:token生成器
        tool:工具类
            bean:百度图片识别json结果
        write:文件读写操作
     resources
        mapping:mybatis相关的xml文件
        static:静态资源文件
            css:样式
            image:本地图片
            js:JAVASCRIPT
        templates:页面
            forget:忘记密码
            hot:热门电影
            information:个人相关信息详情
            movie:电影相关信息
            registered:注册
            setting:设置
            
        
        
