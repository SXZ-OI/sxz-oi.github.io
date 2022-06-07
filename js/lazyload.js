/**
 * 不会搞啊，！！只有404响应了
 */
$("img").on("error",function(){$(this).attr("src","/img/404-img.jpg"),$(this).attr("width","40%"),$(this).unwrap()})
