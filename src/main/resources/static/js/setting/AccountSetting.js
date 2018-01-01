/**
 * Created by Maibenben on 2017/4/3.
 */
$(function () {
    $('.name-modify,.name').click(function () {
        $('.name').hide(500);
        $('.set-name').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.close').click(function () {
        $('.name').show(500);
        $('.set-name').hide(500);

    });
    $('.tel-modify,.tel').click(function () {
        $('.tel').hide(500);
        $('.set-tel').show(500);
        if ($('.set-name').is(':visible')) {
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.tel-close').click(function () {
        $('.tel').show(500);
        $('.set-tel').hide(500);
    });
    $('.birth,.birth-modify').click(function () {
        $('.birth').hide(500);
        $('.set-birth').show(500);
        if ($('.set-name').is(':visible')) {
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.birth-close').click(function () {
        $('.birth').show(500);
        $('.set-birth').hide(500);
    });
    $('.sex,.sex-modify').click(function () {
        $('.sex').hide(500);
        $('.set-sex').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-name').is(':visible')){
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')) {
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.sex-close').click(function () {
        $('.sex').show(500);
        $('.set-sex').hide(500);
    });
    $('.introduction,.introduction-modify').click(function () {
        $('.introduction').hide(500);
        $('.set-introduction').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-name').is(':visible')){
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.introduction-close').click(function () {
        $('.introduction').show(500);
        $('.set-introduction').hide(500);
    });
    $('.address,.address-modify').click(function () {
        $('.address').hide(500);
        $('.set-address').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-name').is(':visible')){
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
    });
    $('.address-close').click(function () {
        $('.address').show(500);
        $('.set-address').hide(500);
    });
});
var where = new Array(35);

function comefrom(loca, locacity) {
    this.loca = loca;
    this.locacity = locacity;
}

where[0] = new comefrom("请选择省份名", "请选择城市名");
where[1] = new comefrom("北京市","|东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆");
where[2] = new comefrom("上海市","|黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明");
where[3] = new comefrom("天津市","|和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
where[4] = new comefrom("重庆市","|万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁|大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
where[5] = new comefrom("河北省","|石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
where[6] = new comefrom("山西省", "|太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
where[7] = new comefrom("内蒙古自治区","|呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
where[8] = new comefrom("辽宁省","|沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
where[9] = new comefrom("吉林省", "|长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
where[10] = new comefrom("黑龙江省","|哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
where[11] = new comefrom("江苏省","|南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
where[12] = new comefrom("浙江省", "|杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
where[13] = new comefrom("安徽省","|合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
where[14] = new comefrom("福建省", "|福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
where[15] = new comefrom("江西省","|南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
where[16] = new comefrom("山东省","|济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
where[17] = new comefrom("河南省","|郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
where[18] = new comefrom("湖北省","|武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
where[19] = new comefrom("湖南省","|长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
where[20] = new comefrom("广东省","|广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
where[21] = new comefrom("广西壮族自治区","|南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
where[22] = new comefrom("海南省", "|海口|三亚");
where[23] = new comefrom("四川省","|成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
where[24] = new comefrom("贵州省", "|贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
where[25] = new comefrom("云南省","|昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
where[26] = new comefrom("西藏自治区", "|拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
where[27] = new comefrom("陕西省", "|西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
where[28] = new comefrom("甘肃省","|兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
where[29] = new comefrom("宁夏回族自治区", "|银川|石嘴山|吴忠|固原");
where[30] = new comefrom("青海省", "|西宁|海东|海南|海北|黄南|玉树|果洛|海西");
where[31] = new comefrom("新疆维吾尔自治区","|乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
where[32] = new comefrom("香港特别行政区", "");
where[33] = new comefrom("澳门特别行政区", "");
where[34] = new comefrom("台湾省","|台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
where[35] = new comefrom("其它", "|北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");

function select(id, sid) {
    with (document.getElementById(id)) {
        var loca2 = options[selectedIndex].value;
    }
    for (i = 0; i < where.length; i++) {
        if (where[i].loca == loca2) {
            loca3 = (where[i].locacity).split("|");
            for (j = 1; j < loca3.length; j++) {
                with (document.getElementById(sid)) {
                    length = loca3.length;
                    options[j].text = loca3[j];
                    options[j].value = loca3[j];
                    var loca4 = options[selectedIndex].value;
                }
            }
            break;
        }
    }
}

function init(id, sid) {
    with (document.getElementById(id)) {
        length = where.length;
        for (k = 0; k < where.length; k++) {
            options[k].text = where[k].loca;
            options[k].value = where[k].loca;
        }
        options[selectedIndex].text = where[0].loca;
        options[selectedIndex].value = where[0].loca;
    }
    with (document.getElementById(sid)) {
        loca3 = (where[0].locacity).split("|");
        length = loca3.length;
        for (l = 0; l < length; l++) {
            options[l].text = loca3[l];
            options[l].value = loca3[l];
        }
        options[selectedIndex].text = loca3[0];
        options[selectedIndex].value = loca3[0];
    }
}