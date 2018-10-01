<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Biock Exchange</title>
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
		<script src="<c:url value="/resources/js/hammer.js" />"></script>
		<script src="<c:url value="/resources/commJs/commonJs.js" />"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js"></script> 
		<script src="<c:url value="/resources/pageJs/dataPurchaseStatus.js" />"></script>
		<script type="text/javascript">
			var purchaseRequestOrderNo = <%= request.getParameter("purchaseRequestOrderNo") %>;
		</script>
	</head>
	<body>	

	</body>
</html>
