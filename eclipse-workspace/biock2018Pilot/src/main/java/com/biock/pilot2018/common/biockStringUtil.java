package com.biock.pilot2018.common;

public class biockStringUtil {

	/**
	 * 
	 * @param paramStr : String value going through process
	 * @param rtnStr : String values returns when paramStr == null or paramStr == ""
	 * @return rtnVal 
	 * @throws Exception
	 */
	public static final String nvl(String paramStr , String rtnStr ) throws Exception{
		
		String rtnVal = "";
		
		if(paramStr != null && !"".equals(paramStr)) {
			rtnVal = paramStr;
		}else {
			rtnVal = rtnStr;
		}
		
		return rtnVal;
	}
	
	/**
	 * returns valid json String ex) {key:value} = > {"key":"value"}
	 * @param jsonString
	 * @return
	 * @throws Exception
	 */
	public static final String toJsonString(String jsonString) throws Exception{
		
		jsonString = jsonString.replaceAll("\\{" , "\\{\"");
		jsonString = jsonString.replaceAll(",", "\" , \"");
		jsonString = jsonString.replaceAll(", \" " , ", \"");
		jsonString = jsonString.replaceAll("\\}" , "\"\\}");
		jsonString = jsonString.replaceAll("=" , "\"=\"");
		jsonString = jsonString.replaceAll("\"null\"" , "null");
		
		return jsonString;
	}
}
