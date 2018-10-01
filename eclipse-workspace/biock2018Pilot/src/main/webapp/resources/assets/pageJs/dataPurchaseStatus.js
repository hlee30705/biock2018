/**
 * 
 */
$(document).ready(function()
{
	
	ajaxPost("/pilot2018/getDataPurchaseRequestStatusData" , { purchaseRequestOrderNo : purchaseRequestOrderNo } , getDataPurchaseRequestStatusDataSuccess , ajaxFail);
	
})

var getDataPurchaseRequestStatusData = function(response)
{
	
};

/**
 * When ajax method of obtaining individual patient data was not successful
 */
var ajaxFail = function(xhr, ajaxOptions, thrownError)
{
	alert(xhr.status);
	alert(thrownError);
};