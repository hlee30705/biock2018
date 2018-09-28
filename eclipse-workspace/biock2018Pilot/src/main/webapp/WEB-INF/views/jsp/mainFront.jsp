<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Biock Exchange</title>
		<link rel="stylesheet" href="<c:url value="/resources/css/materialize.css" />">
		<link rel="stylesheet" href="<c:url value="/resources/css/custom.css" />">
		<link rel="stylesheet" href="<c:url value="/resources/css/nouislider.min.css" />">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
		
		<script src="<c:url value="/resources/js/hammer.js" />"></script>
		<script src="<c:url value="/resources/pageJs/mainFront.js" />"></script>
		<script src="<c:url value="/resources/commJs/commonJs.js" />"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js"></script> 
	</head>
	<body>
		
		<div class="container valign-wrapper full-height">
			<div class="row eq-height-cols">
				<div class="col s4">
					<h5>Tissue Type</h5>
					<div class="input-field">
						<select id="primaryTissueType" style="display: inline;">
						    <option value="none" selected="selected">Select</option>
						</select>
					</div>
				</div>
				<div class="col s3">
					<h5>Characterization</h5>
					<div class="input-field">
						<select id="characterization" style="display: inline;">
							<option value="none" selected="selected">Select</option>
						</select>
					</div>
				</div>
				<div class="col s3">
					<h5>Format</h5>
					<div class="input-field">
						<select id="format" style="display: inline;">
							<option value="none" selected="selected">Select</option>
						</select>
					</div>
				</div>
				<div class="col s2 valign-wrapper center-align">
					<a class="waves-effect waves-light btn-large center-align" onclick="toDataSelect();"><i class="material-icons">search</i></a>
				</div>
				<div style="position: absolute; bottom: 10px;" id="toDataSelectPg">
					We are using Node.js <!-- <script>document.write(process.versions.node)</script> -->
					Chromium <!-- <script>document.write(process.versions.chrome)</script> -->
					and Electron <!-- <script>document.write(process.versions.electron)</script> -->
				</div>
			</div>
		</div>
		<script>
			//require('./renderer.js')
		</script>
		<script>
			//$(document).ready(function() {
			//$('select').material_select();
			//});
		</script>
	</body>
</html>
