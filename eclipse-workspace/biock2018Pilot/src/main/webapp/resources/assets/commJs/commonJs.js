/**
 * 
 * Common functions
 * 
 * Author : HyungJoo Lee
 * 
 */

/**
 *  AJAX POST
 */
var ajaxPost = function(url , param , success , error)
{
	$.ajax({
		
		type : "POST" ,
		url : url ,
		data : JSON.stringify(param) ,
		dataType: "json",
		contentType: "application/json; charset=UTF-8" ,
		success : success ,
		error : error
		
	});
	
};

/**
 * AJAX GET
 */
var ajaxGet = function(url , param , success , error )
{
	$.ajax({
		
		type : "GET" ,
		url : url ,
		data : JSON.stringify(param) ,
		dataType: "json",
		contentType: "application/json; charset=UTF-8" ,
		success : success ,
		error : error
		
	});
};

/**
 * PAGING
 */
var pagination = function(dataList , cntPerPage)
{
	
	$('.pagination > p').remove();
	console.log(Math.ceil(dataList.length / cntPerPage ));
	for(var i = 0 ; i < Math.ceil(dataList.length / cntPerPage ) ; i++ )
	{
		$('.pagination').append('<p>[ '+(i+1)+' ]</p>');
		console.log((i+1));
	}

	$('.pagination > p').css("float", "left");
};


var serializeObject = function(jsonArray)
{
	var jObj = {};
	
	jsonArray.forEach(function(item, index){
		jObj[item.name] = item.value;
	});
	
	return jObj;
	
};
