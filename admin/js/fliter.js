$(window).load(function() {
	$('#carlist').dataTable( {
	        // "processing": true,
	        // "serverSide": true,
	        "destroy": true,
	        "ajax": "arrays.txt"
    } );
	$("#brand a").click(function(){
 		var brandValue = $(this).attr("data-url");
 		var brandText = $(this).text();
 		// var currentUrl = window.location.href;
 		// $("#test").html(currentUrl + '/' + brandValue);
 		$("#brand .pull-left").html(brandText);
 		$("#search-value").attr("data-brand",brandValue);
 		// window.location.search='?a=audi';
 		oSearch();
	});
	$("#model a").click(function(){
 		var modelValue = $(this).attr("data-url");
 		var modelText = $(this).text();
 		// var currentUrl = window.location.href;
 		// $("#test").html(currentUrl + '/' + modelValue);
 		$("#model .pull-left").html(modelText);
 		$("#search-value").attr("data-model",modelValue);
 		// window.location.search='a=audiA1';
 		oSearch();
	});
	$("#price a").click(function(){
 		var priceValue = $(this).attr("data-url");
 		var priceText = $(this).text();
 		// var currentUrl = window.location.href;
 		// $("#test").html(currentUrl + '/' + modelValue);
 		$("#price .pull-left").html(priceText);
 		$("#search-value").attr("data-price",priceValue);
 		// window.location.search='a=audiA1';
 		oSearch();
	});

	var url = window.location.search;
	if(url.indexOf("?")!==-1){
		var str = url.substr(1);
		var strs = str.split("&");
		for(var i=0;i<strs.length;i++){
			document.write([strs[i].split("=")[0]],'=',unescape(strs[i].split("=")[1]),'<br>');
		}
	}else document.write("none param");

	var oSearch = function(){
		var vBrand = $("#search-value").attr("data-brand");
		var vModel = $("#search-value").attr("data-model");
		var vPrice = $("#search-value").attr("data-price");
		if (vBrand !== 0){
			vBrand = "a=" + vBrand;
		}
		if (vModel !== 0){
			vModel = "a=" + vModel;
		}
		if (vPrice !== 0){
			vPrice = "b =" + vPrice;
		}
		window.location.search = '?' + vBrand + vModel + vPrice;
	};

	//刷新table结果
	// var table = function(){
	// 	var vBrand = $("#search-value").attr("data-brand");
	// 	var vModel = $("#search-value").attr("data-model");
	// 	$('#carlist').dataTable( {
	//         // "processing": true,
	//         // "serverSide": true,
	//         "destroy": true,
	//         "ajax": {
	//         	"type":"POST",
	//         	"url":"arrays2.txt",
	//         	"dataType": "json",
	//         	"data":{
	//         			brand : vBrand,
	//         			model : vModel
	//         			}
	//         }
 //   		});
	// };
 });