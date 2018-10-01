package com.biock.pilot2018.common;

import java.sql.Statement;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Intercepts({
	@Signature(type=StatementHandler.class, method="update", args={Statement.class})  
    , @Signature(type=StatementHandler.class, method="query", args={Statement.class, ResultHandler.class})
})
public class SQLLoggingPlugin implements Interceptor {

	private static final Logger logger = LoggerFactory.getLogger(SQLLoggingPlugin.class);
	
	@SuppressWarnings("unchecked")
	@Override
	public Object intercept(Invocation invocation) throws Throwable {
		// TODO Auto-generated method stub
		logger.info(" ##### BIOCK 2018 MyBatis SQL Interception ##### ");
		Object[] args = invocation.getArgs();
		
		logger.info(args[0].toString());

		Object proceed = invocation.proceed();
		
		return proceed;

	}

	@Override
	public Object plugin(Object target) {
		// TODO Auto-generated method stub
		return Plugin.wrap(target, this);
	}

	@Override
	public void setProperties(Properties properties) {
		// TODO Auto-generated method stub
		logger.info("properties => {}", properties);

	}


}
