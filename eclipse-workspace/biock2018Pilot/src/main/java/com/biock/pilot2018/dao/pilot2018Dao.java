package com.biock.pilot2018.dao;

import java.util.List;

import com.biock.pilot2018.vo.abstractVo;
import com.biock.pilot2018.vo.commCodeVo;

public interface pilot2018Dao {
	
	public List<commCodeVo> getCodeData(String param) throws Exception;
	
	public List<abstractVo> getDataList(String queryId , abstractVo vo) throws Exception;
	
	public String getMaxSeq(String queryId)throws Exception;
	
	public int saveDataInfo(String queryId , abstractVo vo) throws Exception;

}
