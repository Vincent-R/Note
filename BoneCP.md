#### BoneCp
* BoneCP是一个快速、免费而且开源的java数据库连接池(JDBC Pool)管理工具。

#### BoneCP-Spring详细配置(applicationContext文件中)
* `<bean id="dataSource" class="com.jolbox.bonecp.BoneCPDataSource" destroy-method="close">`  
&emsp;<font color=green>//数据库驱动</font>  
&emsp;`<property name="driverClass" value="${aliLibrary.db.driverClass}" />`  
&emsp;<font color=green>//相应驱动的jdbcUrl,你懂的</font>  
&emsp;`<property name="jdbcUrl" value="${aliLibrary.db.jdbcUrl}" />`  
&emsp;<font color=green>//数据库的用户名</font>  
&emsp;`<property name="username" value="${aliLibrary.db.username}" />`  
&emsp;<font color=green>//数据库的密码</font>  
&emsp;`<property name="password" value="${aliLibrary.db.password}" />`  
&emsp;<font color=green>//检查数据库连接池中空闲连接的间隔时间，单位是分，默认值：240，如果要取消则设置为0</font>  
&emsp;`<property name="idleConnectionTestPeriod" value="${aliLibrary.db.idleConnectionTestPeriod}" />`  
&emsp;<font color=green>//连接池中未使用的链接最大存活时间，单位是分，默认值：60，如果要永远存活设置为0</font>  
&emsp;`<property name="idleMaxAge" value="${aliLibrary.db.idleMaxAge}" />`  
&emsp;<font color=green>//每个分区最大的连接数</font>  
&emsp;`<property name="maxConnectionsPerPartition" value="${aliLibrary.db.maxConnectionsPerPartition}" />`  
&emsp;<font color=green>//每个分区最小的连接数</font>  
&emsp;`<property name="minConnectionsPerPartition" value="${aliLibrary.db.minConnectionsPerPartition}" />`  
&emsp;<font color=green>//分区数 ，默认值2，最小1，推荐3-4，视应用而定</font>
&emsp;`<property name="partitionCount" value="${aliLibrary.db.partitionCount}" />`  
&emsp;<font color=green>//每次去拿数据库连接的时候一次性要拿几个,默认值：2</font>   
&emsp;`<property name="acquireIncrement" value="${aliLibrary.db.acquireIncrement}" />`  
&emsp;<font color=green>//缓存prepared statements的大小，默认值：0</font>   
&emsp;`<property name="statementsCacheSize" value="${aliLibrary.db.statementsCacheSize}" />`  
&emsp;<font color=green>//每个分区释放链接助理进程的数量，默认值：3，除非你的一个数据库连接的时间内做了很多工作，不然过多的助理进程会影响你的性能</font>  
&emsp;`<property name="releaseHelperThreads" value="${aliLibrary.db.releaseHelperThreads}" />`  
`</bean>`
