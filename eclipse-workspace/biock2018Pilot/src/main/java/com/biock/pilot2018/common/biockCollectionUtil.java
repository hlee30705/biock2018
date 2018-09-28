package com.biock.pilot2018.common;

import java.util.ArrayList;
import java.util.List;

import com.biock.pilot2018.vo.abstractVo;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class biockCollectionUtil {
	
	/**
	 * input of json String and desired return type of java bean, then it returns json data to java bean
	 * @param jsonString
	 * @param vo
	 * @return 
	 * @throws Exception
	 */
	public static final abstractVo jsonToVo(String jsonString , abstractVo vo) throws Exception{
		
		Gson gson = new Gson();
		
		jsonString = biockStringUtil.toJsonString(jsonString);
		
		return gson.fromJson(jsonString, vo.getClass());
	}
	
	/**
	 * return List of JavaBean with json ArrayList and javaBean as parameter
	 * ex) List<yourVo> list = 
	 * biockCollectionUtil.jsonArrToList ( (List) parameter.map("jsonArrayListKey") , new yourVo());
	 * @param list 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	public static final List<?> jsonArrToList(List list , abstractVo vo) throws Exception{
		
		Gson gson = new Gson();
		List<abstractVo> rtnList = new ArrayList<abstractVo>();
		
		for(int i = 0 ; i < list.size() ; i++) {
			String jarr = biockStringUtil.toJsonString(list.get(i).toString());
			rtnList.add(gson.fromJson(jarr, vo.getClass()));
		}
		
		return rtnList; 
	}
}
