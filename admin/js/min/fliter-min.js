$(window).load(function(){$("#carlist").dataTable({destroy:!0,ajax:"arrays.txt"}),$("#brand a").click(function(){var a=$(this).attr("data-url"),t=$(this).text();$("#brand .pull-left").html(t),$("#search-value").attr("data-brand",a),l()}),$("#model a").click(function(){var a=$(this).attr("data-url"),t=$(this).text();$("#model .pull-left").html(t),$("#search-value").attr("data-model",a),l()}),$("#price a").click(function(){var a=$(this).attr("data-url"),t=$(this).text();$("#price .pull-left").html(t),$("#search-value").attr("data-price",a),l()});var a=window.location.search;if(-1!==a.indexOf("?"))for(var t=a.substr(1),r=t.split("&"),e=0;e<r.length;e++)document.write([r[e].split("=")[0]],"=",unescape(r[e].split("=")[1]),"<br>");else document.write("none param");var l=function(){var a=$("#search-value").attr("data-brand"),t=$("#search-value").attr("data-model"),r=$("#search-value").attr("data-price");0!==a&&(a="a="+a),0!==t&&(t="a="+t),0!==r&&(r="b ="+r),window.location.search="?"+a+t+r}});