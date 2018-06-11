var http = require("http");
var url = require("url");
var fs = require('fs');
var qs = require("querystring");
var path = require("path");
var express = require("express");

//2. 创建express服务器
var app = express();

app.use(express.static('dist'));

//3. 创建中间件:use
//截取请求, 拦截回调
app.use('/', function (request, response, next) {
    console.log('执行中间件')
    // console.log('获取数据库数据')
    console.log(request.query.page)
    next()
})


//3. 访问服务器(get或者post)
//参数一: 请求根路径
//3.1 get请求
app.get('/getShops', function (request, response) {
    // console.log(request)
    response.send('get请求成功')
})

//3.2 post请求
app.post('/bb', function (request, response) {
    response.send('post请求成功')
})

//4. 绑定端口
app.listen(8989)
console.log('启动8989')
