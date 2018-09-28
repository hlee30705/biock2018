/**
 * 
 * BIOCK 2018 pilot system ( data Select Page )

 * 
 * author : HyungJoo Lee
 * date of authorization : 2018 - 09 - 13
 */

var masterDataList = []; // it will contain all data from server 
var displayingDataList = []; // this will displaying data for dataList

var getBrstCancerDataList = null; // event of setting up parameters for displaying list of patients
var getDataSelect = null; // event of setting up parameter by select boxes above
var displayDataList = null; // actual displaying of list of patients
var onFilterChangeEventHandler = null; //when parameter at filter has changed, displaying list of patients changes dynamically
var dataPurchaseRequest = null; // request to purchase selected data


/**
 * breaking down parameters at URL to obtain dataSeach Categories
 */
$(document).ready(function()
{

	$('#filterFrm').find('input[name="sex"] , input[name="race"] , input[name="meno"] , '+
			'input[name="hist"] , input[name="lymp"] , input[name="erst"] , input[name="prst"] , '+
			'input[name="hest"] , input[name="recur"] , input[name="dism"]').bind("change", function(){
    	onFilterChangeEventHandler();
    });
	$('#purchaseRequest').bind("click", function(){
		dataPurchaseRequest();
	});

	var url = unescape(location.href); 

	var paramArr = (url.substring(url.indexOf("?")+1,url.length)).split("&"); 
	 
	for(var i = 0 ; i < paramArr.length ; i++){
	  
		var temp = paramArr[i].split("="); 
	  
		if(temp[0] == "primaryTissueType") 
			primaryTissueType = temp[1];
		else if(temp[0] == "characterization") 
			characterization = temp[1];
		else if(temp[0] == "format") 
			format = temp[1];
	}

	getBrstCancerDataList(primaryTissueType , characterization , format);
	
})

/**
 * Age slide bar value change event detector
 * @returns
 */

$(function() {
	$('.noUi-connect').attrchange({
	    trackValues: true , 
	    callback: function(evnt) {
	    	onFilterChangeEventHandler();
	        
	    }
	})
});



/**
 *  Obtaining initial individual dataRows during page onload event
 */
this.getBrstCancerDataList = function(primaryTissueType , characterization , format)
{
	
	ajaxPost("/pilot2018/getBrstCancerDataList" , 
			{ primaryTissueType : primaryTissueType 
		, characterization : characterization 
		, format : format } , 
			getBrstCancerDataSuccess, 
			ajaxFail );
};

/**
 * When ajax method of obtaining individual patient data was successful
 */
var getBrstCancerDataSuccess = function(response)
{
	console.log(" getBreastCancerData Success ");
	$('#primaryTissueType > option').remove();
	$.each(response.primaryTissueType , function (i, item) {
		console.log(" data select page primary Tissue type == "+item.commCode+" :: "+item.commCodeNm);
	    $('#primaryTissueType').append($('<option>', { 
	        value : item.commCode,
	        text : item.commCodeNm 
	    }));
	});
	
	$('#characterization > option').remove();
	$.each(response.characterization, function (i, item) {
		console.log(" data select page characterization == "+item.commCode+" :: "+item.commCodeNm);
	    $('#characterization').append($("<option>", { 
	        value : item.commCode,
	        text : item.commCodeNm 
	    }));
	});
	
	$('#format > option').remove();
	$.each(response.format , function (i, item) {
		console.log(" data select page format == "+item.commCode+" :: "+item.commCodeNm);
	    $('#format').append($('<option>', { 
	        value : item.commCode,
	        text : item.commCodeNm 
	    }));
	});
	
	masterDataList = response.dataList;
	
	displayDataList(response.dataList);
};

/**
 * When ajax method of obtaining individual patient data was not successful
 */
var ajaxFail = function(xhr, ajaxOptions, thrownError)
{
	alert(xhr.status);
	alert(thrownError);
};

/**
 * displaying of dataRows by individual patients 
 */
this.displayDataList = function(dataList)
{
	
	$('#tbSelectedData > tbody').find('tr').remove();
	
	$('#tbSelectedData > tbody').append('<tr>'+
					    '<td style="border-right: 1px solid rgba(0, 0, 0, 0.12);"> </td>'+
					    '<td>Age</td>'+
					    '<td>Sex</td>'+
					    '<td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);">Race</td>'+
					    '<td>Year</td>'+
					    '<td>Size</td>'+
					    '<td>Stage</td>'+
					    '<td>ER</td>'+
					    '<td>PR</td>'+
					    '<td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);">HER-2</td>'+
					    '<td>Recurrence</td>'+
					    '<td>Metastasis</td>'+
					    '<td colspan="2" style="width: 20%;">Specific Information</td>'+
					  '</tr>');
	
	
	for( var i = 0 ; i < dataList.length ; i++)
	{
		
		var containingInfo = "";
		
		if(dataList[i].dataRfsYn == "Y" && dataList[i].dataDmfsYn == "Y")
		{
			containingInfo = "RFS, DMES, Date of Recurrence, Site of Recurrence, Date of Metastasis";
		}
		else if(dataList[i].dataRfsYn == "N" && dataList[i].dataDmfsYn == "Y")
		{
			containingInfo = "DMES , DATE of Metastasis";
		}
		else if(dataList[i].dataRfsYn == "Y" && dataList[i].dataDmfsYn == "N")
		{
			containingInfo = "RFS , Date of Recurrence , Site of Recurrence";
		}
		
		$('#tbSelectedData > tbody').append('<tr>'+
				'<td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);"><input type="checkbox" ><span></span></input></td>'+
			    '<td>'+dataList[i].indUserAge+'</td>'+
			    '<td>'+dataList[i].indUserGender+'</td>'+
			    '<td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);">'+dataList[i].indUserRaceCdNm+'</td>'+
			    '<td>'+dataList[i].dataAcqDt.toString().substring(0, 4)+'</td>'+
			    '<td  class="center-align">'+dataList[i].dataTmrSz+'</td>'+
			    '<td  class="center-align">'+dataList[i].dataHstGr+'</td>'+
			    '<td  class="center-align">'+dataList[i].dataEstgnYn+'</td>'+
			    '<td  class="center-align">'+dataList[i].dataPrgtnYn+'</td>'+
			    '<td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);"   class="center-align">'+dataList[i].dataHer2Yn+'</td>'+
			    '<td   class="center-align">'+dataList[i].dataRfsYn+'</td>'+
			    '<td style="text-align:center; ">'+dataList[i].dataDmfsYn+'</td>'+
			    '<td colspan="2" style="width: 20%;">'+containingInfo+'</td>'+
										'</tr>');
	}
};

/**
 * Upper bio data select category onclick event for search button
 */
this.getDataSelect = function()
{
	getBrstCancerDataList($("#primaryTissueType").val() , $("#characterization").val() , $("#format").val());
};

/**
 * Taking references from filter categories and renew data list being displayed
 */
this.onFilterChangeEventHandler = function()
{
	displayingDataList = [];
	
	//age check
    var fromAge = $("#l_label").html();
    var toAge = $("#r_label").html();
    
    //gender Check
    var gender = $('#filterFrm').find('input[name="sex"]:checked').val();
    
    //each로 loop를 돌면서 race checkbox의 check된 값을 가져와 담아준다.
	var raceArr = new Array();
	$('#filterFrm').find('input[name="race"]:checked').each(function(){
    	raceArr.push($(this).val());
    });
	
    //menopause yn
    var meno = $('#filterFrm').find('input[name="meno"]:checked').val();

    //family history yn
    var fmly = $('#filterFrm').find('input[name="hist"]:checked').val();
    
    //each로 loop를 돌면서 pn stage checkbox의 check된 값을 가져와 담아준다.
	var pnArr = new Array();
    $('#filterFrm').find('input[name="lymp"]:checked').each(function(){
    	pnArr.push($(this).val());
    });
    
    // estrogen y/n
    var erst = $('#filterFrm').find('input[name="erst"]:checked').val();
    
    // prst y/n
    var prst = $('#filterFrm').find('input[name="prst"]:checked').val();
    
    // her2
    var her2 = $('#filterFrm').find('input[name="hest"]:checked').val();
    
    // recurrence
    var recurrence = $('#filterFrm').find('input[name="recur"]:checked').val();
    
    var dmfs = $('#filterFrm').find('input[name="dism"]:checked').val();
    
	for(var i = 0 ; i < masterDataList.length ; i++ )
	{
		
        var ageCheck = masterDataList[i].indUserAge > parseInt(fromAge) && masterDataList[i].indUserAge <= parseInt(toAge);
		var genderCheck = gender == "ALL" ? true : masterDataList[i].indUserGender == gender;
        var menoCheck = meno == "ALL" ? true : masterDataList[i].dataMnpYn == meno;
        var fmlyCheck = fmly == "ALL" ? true : masterDataList[i].dataFmlyYn == fmly;
        var pnArrCheck = pnArr.includes("ALL") ? true : pnArr.includes(masterDataList[i].dataPnStg);
        var erstCheck = erst == "ALL" ? true : masterDataList[i].dataEstgnYn == erst;
        var prstCheck = prst == "ALL" ? true : masterDataList[i].dataPrgtnYn == prst;
        var her2Check = her2 == "ALL" ? true : masterDataList[i].dataHer2Yn == her2;
        var recurrenceCheck = recurrence == "ALL" ? true : masterDataList[i].dataRfsYn == recurrence;
        var dmfsCheck = dmfs == "ALL" ? true : masterDataList[i].dataDmfsYn == dmfs;
        
        if( ageCheck == true && 
        	genderCheck == true &&
        	raceArr.includes(masterDataList[i].indUserRaceCd) &&
        	menoCheck == true &&
        	fmlyCheck == true &&
        	pnArrCheck == true &&
        	erstCheck == true &&
        	prstCheck == true &&
        	her2Check == true &&
        	recurrenceCheck == true &&
        	dmfsCheck == true )
        {
        	displayingDataList.push(masterDataList[i]);
        }
	}
	
	displayDataList(displayingDataList);

};


this.dataPurchaseRequest = function()
{
	var dataIdStr = "";
	var dataIdRqstCnt = 0;
	
	for( var i = 0 ; i < masterDataList.length ; i++ )
	{
		var mathRandom = Math.floor(Math.random() * (6 - 1));
		
		if(mathRandom == 2 || mathRandom == 4)
		{
			dataIdStr = dataIdStr+":::"+masterDataList[i].dataId;
		}
	}
		
	$('#dataPurchaseRequest').append('<form id="frm" method="post">'
			+'<input type="hidden" name="dataIdStr" value="'+dataIdStr+'"/>'
			+'</form>');
		
	$('#frm').attr('action' , '/pilot2018/dataPurchaseRequestPage');
	$('#frm').submit();
	
};
