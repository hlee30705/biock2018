package com.biock.pilot2018.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.biock.pilot2018.common.biockCollectionUtil;
import com.biock.pilot2018.common.biockStringUtil;
import com.biock.pilot2018.dao.pilot2018Dao;
import com.biock.pilot2018.vo.abstractVo;
import com.biock.pilot2018.vo.brstCncrDataVo;
import com.biock.pilot2018.vo.brstCncrRqstVo;
import com.biock.pilot2018.vo.commCodeVo;

@Service
public class biock2018Service {
	
	private static final Logger logger = LoggerFactory.getLogger(biock2018Service.class);
	
	@Autowired
	private pilot2018Dao dao;
	
	public Map<String, List<commCodeVo>> getBioDataCtgr() throws Exception
	{
		Map<String, List<commCodeVo>> getBioDataCtgr = new HashMap<String , List<commCodeVo>>();
		
		getBioDataCtgr.put("primaryTissueType", dao.getCodeData("PMTSS")); // <== primary Tissue Type code Data
		getBioDataCtgr.put("characterization", dao.getCodeData("CHCTR")); // <== characterization code Data
		getBioDataCtgr.put("format", dao.getCodeData("FRMT1")); // <== Format code Data
		
		return getBioDataCtgr;
	}
	
	public Map<String, Object> getBreatCancerDataList( Map<String, Object> paramMap) throws Exception
	{
		brstCncrDataVo param = new brstCncrDataVo();
		
		param.setDataTypeCd(paramMap.get("primaryTissueType").toString());
		param.setDataFrmt1Cd(paramMap.get("format").toString());
		
		List<abstractVo> breastCancerDataList = dao.getDataList("getBrstCancerData", param);
		
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		rtnMap.put("dataList", breastCancerDataList);
		
		logger.info(breastCancerDataList.size()+" == dataList ");
		
		rtnMap.put("primaryTissueType", dao.getCodeData("PMTSS")); // <== primary Tissue Type code Data
		rtnMap.put("characterization", dao.getCodeData("CHCTR")); // <== characterization code Data
		rtnMap.put("format", dao.getCodeData("FRMT1")); // <== Format code Data
		
		return rtnMap;
	}
	
	public Map<String, Object> requestingDataList(String dataIdStr) throws Exception
	{
		
		brstCncrDataVo paramVo = new brstCncrDataVo();
		
		paramVo.setDataTypeCd("BRST");
		paramVo.setDataCateCd("CNCR");
		
		String dataIdArr[] = dataIdStr.replaceFirst(":::", "").split(":::");
		
		paramVo.setDataIdArr(dataIdArr);
		
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		
		rtnMap.put("requestDataList", dao.getDataList("getBrstCancerData", paramVo));
		
		return rtnMap;
	}
	
	
	@SuppressWarnings("rawtypes")
	public Map<String, Object> purchaseRequestHandler(Map<String, Object> paramMap) throws Exception 
	{
		
		Map<String, Object> rtnMap = new HashMap<String, Object>();
		
		//brstCncrRqstVo paramVo = ( brstCncrRqstVo ) paramMap.get("rqstInfo");
		
		String maxRqstSeqno = dao.getMaxSeq("getMaxPchRqstSeq");
		int totRqsted = 0;
		int totIndRqstCnt = 0;
		
		/**
		 *  INSERTING DATA PURCHASE REQUEST INFO
		 */
		if(!biockStringUtil.nvl(maxRqstSeqno, "").equals("")) {
			
			brstCncrRqstVo paramVo = (brstCncrRqstVo) biockCollectionUtil.jsonToVo(paramMap.get("rqstInfo").toString(), new brstCncrRqstVo());
			
			paramVo.setDataRqstOrderNo(maxRqstSeqno);
			paramVo.setDataTypeCd("BRST");
			paramVo.setDataCateCd("CNCR");
			
			totRqsted = dao.saveDataInfo("savePchRqstInfo", paramVo);
			
		}
		
		/**
		 *  INSERTING DATA PURCHASE REQUEST INFO FOR INDIVIDUAL DATA_ID MAPPED TO DATA_PURCHASE_REQUEST_ORDER_NO
		 */
		if(totRqsted > 0) {
			
			@SuppressWarnings("unchecked")
			List<brstCncrDataVo> jsonList = (List<brstCncrDataVo>) biockCollectionUtil.jsonArrToList((List) paramMap.get("rqstDataInfo") , new brstCncrDataVo());
			
			brstCncrRqstVo rqstIndVo = null;
			
			for(int i = 0 ; i < jsonList.size() ; i++) {
				
				rqstIndVo = new brstCncrRqstVo();
				rqstIndVo.setDataRqstOrderNo(maxRqstSeqno);
				rqstIndVo.setDataId(jsonList.get(i).getDataId());
				
				totIndRqstCnt += dao.saveDataInfo("savePchRqstIndInfo", rqstIndVo);
			}
		}
		
		rtnMap.put("rtnMsg" , " total "+String.valueOf(totIndRqstCnt)+" data was requested with order number : "+maxRqstSeqno);
		rtnMap.put("purchaseRequestOrderNo", maxRqstSeqno);
		
		return rtnMap;
	}
	

}
