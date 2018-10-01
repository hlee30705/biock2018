/**
 * 
 * data purchase request page
 * 
 * author : HyungJoo Lee
 * date of authorization : 2018-09-19 
 * 
 */

var requestDataPurchase = null;
var rqstDataMasterList = null;
var rqstingDataList = null;

$(document).ready(function()
{
	$('#dataPurchaseRequest').bind("click" , function(){
		requestDataPurchase();
	});
	
	ajaxPost("/pilot2018/getBrstCancerRequestDataList" , { dataIdStr : dataIdStr } , requestBrstCncrDataSuccess , ajaxFail);
	
})

var requestBrstCncrDataSuccess = function(response)
{
	rqstDataMasterList = response.requestDataList;
	
	for(var i = 0 ; i < response.requestDataList.length ; i++)
	{
		$('#testDiv > table').append(
				'<tr width="260px;">'+
				    '<td width="30px;"><input type="checkbox" width="20px;"/></td>'+
					'<td width="170px;">'+response.requestDataList[i].dataId+'</td>'+
					'<td>'+response.requestDataList[i].indUserAge+'</td>'+
				'</tr>'
		);
	}
};


/**
 * When ajax method of obtaining individual patient data was not successful
 */
var ajaxFail = function(xhr, ajaxOptions, thrownError)
{
	alert(" error == "+xhr.status);
	alert(thrownError);
};

this.requestDataPurchase = function()
{
	
	rqstingDataList = [];
	
	for(var i = 0 ; i < rqstDataMasterList.length ; i++ )
	{
		var removed = $('#testDiv > table').find('tr:eq('+i+') > td:eq(0) > input[type="checkbox"]').is(':checked');
		
		if(!removed)
			rqstingDataList.push(rqstDataMasterList[i]);
			
	}
	
	ajaxPost("/pilot2018/requestForBrstCncrPurchase" , { rqstDataInfo : rqstingDataList , rqstInfo : serializeObject($('#frm').serializeArray()) } , requestDataPurchaseSuccess , ajaxFail);
	
};

var requestDataPurchaseSuccess = function(response)
{
	alert(response.rtnMsg);
	$('#frm2Div').append('<form id="frm2" method="post">'
			+'<input type="hidden" name="purchaseRequestOrderNo" value="'+response.purchaseRequestOrderNo+'"/>'
			+'</form>');
		
	$('#frm2').attr('action' , '/pilot2018/purchaseRequestStatus');
	$('#frm2').submit();
	
};