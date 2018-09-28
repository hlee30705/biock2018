/**
 * 
 * BIOCK 2018 pilot system

 * 
 * author : HyungJoo Lee
 * date of authorization : 2018 - 09 - 02
 */


$(document).ready(function()
{
	ajaxPost("/pilot2018/getBioDateCtgr" ,
			{ cateCode : "param"} , 
			getBioDataCtgrSuccess , 
			getBioDataCtgrError ); 
						
})

var getBioDataCtgrSuccess = function(response)
{
	console.log(" get Bio Data Category Success ");
	$.each(response.primaryTissueType , function (i, item) {
		console.log(" primary Tissue type == "+item.commCode+" :: "+item.commCodeNm);
	    $('#primaryTissueType').append($('<option>', { 
	        value : item.commCode,
	        text : item.commCodeNm 
	    }));
	});
	
	$.each(response.characterization, function (i, item) {
		console.log(" characterization == "+item.commCode+" :: "+item.commCodeNm);
	    $('#characterization').append($("<option>", { 
	        value : item.commCode,
	        text : item.commCodeNm 
	    }));
	});
	
	$.each(response.format , function (i, item) {
		console.log(" format == "+item.commCode+" :: "+item.commCodeNm);
	    $('#format').append($('<option>', { 
	        value : item.commCode,
	        text : item.commCodeNm 
	    }));
	});
};

var getBioDataCtgrError = function(xhr, ajaxOptions, thrownError)
{
	alert(xhr.status);
	alert(thrownError);
};

var toDataSelect = function()
{
	var tissueType = $('#primaryTissueType').val();
	var characterization = $('#characterization').val();
	var format = $('#format').val();
	
	if(tissueType != "none" && characterization != "none" && format != "none"){
	
		$('#toDataSelectPg').append('<form id="frm" method="get">'
				+'<input type="hidden" name="primaryTissueType" value="'+tissueType+'"/>'
				+'<input type="hidden" name="characterization" value="'+characterization+'"/>'
				+'<input type="hidden" name="format" value="'+format+'"/>'
				+'</form>');
		
		$('#frm').attr('action' , '/pilot2018/dataSelect');
		$('#frm').submit();
	
	}else{
		
		alert("Please select all categories");
		return;
	}
	
};

