package com.biock.pilot2018.common;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class biockDateUtil {
	
	private static DateFormat df = null;
	
	public biockDateUtil() {
		this.df = new SimpleDateFormat("yyyyMMdd");
	}
	
	/**
	 * get todays date
	 * @return
	 */
	public static final String getToday() {
		
		Date date = new Date();
		String todate = "";
		
		try {
			todate = df.format(date);
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return todate;
	}
	
	/**
	 * 
	 * @param paramDay : date for parameter, it should be in format yyyyMMdd
	 * @param daysNum  : adding date count 
	 * @return
	 */
	public static final String addDay(String paramDay , int daysNum) {
		
		String rtnVal = "";
		
		try {
			
			Date date = df.parse(paramDay);
			
			Calendar cal = Calendar.getInstance();
			
			cal.setTime(date);
			cal.add(Calendar.DATE, daysNum);
			
			rtnVal = df.format(cal.getTime());
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return rtnVal;
	}
	
	/**
	 * 
	 * @param paramDay : date for parameter, it should be in format yyyyMMdd
	 * @param daysNum  : adding month count 
	 * @return
	 */
	public static final String addMonth(String paramDay , int monthNum) {
		
		String rtnVal = "";
		
		try {
			
			Date date = df.parse(paramDay);
			
			Calendar cal = Calendar.getInstance();
			
			cal.setTime(date);
			cal.add(Calendar.MONTH, monthNum);
			
			rtnVal = df.format(cal.getTime());
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return rtnVal;
		
	}
}
