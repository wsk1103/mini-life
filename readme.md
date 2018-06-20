# 这是一个集电影，音乐和书籍于一体的Java web应用
### 喜欢就点一下Star，谢谢亲的支持
### Java 1.8
### 框架：使用Spring Boot 集成Spring,Spring MVC,MyBatis(前期),Spring Data(后期)
### 数据库:MySQL 5.6
### 缓存:Redis 4.0
### 版本控制:Maven 3.5
### 页面解析框架:Thymeleaf
### 负载均衡:Nginx - 端口80
### 服务器:Tomcat 端口8080和8181(可以使用单个tomcat)
### PS：音乐来源-网易云；电影来源-豆瓣、猫眼；书籍来源-豆瓣
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

### 1. 系统结构
![这里写图片描述](https://img-blog.csdn.net/20180618145939784?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
### 2. 业务流程
##### 客户端
![这里写图片描述](https://img-blog.csdn.net/2018061814533397?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
##### 管理员
![这里写图片描述](https://img-blog.csdn.net/2018061814544196?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
### 4. 数据库
（1）	数据库表汇总  
  数据库表汇总  

|名称 |	表名 |	注释 |
|:------:|:------:|:------:|
|管理员操作记录表|	adminaction|	记录管理员操作|
|管理员信息表	|admininformation|	记录管理员信息|
|书籍表	|book	|记录书籍、图书|
|户收藏表|	collectioncritic|	记录用户收藏的信息|
|说说评论表|	commentcritic	|记录说说的评论|
|举报信息表	|critic_report|	记录举报信息|
|点赞信息表|	goodcritic|	记录说说的点赞情况|
|积分来源表|	integralsource|	记录积分的来源|
|通讯信息表|	message|	记录用户之间的通讯|
|电影名称表|	moviename	|记录电影名|
|好友表|	myfriends	|记录用户之间的好友关系|
|任务表|mytask|	记录后台定时任务|
|任务错误信息表|mytaskerror|记录后台任务错误信息|
|任务日志表|mytasklog|记录后台任务运行情况|
|说说表|publishcritic|记录用户发布的说说|
|用户信息表|userinformation|记录用户的信息|
|用户信誉积分表|userintegral|记录用户的信誉积分|
|用户等级表|userlevel|记录用户的等级|
|用户密码表|userpassword|记录用户的密码|
|用户二维码表|userqrcode|记录用户的二维码|
|音乐专辑表|wangyialbum|记录音乐专辑|
|音乐信息表|wangyimusic|记录音乐信息|
|音乐歌手表|	wangyisinger|记录歌手信息|
### 5. 部分流程图
###### 5.1 用户登录  
![这里写图片描述](https://img-blog.csdn.net/20180618151312585?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
###### 5.2 发表说说  
![这里写图片描述](https://img-blog.csdn.net/20180618151357676?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
###### 5.3 欣赏电影，聆听音乐，阅读书籍  
![这里写图片描述](https://img-blog.csdn.net/20180618151524541?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
###### 5.4 用户信息互动  
![这里写图片描述](https://img-blog.csdn.net/20180618151617421?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
###### 5.5 管理管理用户，说说和举报审核  
![这里写图片描述](https://img-blog.csdn.net/20180618151652305?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
### 6 具体实现细节
##### 6.1 项目技术架构
##### 6.2 登录界面的实现  
![这里写图片描述](https://img-blog.csdn.net/20180618152722694?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![这里写图片描述](https://img-blog.csdn.net/20180618152801452?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![这里写图片描述](https://img-blog.csdn.net/20180618152827153?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
##### 6.3 首页的实现  
![这里写图片描述](https://img-blog.csdn.net/20180618152855194?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

图17 首页界面  

##### 6.4 热门说说
![这里写图片描述](https://img-blog.csdn.net/20180618152914159?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

图18 热门说说  

##### 6.5 用户之间的通讯
![这里写图片描述](https://img-blog.csdn.net/20180618152929210?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图19 用户通讯  

##### 6.6 用户个人中心设置
![这里写图片描述](https://img-blog.csdn.net/20180618152942219?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图20 个人设置中心  
##### 6.7 个人主页
![这里写图片描述](https://img-blog.csdn.net/20180618152953528?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图21 个人界面  

##### 6.8 我的说说，评论，收藏，点赞
![这里写图片描述](https://img-blog.csdn.net/20180618153010511?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

图22我的说说  

![这里写图片描述](https://img-blog.csdn.net/20180618153024433?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图23 我的评论  

![这里写图片描述](https://img-blog.csdn.net/20180618153036438?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

图24 我的收藏  

![这里写图片描述](https://img-blog.csdn.net/20180618153048773?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图25 我的点赞  

##### 6.9 说说评论
![这里写图片描述](https://img-blog.csdn.net/20180618153116148?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图26 评论界面  

##### 6.10 搜索
![这里写图片描述](https://img-blog.csdn.net/20180618153129753?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图27 搜索  

![这里写图片描述](https://img-blog.csdn.net/20180618153141333?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

图28 电影搜索结果  
![这里写图片描述](https://img-blog.csdn.net/20180618153154244?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图29 电影详情  

![这里写图片描述](https://img-blog.csdn.net/20180618153204903?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 图30 音乐搜索  
![这里写图片描述](https://img-blog.csdn.net/20180618153218155?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

图31 图书搜索  

##### 6.11 音乐系统
![这里写图片描述](https://img-blog.csdn.net/20180618153230274?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图32 热门音乐  

##### 6.12 图书系统
![这里写图片描述](https://img-blog.csdn.net/20180618153243412?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图33 图书推荐  
![这里写图片描述](https://img-blog.csdn.net/20180618153256371?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图34 图书详细信息  

##### 6.13 查看正在上映的电影
![这里写图片描述](https://img-blog.csdn.net/20180618153309202?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图35 热映电影详情  
![这里写图片描述](https://img-blog.csdn.net/20180618153320165?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dzazExMDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
图36 热映电影评论  

### 7 备注


### 首次启动项目
1. win系统安装Java 1.8 ， IDEA软件，MySQL数据库，redis，Nginx。
2. 打开MySQL，执行sql文件，将数据导入到MySQL中。
3. 将项目导入到IDEA中，构建为MAVEN项目。  
4. 配置Nginx文件，使其负载均衡。
4. 待项目构建完成后，运行redis和Nginx（或者跳过Nginx）。
6. 修改resource文件中的application.properties，配置其中的数据库信息
7. 修改com.wsk.movie.email.Send文件中的用户账号和密码信息。
8. 由于使用了百度提供的图片识别功能，所以需要修改com.wsk.movie.tool.AuthService中百度提供的clientId和clientSecret（或者直接注释掉该类）
8. 将image.rar文件解压到D:/image，这个文件是存放图片和敏感词的重要文件。
5. 运行com.wsk.movie.MovieApplication的main方法。
6. 访问localhost
