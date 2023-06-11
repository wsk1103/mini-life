package com.wsk.life.tool;

import com.alibaba.fastjson.JSON;
import com.baidu.aip.imagecensor.AipImageCensor;
import com.wsk.life.tool.bean.Baidu;
import net.coobird.thumbnailator.Thumbnails;
import org.json.JSONObject;
import sun.misc.BASE64Encoder;

import java.io.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by wsk1103 on 2017/5/29.
 */
public class Tool {


//    private Lock lock = new ReentrantLock();

    private Tool() {
    }

    private static class Lazy {
        private static final Tool TOOL = new Tool();
    }

    public static Tool getInstance() {
        return Lazy.TOOL;
    }

    public String dateToStringWithHours(Date date) {
        if (isNullOrEmpty(date)) {
            return "";
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return simpleDateFormat.format(date);
    }

    public String dateToString(Date date) {
        if (isNullOrEmpty(date)) {
            return "";
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        return simpleDateFormat.format(date);
    }

    public Date stringToDate(String time) {
        if (isNullOrEmpty(time)) {
            return new Date();
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date;
        try {
            date = format.parse(time);
        } catch (ParseException e) {
            e.printStackTrace();
            return new Date();
        }
        return date;
    }

    private final static String txt = "一、总则\n" +
            "1.1 wsk1103的所有权和运营权归wsk所有。\n" +
            "1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与wsk之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。\n" +
            "1.3 本协议则可由wsk随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。\n" +
            "二、服务内容\n" +
            "2.1 wsk协议的具体内容由本站根据实际情况提供。\n" +
            "2.2 本站仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。\n" +
            "三、用户帐号\n" +
            "3.1 经本站注册系统完成注册程序并通过身份认证的用户即成为正式用户，可以获得本站规定用户所应享有的一切权限；未经认证仅享有本站规定的部分会员权限。wsk有权对会员的权限设计进行变更。\n" +
            "3.2 用户只能按照注册要求使用真实姓名，及身份证号注册。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。\n" +
            "四、使用规则\n" +
            "4.1 遵守中华人民共和国相关法律法规，包括但不限于《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《最高人民法院关于审理涉及计算机网络著作权纠纷案件适用法律若干问题的解释(法释[2004]1号)》、《全国人大常委会关于维护互联网安全的决定》、《互联网电子公告服务管理规定》、《互联网新闻信息服务管理规定》、《互联网著作权行政保护办法》和《信息网络传播权保护条例》等有关计算机互联网规定和知识产权的法律和法规、实施办法。\n" +
            "4.2 用户对其自行发表、上传或传送的内容负全部责任，所有用户不得在本站任何页面发布、转载、传送含有下列内容之一的信息，否则本站有权自行处理并不通知用户：\n" +
            "(1)违反宪法确定的基本原则的；\n" +
            "(2)危害国家安全，泄漏国家机密，颠覆国家政权，破坏国家统一的；\n" +
            "(3)损害国家荣誉和利益的；\n" +
            "(4)煽动民族仇恨、民族歧视，破坏民族团结的；\n" +
            "(5)破坏国家宗教政策，宣扬邪教和封建迷信的；\n" +
            "(6)散布谣言，扰乱社会秩序，破坏社会稳定的；\n" +
            "(7)散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；\n" +
            "(8)侮辱或者诽谤他人，侵害他人合法权益的；\n" +
            "(9)煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；\n" +
            "(10)以非法民间组织名义活动的；\n" +
            "(11)含有法律、行政法规禁止的其他内容的。\n" +
            "4.3 用户承诺对其发表或者上传于本站的所有信息(即属于《中华人民共和国著作权法》规定的作品，包括但不限于文字、图片、音乐、电影、表演和录音录像制品和电脑程序等)均享有完整的知识产权，或者已经得到相关权利人的合法授权；如用户违反本条规定造成本站被第三人索赔的，用户应全额补偿本站一切费用(包括但不限于各种赔偿费、诉讼代理费及为此支出的其它合理费用)；\n" +
            "4.4 当第三方认为用户发表或者上传于本站的信息侵犯其权利，并根据《信息网络传播权保护条例》或者相关法律规定向本站发送权利通知书时，用户同意本站可以自行判断决定删除涉嫌侵权信息，除非用户提交书面证据材料排除侵权的可能性，本站将不会自动恢复上述删除的信息；\n" +
            "(1)不得为任何非法目的而使用网络服务系统；\n" +
            "(2)遵守所有与网络服务有关的网络协议、规定和程序； (3)不得利用本站进行任何可能对互联网的正常运转造成不利影响的行为；\n" +
            "(4)不得利用本站进行任何不利于本站的行为。\n" +
            "4.5 如用户在使用网络服务时违反上述任何规定，本站有权要求用户改正或直接采取一切必要的措施(包括但不限于删除用户张贴的内容、暂停或终止用户使用网络服务的权利)以减轻用户不当行为而造成的影响。\n" +
            "五、隐私保护\n" +
            "5.1 本站不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在本站的非公开内容，但下列情况除外：\n" +
            "(1)事先获得用户的明确授权；\n" +
            "(2)根据有关的法律法规要求；\n" +
            "(3)按照相关政府主管部门的要求；\n" +
            "(4)为维护社会公众的利益。\n" +
            "5.2 本站可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本站同等的保护用户隐私的责任，则本站有权将用户的注册资料等提供给该第三方。\n" +
            "5.3 在不透露单个用户隐私资料的前提下，本站有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。\n" +
            "六、版权声明\n" +
            "6.1 本站的文字、图片、音频、视频等版权均归wsk公司享有或与作者共同享有，未经本站许可，不得任意转载。\n" +
            "6.2 本站特有的标识、版面设计、编排方式等版权均属wsk公司享有，未经本站许可，不得任意复制或转载。\n" +
            "6.3 使用本站的任何内容均应注明“来源于wsk”及署上作者姓名，按法律规定需要支付稿酬的，应当通知本站及作者及支付稿酬，并独立承担一切法律责任。\n" +
            "6.4 本站享有所有作品用于其它用途的优先权，包括但不限于网站、电子杂志、平面出版等，但在使用前会通知作者，并按同行业的标准支付稿酬。\n" +
            "6.5 本站所有内容仅代表作者自己的立场和观点，与本站无关，由作者本人承担一切法律责任。\n" +
            "6.6 恶意转载本站内容的，本站保留将其诉诸法律的权利。\n" +
            "七、责任声明\n" +
            "7.1 用户明确同意其使用本站网络服务所存在的风险及一切后果将完全由用户本人承担，wsk对此不承担任何责任。\n" +
            "7.2 本站无法保证网络服务一定能满足用户的要求，也不保证网络服务的及时性、安全性、准确性。\n" +
            "7.3 本站不保证为方便用户而设置的外部链接的准确性和完整性，同时，对于该等外部链接指向的不由本站实际控制的任何网页上的内容，本站不承担任何责任。\n" +
            "7.4 对于因不可抗力或本站不能控制的原因造成的网络服务中断或其它缺陷，本站不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。\n" +
            "7.5 对于站向用户提供的下列产品或者服务的质量缺陷本身及其引发的任何损失，本站无需承担任何责任：\n" +
            "(1)本站向用户免费提供的各项网络服务；\n" +
            "(2)本站向用户赠送的任何产品或者服务。\n" +
            "7.6 本站有权于任何时间暂时或永久修改或终止本服务(或其任何部分)，而无论其通知与否，本站对用户和任何第三人均无需承担任何责任。\n" +
            "八、附则\n" +
            "8.1 本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。\n" +
            "8.2 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。\n" +
            "8.3 本协议解释权及修订权归wsk公司所有。";

    /**
     * 获得协议
     *
     * @return 协议
     */
    public String getProtocolTxt() {
        return txt;
    }

    /**
     * 生成MD5
     *
     * @param str 需要转化的字符串
     * @return MD5
     */
    public String getMD5(String str) {
        String result = "";
        try {
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            BASE64Encoder base64Encoder = new BASE64Encoder();
            result = base64Encoder.encode(md5.digest(str.getBytes("UTF-8")));
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return result;
    }

    //随机字符串
    private final static String WSK = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

    /**
     * 获得随机生成的字符串
     *
     * @return 获得随机生成的字符串
     */
    public String getRandom() {
        Random random = new Random();
        StringBuilder stringBuffer = new StringBuilder();
        char[] now = WSK.toCharArray();
        for (int i = 0; i < 10; i++) {
            stringBuffer.append(now[random.nextInt(WSK.length())]);
        }
        return stringBuffer.toString();
    }

    /**
     * 是否为空
     *
     * @param obj 对象
     * @return 空-true
     */
    public boolean isNullOrEmpty(Object obj) {
        if (obj == null)
            return true;
        if (obj instanceof CharSequence)
            return ((CharSequence) obj).length() == 0;
        if (obj instanceof Collection)
            return ((Collection) obj).isEmpty();
        if (obj instanceof Map)
            return ((Map) obj).isEmpty();
        if (obj instanceof Object[]) {
            Object[] object = (Object[]) obj;
            if (object.length == 0) {
                return true;
            }
            boolean empty = true;
            for (Object anObject : object) {
                if (!isNullOrEmpty(anObject)) {
                    empty = false;
                    break;
                }
            }
            return empty;
        }
        return false;
    }

    /**
     * 是否为空
     *
     * @param obj 对象
     * @return 空-false
     */
    public boolean isNotNull(Object obj) {
        return !isNullOrEmpty(obj);
    }

    /**
     * 将图片生成对应的缩略图
     *
     * @param path 传尽量图片的路径
     * @param save 保存图片的路径
     * @return 成功-true
     */
    public boolean thumbnails(String path, String save) {
        try {
            Thumbnails.of(path).size(150, 150).toFile(save);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 读取本地需要过滤的文字
     *
     * @return 敏感词库
     * @throws IOException 文件读取失败
     */
    private ArrayList<String> readTxt() throws IOException {
        ArrayList<String> list = new ArrayList<>();
        String encoding = "GBK";
        String path = "D:\\image\\txt\\all.txt";
        File file = new File(path);
        if (!file.exists()) {
            path = "C:\\myproject\\image\\txt\\all.txt";
            file = new File(path);
        }
        InputStreamReader reader = new InputStreamReader(new FileInputStream(file), encoding);
        BufferedReader bufferedReader = new BufferedReader(reader);
        String txt;
        while ((txt = bufferedReader.readLine()) != null) {
            list.add(txt);
        }
        reader.close();
        return list;
    }

    /**
     * 文字过滤,已经废弃
     *
     * @param test 需要替换的内容
     * @return 替换后的结果
     */
    @Deprecated
    public String txtReplace(String test) {
        try {
            ArrayList<String> list = readTxt();
            test = test.replaceAll("\\s*|\t|\r|\n", "");
            for (String aList : list) {
                test = test.replaceAll(aList, "**");
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
        return test;
    }

    //色情图片识别
    //设置APPID/AK/SK
    private static final String APP_ID = "APP_ID";
    private static final String API_KEY = "API_KEY";
    private static final String SECRET_KEY = "SECRET_KEY";

    /**
     * 色情图片识别
     *
     * @param path 图片路径
     * @return 正常-true
     */
    public boolean checkPornograp(String path) {
        if (!new File(path).exists()) {
            return false;
        }
        // 初始化一个AipImageCensor
        AipImageCensor client = new AipImageCensor(APP_ID, API_KEY, SECRET_KEY);
        // 可选：设置网络连接参数
        client.setConnectionTimeoutInMillis(2000);
        client.setSocketTimeoutInMillis(60000);
        // 调用接口
//        String path = "D:\\image\\CG63dcCaGZhCkWpqEhFF2017-01-17.jpg";
        Baidu baidu;
        try {
            JSONObject res = client.antiPorn(path);
            baidu = com.alibaba.fastjson.JSONObject.parseObject(res.toString(2), Baidu.class);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return "正常".equals(baidu.getConclusion());
    }

    @Deprecated
    public <T> T jsonToBean(String json, Class<T> clazz) {
//        System.out.println(json);
        return com.alibaba.fastjson.JSONObject.parseObject(json, clazz);
    }

    @Deprecated
    public <T> String toJson(T t) {
        return JSON.toJSONString(t);
    }

}
