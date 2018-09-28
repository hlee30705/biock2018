<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Biock Exchange</title>
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
		<script src="<c:url value="/resources/pageJs/dataPurchaseRequest.js" />"></script>
		<script src="<c:url value="/resources/js/hammer.js" />"></script>
		<script src="<c:url value="/resources/commJs/commonJs.js" />"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js"></script> 
		<script type="text/javascript">
			var dataIdStr = "<%= request.getParameter("dataIdStr") %>";
		</script>
	</head>
	<body>	
		<div id="testDiv">
			<table>
			</table>
		</div>
		<form id="frm">
			<div>
				<input type="text" name="dataRqstUserEmail" /><br>
				<input type="text" name="dataRqstUserNm" /><br>
				<input type="text" name="dataRqstRschLead" /><br>
				<input type="text" name="dataRschPrps" /><br>
				<input type="text" name="expcSmplUsg" /><br>
		        <input type="text" name="addtnlRqst" /><br>
		        <input type="text" name="cmplcMsg" /><br>
				<input type="button" value="request" id="dataPurchaseRequest"/>
			</div>
		</form>
	</body>
</html>
