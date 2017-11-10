### MongoDB
#### 知识点
* 主键：MongoDB自动将_id字段设置为主键
* 一个mongodb中可以建立多个数据库，数据库名小写
* 一个mongodb中可以建立多个数据库。MongoDB的默认数据库为"db"，该数据库存储在data目录中
* MongoDB的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中
* MongoDB区分类型和大小写
* MongoDB的文档不能有重复的键
* 文档的键是字符串。除了少数例外情况，键可以使用任意UTF-8字符
* 文档中的键/值对是有序的
* 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)

#### MongoDB安装
* `mongod --dbpath c:\data\db` //指定mongoDB持久化储存目录

#### MongoDB连接
* `mongod` //在安装目录bin下，用于启动mongodb
* `mongo` //MongoDB shell连接localhost数据库
* `mongo -u <user> -p <pass> --host <host> --port 27017` //连接指定数据库

#### 常用命令shell
---
**数据库操作**
* `show dbs` //显示所有数据库，若数据库中没有数据，将不会被显示
* `db` //显示当前数据库对象或集合
* `use db_name` //如果数据库不存在，则创建数据库，否则切换到指定数据库
* `db.dropDatabase()` //删除当前数据库
* `db.stats()` //显示当前db状态
* `db.getMongo()` //查看当前db的链接机器地址
---
**集合操作(table)**
* `db.getCollectionNames()` //得到当前db的所有聚集集合名称
* `db.getCollection("account")` //得到指定名称的聚集集合
* `db.collection_name.drop()` //删除当前数据库下名为collectionname的集合
* `db.createCollection("coll_name", {size: 20, capped: 5, max: 100})` //创建集合
* `db.printCollectionStats()` //显示集合索引
---
**文档操作(元数据)**  
#### 查询
* `db.collection_name.find()` //查询指定集合中的所有文档
* `db.collection_name.distinct("name")` //查询去掉指定列name重复数据后的指定文档中的所有文档
* `db.collection_name.find({"age": 22})` //查询指定集合中age = 22的记录
* `db.collection_name.find({age: {$gt: 22}})` //age>22
* `db.collection_name.find({age: {$lt: 22}})` //age<22
* `db.collection_name.find({age: {$gte: 25}})` //age>=22
* `db.collection_name.find({age: {$lte: 25}})` //age<=22
* `db.collection_name.find({age: {$gte: 23, $lte: 26}})` //age>=23且age<=26
* `db.collection_name.find({name: /mongo/})` //查询name中包含 mongo的数据
* `db.collection_name.find({"age": 22})` //查询指定集合中age = 22的记录
#### 插入
* `db.collection_name.insert({"_id":"59e0a22430d5c4a4d039ef24","age": 22,"name":"vincent"})` //向指定集合中插入数据,指定_id，否则系统自动复制主键。如果指定的集合不存在，将会自动创建集合
* ...

### Mongoose
* User.find({userage: {$gte: 21, $lte: 65}}, callback);    //这表示查询年龄大于等21而且小于等于65岁
* 类似还有
```
$or　　　　或关系
$nor　　　 或关系取反
$gt　　　　大于
$gte　　　 大于等于
$lt　　　　 小于
$lte　　　  小于等于
$ne            不等于
$in             在多个值范围内
$nin           不在多个值范围内
$all            匹配数组中多个值
$regex　　正则，用于模糊查询
$size　　　匹配数组大小
$maxDistance　　范围查询，距离（基于LBS）
$mod　　   取模运算
$near　　　邻域查询，查询附近的位置（基于LBS）
$exists　　  字段是否存在
$elemMatch　　匹配内数组内的元素
$within　　范围查询（基于LBS）
$box　　　 范围查询，矩形范围（基于LBS）
$center       范围醒询，圆形范围（基于LBS）
$centerSphere　　范围查询，球形范围（基于LBS）
$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）
```

* 设置Mongo为后台服务(admin打开)
`mongod.exe --logpath D:\data\mongodb.log --logappend --dbpath D:\data\db --directoryperdb --serviceName MongoDBServer --install` //安装服务
`net start MongoDBServer` //启动服务

* 导出指定数据库
`mongodump -h 127.0.0.1 -d emrs -o v:/`

* 导入指定数据库
`mongorestore -d emrs v:/emrs/`

## MongoDB访问权限控制

* 在默认情况下，MongoDB没有管理员账户，所有人都可以直接访问数据库。MongoDB的用户分为两种，一种是admin用户，另一种是特定数据库用户。admin用户拥有最高的权限，而特定数据库用户则只能访问特定的数据库。

* `mongod -dbpath d:\work\data\mongodb\db -auth` //MongoDB通过`-auth`开启权限验证

* `db.auth('用户名','密码')` //登录验证用户，开启权限验证后，只有进行登录验证后才可以操作数据库。不同数据库只验证本数据库中的用户。超级管理员登陆后，可以对所有数据库进行操作；特定数据库用户只对规定的数据库有操作权限。

* 添加超级管理员(在为开启权限验证时添加)
```
use admin
db.createUser(
  {
    user: "用户名",
    pwd: "用户密码",
    roles: [ { role: "root", db: "admin" } ] //root是角色，详情可查询官网
  }
)

```

* 添加特点数据库用户
```
use dbtest
db.createUser(
  {
    user: "用户名",
    pwd: "用户密码",
    roles: [ { role: "dbOwner", db: "dbtest" } ]
  }
)
```
