package com.biock.pilot2018.daoImpl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.biock.pilot2018.dao.pilot2018Dao;
import com.biock.pilot2018.vo.abstractVo;
import com.biock.pilot2018.vo.commCodeVo;

@Repository("pilot2018Dao")
public class brstCancerDaoImpl implements pilot2018Dao{
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	@Override
	public List<commCodeVo> getCodeData(String param) throws Exception {
		// TODO Auto-generated method stub
		return (List)sqlSession.selectList("getCodeDataByCategory", param);
	}

	@Override
	public List<abstractVo> getDataList(String queryId , abstractVo vo) throws Exception {
		// TODO Auto-generated method stub
		return (List)sqlSession.selectList(queryId, vo);
	}

	@Override
	public String getMaxSeq(String queryId) throws Exception {
		// TODO Auto-generated method stub
		return (String) sqlSession.selectOne(queryId);
	}

	@Override
	public int saveDataInfo(String queryId, abstractVo vo) throws Exception {
		// TODO Auto-generated method stub
		return (int) sqlSession.insert(queryId, vo);
	}



}
