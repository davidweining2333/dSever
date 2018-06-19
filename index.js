var http = require("http");
var url = require("url");
var fs = require('fs');
var qs = require("querystring");
var path = require("path");
var express = require("express");

const config = require("./config/config");

//2. 创建express服务器
var app = express();
// 全局对象
global.config = config;

// 引入mongodb
require("./db/db.js");

// app.use(express.static('dist'));
app.use(express.static('static'));

var apis = require('./api/api.js');

app.use('/', apis);

//4. 绑定端口
app.listen(8989)
console.log('启动8989')
