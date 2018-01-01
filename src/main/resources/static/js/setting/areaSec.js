(function ($) {
var areaSelect = function (config) {
	config = config || {};
	var defaults = areaSelect.defaults		
	// 合并默认配置
	for (var i in defaults) {
		if (config[i] === undefined) config[i] = defaults[i];		
	};
	return new areaSelect.fn._init(config);
};

areaSelect.fn = areaSelect.prototype = {	
	_init: function (config) {
		var that = this;
		that.config = config;	
		that._getDOM(config.id);
		
		var objArea = {};
		objArea.areaCon = $('#'+ config.id).next('.area-con');
		objArea.operation = objArea.areaCon.children('.operation');
		objArea.province = objArea.areaCon.children('.province');
		objArea.city = objArea.areaCon.children('.city');
		objArea.area = objArea.areaCon.children('.area');
		
		that._input(config.id, objArea);	
		that._operation(config.id, objArea);
		that._province(config.id, objArea);
		that._overDom(config.id, objArea);
		
		return that;
	},
	//绑定input的click事件
	_input: function(id,obj){
		var that = this;
		$('#' + id).click(function(){
			obj.areaCon.toggle();
		})
	},
	
	
	//绑定省市区及清空的click事件
	_operation: function(id, obj){
		obj.operation.on('click','ul li',function(){
			$(this).addClass('on').siblings().removeClass('on');
			var index = $(this).index();
			switch (index){
				case 0:
					obj.areaCon.children().eq(1).show().siblings('div').not(obj.operation).hide();
					break;
				case 1:
					obj.areaCon.children().eq(2).show().siblings('div').not(obj.operation).hide();
					break;
				case 2:
					obj.areaCon.children().eq(3).show().siblings('div').not(obj.operation).hide();
					break;
				case 3:					
					$('#' + id).val("请选择城市");
					$('#' + id).attr("请选择城市");
					$('#' + id).trigger("click");
					obj.operation.find('li').eq(0).trigger("click");
				break;
			}
		})
	},
	
	//绑定选择区域的三个click事件
	_province: function(id,obj){
		var that = this;
		var selPro = '';
		var selProNum = '';
		var selCity = '';
		//省
		obj.province.on('click','a',function(){
			var _num = $(this).attr('num');
			if(_num == null || _num == 'null'){
				alert("暂时没有相关内容");
				return;	
			}
			var pro = that._cutField(_num);
			selPro = pro;
			selProNum = _num;
			var city = '';
			$.each(jsonText[_num], function(v){
				var city_text = that._cutField(v);
				city += '<a num="'+ v +'" href="javascript:">' + city_text + '</a>';
			});
			var cityBox = obj.city.children('.box');
			cityBox.html('');
			$(city).appendTo(cityBox);
			obj.operation.find('li').eq(1).trigger("click");
			$('#' + id).val(selPro + "-");
			$('#' + id).attr("title", $('#' + id).val());
		})
		
		//市
		obj.city.on('click','a',function(){
			var _num = $(this).attr('num');
			var city = that._cutField(_num);
			selCity = city;
			var area = '';
			$.each(jsonText[selProNum][_num], function(index, v){
				var area_text = that._cutField(v);
				area += '<a num="'+ v +'" href="javascript:">' + area_text + '</a>';
			});
			var areaBox = obj.area.children('.box');
			areaBox.html('');
			$(area).appendTo(areaBox);
			obj.operation.find('li').eq(2).trigger("click");
			$('#' + id).val(selPro + "-" + selCity + "-");
			$('#' + id).attr("title", $('#' + id).val());
		})
		
		//区
		obj.area.on('click','a',function(){
			var _num = $(this).attr('num');
			var area = that._cutField(_num);
			var coding = that._cutCoding(_num);
			$('#' + id).val(selPro + "-" + selCity + "-" + area);
			$('#' + id).attr("title", $('#' + id).val());
			$('#' + id).attr("num", coding);
			$('#' + id).trigger("click");
		})
	},
	//截取字段
	_cutField: function(text){
		var len = text.indexOf('_');
		var textField = text.slice(0,len);
		return textField;
	},
	//截取地域编码
	_cutCoding: function(text){
		var len = text.indexOf('_');
		var textCoding = text.slice(len+1,text.length);
		return textCoding;
	},
	
	//监听Document事件
	_overDom: function(id,obj){
		$(document).on('click',function(e){
			var target  = e.target || e.srcElement;
			if (target.id == id){
				e.preventDefault();
				return;
			}
			obj.areaCon.each(function(){
				if($(target).closest(this).length == 0 && $(this).parent().find("input[id='" + id + "']").attr("id") == id && $(this).is(':visible')){
					$(this).hide();
				}
			});
		});	
	},	
	
	// 获取元素
	_getDOM: function (id) {
		var wrap = $('<div class="area-box"></div>')
		$('#' + id).wrap(wrap).after(areaSelect._templates);		
		return wrap;
	}
};

areaSelect.fn._init.prototype = areaSelect.fn;
$.fn.areaSelect = function () {
	var config = arguments;
	this[this.live ? 'live' : 'bind']('click', function () {
		areaSelect.apply(this, config);
		return false;
	});
	return this;
};

areaSelect._templates =
'<div class="area-con">'
+	'<div class="operation f-clearfix">'
+       '<ul>'
+			'<li class="on"><a href="javascript:">省份</a></li>'
+			'<li><a href="javascript:">城市</a></li>'
+			'<li><a href="javascript:">区县</a></li>'
+			'<li><a href="javascript:">清空</a></li>'
+		'</ul>'
+	'</div>'
+	'<div class="province" style="display:block;">'
+		'<div class="box">'
+			'<div class="sort">A-G</div>'
+			'<div class="list"> <a num="安徽省_340000" href="javascript:">安徽</a> <a num="null" href="javascript:">澳门</a><a num="北京_110000" href="javascript:">北京</a><a num="重庆_500000" href="javascript:">重庆</a><a num="福建省_350000" href="javascript:">福建</a><a num="甘肃省_620000" href="javascript:">甘肃</a><a num="广东省_440000" href="javascript:">广东</a><a num="广西壮族自治区_450000" href="javascript:">广西</a><a num="贵州省_520000" href="javascript:">贵州</a> </div>'
+		'</div>'
+		'<div class="box">'
+			'<div class="sort">H-K</div>'
+			'<div class="list"> <a num="海南省_460000" href="javascript:">海南</a><a num="河北省_130000" href="javascript:">河北</a><a num="河南省_410000" href="javascript:">河南</a><a num="黑龙江省_230000" href="javascript:">黑龙江</a><a num="湖北省_420000" href="javascript:">湖北</a><a num="湖南省_430000" href="javascript:">湖南</a><a num="吉林省_220000" href="javascript:">吉林</a><a num="江苏省_320000" href="javascript:">江苏</a><a num="江西省_360000" href="javascript:">江西</a> </div>'
+		'</div>'
+		'<div class="box">'
+			'<div class="sort">L-S</div>'
+			'<div class="list"> <a num="辽宁省_210000" href="javascript:">辽宁</a><a num="内蒙古自治区_150000" href="javascript:">内蒙古</a><a num="宁夏回族自治区_640000" href="javascript:">宁夏</a><a num="青海省_630000" href="javascript:">青海</a><a num="山东省_370000" href="javascript:">山东</a><a num="山西省_140000" href="javascript:">山西</a><a num="陕西省_610000" href="javascript:">陕西</a><a num="上海_310000" href="javascript:">上海</a><a num="四川省_510000" href="javascript:">四川</a> </div>'
+		'</div>'
+		'<div class="box last">'
+			'<div class="sort">T-Z</div>'
+			'<div class="list"> <a num="天津_120000" href="javascript:">天津</a><a num="null" href="javascript:">台湾</a><a num="null" href="javascript:">香港</a><a num="西藏自治区_540000" href="javascript:">西藏</a><a num="新疆维吾尔自治区_650000" href="javascript:">新疆</a><a num="云南省_530000" href="javascript:">云南</a><a num="浙江省_330000" href="javascript:">浙江</a> </div>'
+		'</div>'
+	'</div>'
+	'<div class="city"><div class="box"></div></div>'
+	'<div class="area"><div class="box"></div></div>'
+'</div>';


/**
 * 默认配置
 */
areaSelect.defaults = {	
	id: null							
	//cityNumber: 10,	//选择城市数
	//getCity: [], //回显的数组
	//showCity: [],	//数组拼接
	//selectedCity:[]  //选中城市
};
window.areaSelect = $.areaSelect = areaSelect;
})(jQuery);



