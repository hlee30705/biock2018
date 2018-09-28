<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Biock Exchange</title>
		<link rel="stylesheet" href="<c:url value="/resources/css/materialize.css" />">
		<link rel="stylesheet" href="<c:url value="/resources/css/materialize.min.css" />">
		<link rel="stylesheet" href="<c:url value="/resources/css/nouislider.min.css" />">
		<link rel="stylesheet" href="<c:url value="/resources/css/custom.css" />">
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
		<script src="https://cdn.rawgit.com/meetselva/attrchange/master/js/attrchange.js" ></script> 
		
		<script src="<c:url value="/resources/pageJs/dataSelect.js" />"></script>
		<script src="<c:url value="/resources/commJs/commonJs.js" />"></script>
		<script src="<c:url value="/resources/js/head.js" />"></script>
		<script src="<c:url value="/resources/js/materialize.js" />"></script>
		<script src="<c:url value="/resources/js/materialize.min.js" />"></script>
		<script src="<c:url value="/resources/js/nouislider.min.js" />"></script>
		<script src="<c:url value="/resources/includes/footer.js" />"></script>
		<script src="<c:url value="/resources/js/renderer.js" />"></script>
		<!-- <script src="<c:url value="/resources/js/custom.js" />"></script> -->
		
	</head>
	<body>
		<div class="filter-container filterland" style="width:250px; background:white;">
		<h5 style="padding-top:30px;">Search Filters</h5>
		<p><strong>Patient Information</strong></p>
		<div id="slider" style="width:95%;"></div>
		<p>Age: Between <span id="l_label">30</span> and <span id="r_label">90</span><br>
		<script type="text/javascript">
			var slider = document.getElementById('slider');

				noUiSlider.create(slider, {
					start: [0, 90],
					connect: true,
					range: {
						'min': 0,
						'max': 90
					}
				});
				
                slider.noUiSlider.on("update",function(e){
                    $("#l_label").html(Math.floor(parseFloat(e[0])));
                    $("#r_label").html(Math.floor(parseFloat(e[1])));
                  });
				 /*var slider = document.getElementById("slider");
                
				noUiSlider.create(slider, {
                    start: [0, 110],
                    range: {
                        "min": 0,
                        "max": 110
                    },
                    format: wNumb({
                        decimals: 0,
                    }),
                    margin:10
                });
				
                slider.noUiSlider.on("update",function(e){
                  $("#l_label").html(e[0]);
                  $("#r_label").html(e[1]);
                });
                
                $("#moufa").click(function(){
                 slider.noUiSlider.set([30,90]);
                });*/
		</script></p>
		<form id="filterFrm">
		<p>Sex<br>
			<label>
	        	<input name="sex" type="radio" class="with-gap" value="ALL" checked/>
				<span>All</span>
			</label>
			<label>
	        	<input name="sex" type="radio" class="with-gap" value="MALE"/>
				<span>Male</span>
			</label>
			<label>
	        	<input name="sex" type="radio" class="with-gap" value="FEMALE"/>
				<span>Female</span>
			</label>
		</p>
		<p>Race<br>
			<!-- <label>
	        	<input name="race" type="checkbox" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label><br> -->
			<label>
	        	<input name="race" type="checkbox" class="with-gap" value="ASN"/>
				<span>Asian</span>
			</label><br>
			<label>
	        	<input name="race" type="checkbox" class="with-gap" value="BLK"/>
				<span>Black</span>
			</label><br>
			<label>
	        	<input name="race" type="checkbox" class="with-gap" value="CCSN"/>
				<span>Caucasian</span>
			</label><br>
			<label>
	        	<input name="race" type="checkbox" class="with-gap" value="HSPC"/>
				<span>Hispanic</span>
			</label><br>
			<label>
	        	<input name="race" type="checkbox" class="with-gap" value="NAMRN"/>
				<span>Native American</span>
			</label><br>
			<label>
	        	<input name="race" type="checkbox" class="with-gap" value="PCISL"/>
				<span>Pacific Islander</span>
			</label>
		</p>
		<p>Menopausal Status<br>
			<label>
	        	<input name="meno" type="radio" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label>
			<label>
	        	<input name="meno" type="radio" class="with-gap" value="N"/>
				<span>Pre</span>
			</label>
			<label>
	        	<input name="meno" type="radio" class="with-gap" value="Y"/>
				<span>Post</span>
			</label>
		</p>
		<p>Family History<br>
			<label>
	        	<input name="hist" type="radio" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label>
			<label>
	        	<input name="hist" type="radio" class="with-gap" value="Y"/>
				<span>Yes</span>
			</label>
			<label>
	        	<input name="hist" type="radio" class="with-gap" value="N"/>
				<span>No</span>
			</label>
		</p>
		<hr>
		
		<p><strong>Pathologic Informatin</strong></p>
		<p>Collected Year<br>
			Slider
		</p>
		<p>Tumor Size (cm)<br>
			Slider
		</p>
		<p>Lymph Node Status<br>
			<label>
	        	<input name="lymp" type="checkbox" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label><br>
			<label>
	        	<input name="lymp" type="checkbox" class="with-gap" value="0"/>
				<span>PN0</span>
			</label><br>
			<label>
	        	<input name="lymp" type="checkbox" class="with-gap" value="1"/>
				<span>PN1</span>
			</label><br>
			<label>
	        	<input name="lymp" type="checkbox" class="with-gap" value="2"/>
				<span>PN2</span>
			</label><br>
			<label>
	        	<input name="lymp" type="checkbox" class="with-gap" value="3"/>
				<span>PN3</span>
			</label>

		</p>
		<!-- <p>Histologic Grade<br>
			<div class="input-field">
				<label>
	        	<input name="hist" type="checkbox" class="with-gap" checked />
				<span>All</span>
			</label><br>
			<label>
	        	<input name="hist" type="checkbox" class="with-gap" />
				<span>Grade I</span>
			</label><br>
			<label>
	        	<input name="hist" type="checkbox" class="with-gap" />
				<span>Grade II</span>
			</label><br>
			<label>
	        	<input name="hist" type="checkbox" class="with-gap" />
				<span>Grade III</span>
			</label>
			</div> 
		</p> -->
		<p>ER Status<br>
			<label>
	        	<input name="erst" type="radio" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label><br>
			<label>
	        	<input name="erst" type="radio" class="with-gap" value="Y"/>
				<span>Positive</span>
			</label><br>
			<label>
	        	<input name="erst" type="radio" class="with-gap" value="N"/>
				<span>Negative</span>
			</label><br>
		</p>
		<p>PR Status<br>
			<label>
	        	<input name="prst" type="radio" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label><br>
			<label>
	        	<input name="prst" type="radio" class="with-gap" value="Y"/>
				<span>Positive</span>
			</label><br>
			<label>
	        	<input name="prst" type="radio" class="with-gap" value="N"/>
				<span>Negative</span>
			</label><br>
		</p>
		<p>HER2 Status<br>
			<label>
	        	<input name="hest" type="radio" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label><br>
			<label>
	        	<input name="hest" type="radio" class="with-gap" value="Y"/>
				<span>Positive</span>
			</label><br>
			<label>
	        	<input name="hest" type="radio" class="with-gap" value="N"/>
				<span>Negative</span>
			</label><br>
		</p>


		<hr>
		<p><strong>Clinical Information</strong></p>
		<p>Recurrence<br>
			<label>
	        	<input name="recur" type="radio" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label>
			<label>
	        	<input name="recur" type="radio" class="with-gap" value="Y"/>
				<span>Yes</span>
			</label>
			<label>
	        	<input name="recur" type="radio" class="with-gap" value="N"/>
				<span>No</span>
			</label>
		</p>
		<p>Distant Metastastis<br>
			<label>
	        	<input name="dism" type="radio" class="with-gap" value="ALL" checked />
				<span>All</span>
			</label>
			<label>
	        	<input name="dism" type="radio" class="with-gap" value="Y"/>
				<span>Yes</span>
			</label>
			<label>
	        	<input name="dism" type="radio" class="with-gap" value="N"/>
				<span>No</span>
			</label>
		</p>
		</form>
	</div>
	<div  class="filter-result">
		<div class="container valign-wrapper full-height" style="height:150px; width:1200px;">
				<div class="col s4" style="margin-left:50px; width:20%">
					<h5>Tissue Type</h5>
					<div class="input-field">
						<select id="primaryTissueType" style="display: inline;">
						    <option value="none" selected="selected">Select</option>
						</select>
					</div>
				</div>
				<div class="col s3" style="margin-left:20px; width:20%;">
					<h5>Characterization</h5>
					<div class="input-field">
						<select id="characterization" style="display: inline;">
							<option value="none" selected="selected">Select</option>
						</select>
					</div>
				</div>
				<div class="col s3" style="margin-left:20px; width:20%;">
					<h5>Format</h5>
					<div class="input-field">
						<select id="format" style="display: inline;">
							<option value="none" selected="selected">Select</option>
						</select>
					</div>
				</div>
				<div class="col s2 valign-wrapper center-align" style="margin-left:20px;">
					<a class="waves-effect waves-light btn-large center-align" onclick="getDataSelect()"><i class="material-icons">search</i></a>
				</div>
		</div>
		<div class="container container-content" style="margin-top:30px;">
			<div class="row">
				<div class="col s12">
					
					<table class="highlight responsive-table" id="tbSelectedData">
					  <tr>
					    <th style="width:50px;"></th>
					    <th colspan="3"  class="center-align">Patient Info</th>
					    <th colspan="6"  class="center-align">Pathologic Info</th>
					    <th colspan="4"  class="center-align">Clinical Info</th>
					  </tr>
					  <tr>
					    <td style="border-right: 1px solid rgba(0, 0, 0, 0.12);"> </td>
					    <td>Age</td>
					    <td>Sex</td>
					    <td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);">Race</td>
					    <td>Year</td>
					    <td>Size</td>
					    <td>Stage</td>
					    <td>ER</td>
					    <td>PR</td>
					    <td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);">HER-2</td>
					    <td>Recurrence</td>
					    <td>Metastasis</td>
					    <td colspan="2" style="width: 20%;">Specific Information</td>
					  </tr>
					 <!--  <tr>
					    <td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);">ㅁ GUY-4002</td>
					    <td>27</td>
					    <td>F</td>
					    <td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);">Asian</td>
					    <td>2017</td>
					    <td  class="center-align">30</td>
					    <td  class="center-align">IV</td>
					    <td  class="center-align">I</td>
					    <td  class="center-align">I</td>
					    <td  style="border-right: 1px solid rgba(0, 0, 0, 0.12);"   class="center-align">I</td>
					    <td   class="center-align">ㅇ</td>
					    <td></td>
					    <td colspan="2" style="width: 20%;">RFS, DMES, Date of Recurrence, Site of Recurrence, Date of Metastasis</td>
					  </tr>   -->
					  </table>
				</div>
			</div>
			
			
			<!--<div class="row eq-height-cols">
				<div class="col s12">
					<table class="highlight" id="tbDataList">
				        <thead>
				          <tr>
				              <th><input type="checkbox" /> <span>ID<span></th>
				              <th>Age</th>
				              <th>Sex</th>
				              <th>Race</th>
				          </tr>
				        </thead>
				
				        <tbody>
				        	<tr>
						        <td><input type="checkbox"/><span>sss</span></td>
					            <td>XXXX</td>
					            <td>YYYY</td>
					            <td>ZZZZ</td>
				            </tr>
				        </tbody>
				        
				          
				      </table>
				</div>
			</div> -->
			<div class="pagination">				
			</div>
			<div id="requestDiv">
				<input type="button" value="purchase Request" id="purchaseRequest"/>
			</div>
			<div id="dataPurchaseRequest">
			</div>
		</div>
	</div>

	</body>
	<!-- <script>
		require('<c:url value="/resources/js/renderer.js" />')
	</script>  -->
	<script>
		//$(document).ready(function() {
		 //$('select').material_select();
		//});
	</script>
	<!-- <script>
		require('<c:url value="/resources/include/footer.js" />');
	</script>  -->
</html>
