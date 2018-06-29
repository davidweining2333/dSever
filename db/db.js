// 声明mongo程序
var MongoClient = require('mongodb').MongoClient;
// 数据库地址（需要先启动mongo）
// net start/stop mongodb (mongodb为预先安装好的服务)
var url = "mongodb://127.0.0.1:27017/dsaf",
    dbName = "dserver";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    var dbase = db.db(dbName);
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});

module.exports = MongoClient;