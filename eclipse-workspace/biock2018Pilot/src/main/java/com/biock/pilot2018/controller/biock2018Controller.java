package com.biock.pilot2018.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.biock.pilot2018.service.biock2018Service;
import com.biock.pilot2018.vo.brstCncrDataVo;
import com.biock.pilot2018.vo.brstCncrRqstVo;
import com.biock.pilot2018.vo.commCodeVo;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value = "/pilot2018")
public class biock2018Controller {
	
	private static final Logger logger = LoggerFactory.getLogger(biock2018Controller.class);
	
	@Autowired
	private biock2018Service service;
	

	@RequestMapping(value = "/mainFront", method = RequestMethod.GET)
	public String mainFront(Model model , HttpServletRequest request) throws Exception {
		
		logger.info(" ### mainFront CONTROLLER ### ");
		
		return "jsp/mainFront";
	}
	
	@RequestMapping(value = "/getBioDateCtgr", method = RequestMethod.POST)
	public @ResponseBody Map<String, List<commCodeVo>> getBioDateCtgr(@RequestBody Map<String, Object> paramMap , HttpServletRequest request /* http = > https is required later*/ ) throws Exception {
		
		logger.info(" ### getBioDataCtgr CONTROLLER ### ");
		
		return service.getBioDataCtgr();
		
	}
	
	@RequestMapping(value = "/dataSelect", method = RequestMethod.GET)
	public String dataSelect( @RequestParam("primaryTissueType") String ptt , @RequestParam("characterization") String chrtr , @RequestParam("format") String frmt , Model model) throws Exception {
		
		logger.info(" ### dataSelect CONTROLLER ### ");
		
		return "jsp/dataSelect";
	}
	
	@RequestMapping(value = "/getBrstCancerDataList", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> getBrstCancerDataList( @RequestBody Map<String, Object> paramMap ) throws Exception {
		
		logger.info(" ### getBrstCancerDataList CONTROLLER ### ");
		
		return service.getBreatCancerDataList(paramMap);
	}
	
	@RequestMapping(value = "/dataPurchaseRequestPage", method = RequestMethod.POST)
	public String dataPurchaseRequestPage ( @RequestParam("dataIdStr") String dataIdStr ) throws Exception {
		
		logger.info(" #### dataPurchaseRequest CONTROLLER ### ");
		
		return "jsp/dataPurchaseRequest";
	}
	
	@RequestMapping(value = "/getBrstCancerRequestDataList" , method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> getBrstCancerRequestDataList ( @ RequestBody Map<String , Object> paramMap) throws Exception {
		
		logger.info(" #### getBrstCancerRequestDataList CONTROLLER ");
		
		return service.requestingDataList(paramMap.get("dataIdStr").toString());
	}
	
	@RequestMapping(value = "/requestForBrstCncrPurchase" , method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> requestForBrstCncrPurchase( @RequestBody Map<String, Object> paramMap) throws Exception {
		
		logger.info(" ### requestForBrstCncrPurchase CONTROLLER ### ");
		
		List<brstCncrDataVo> rqList = (List<brstCncrDataVo>) paramMap.get("rqstDataInfo");
		
		return service.purchaseRequestHandler(paramMap);
	}
	
	@RequestMapping(value = "/purchaseRequestStatus" , method = RequestMethod.POST)
	public String toDataPurchaseRequest( @RequestParam("purchaseRequestOrderNo") String purcahseRequestOrderNo ) throws Exception {
		
		logger.info(" ### purchaseRequestStatus CONTROLLER ### ");
		
		return "jsp/dataPurchaseStatus";
	}
	
	@RequestMapping(value = "/getDataPurchaseRequestStatusData" , method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> getDataPurchaseRequestStatusData ( @RequestBody Map<String, Object> paramMap) throws Exception {
		
		logger.info(" ### getDataPurchaseRequestStatusData CONTROLLER ### ");
		
		return null;
	}
}
