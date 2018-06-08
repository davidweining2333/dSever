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

// var httpapp = http.createapp(function(req, res) {
//     //设置请求头  允许所有域名访问 解决跨域
//     // res.setHeader("Access-Control-Allow-Origin", "*");
//     var requestUrl = req.url;
//     console.log(requestUrl)
//     var pathName = url.parse(requestUrl).pathname;
//     // 防止中文乱码
//     pathName = decodeURI(pathName);
//     var hasExt = true;
//     //获取地址中的参数
//     var query = url.parse(requestUrl).query;

//     //用qs模块的方法  把地址中的参数转变成对象 方便获取
//     var queryObj = qs.parse(query);
//     //获取前端传来的myUrl=后面的内容　　GET方式传入的数据
//     var myUrl = queryObj.myUrl;
//     //创建变量保存请求到的数据
//     var data = "";


//     // 如果路径中没有扩展名
//     if (path.extname(pathName) === '') {
//         // 如果不是以/结尾的，加/并作301重定向
//         // if (pathName.charAt(pathName.length-1) != '/'){
//         //     pathName += '/';
//         //     var redirect = 'http://' + res.headers.host + pathName;
//         //     response.writeHead(301, {
//         //         location: redirect
//         //     });
//         //     response.end();
//         //     return ;
//         // }
//         // 添加默认的访问页面,但这个页面不一定存在,后面会处理
//         // pathName += 'index.html';
//         hasExt = false; // 标记默认页面是程序自动添加的
//     }
//     // 获取资源文件的相对路径
//     var filePath = path.join('http/webroot', pathName);
 
//     // 获取对应文件的文档类型
//     var contentType = this.getContentType(filePath);
//     // 如果文件名存在
//     fs.exists(filePath, function(exists) {
//         if (exists) {
//             response.writeHead(200, {'content-type': contentType});
//             var stream = fs.createReadStream(filePath, {flags: 'r', encoding: null});
//             stream.on('error', function () {
//                 response.writeHead(500, {'content-type': 'text/html'});
//                 response.end('<h1>500 app Error</h1>');
//             });
//             // 返回文件内容
//             stream.pipe(response);
//         } else { // 文件名不存在的情况
//             if (hasExt) {
//                 // 如果这个文件不是程序自动添加的，直接返回404
//                 response.writeHead(404, {'content-type': 'text/html'});
//                 response.end('<h1>404 Not Found</h1>');
//             } else {
//                 // 如果文件是程序自动添加的且不存在，则表示用户希望访问的是该目录下的文件列表
//                 var html = "<head><meta charset='utf-8'></head>";
//                 try {
//                     // 用户访问目录
//                     var filedir = filePath.substring(0, filePath.lastIndexOf('\\'));
//                     // 获取用户访问路径下的文件列表
//                     var files = fs.readdirSync(filedir);
//                     // 将访问路径下的所以文件一一列举出来，并添加超链接，以便用户进一步访问
//                     for (var i in files) {
//                         var filename = files[i];
//                         html += "<div><a  href='" + filename + "'>" + filename + "</a></div>";
//                     }
//                 } catch (e){
//                     html += '<h1>您访问的目录不存在</h1>';
//                 }
//                 response.writeHead(200, {'content-type': 'text/html'});
//                 response.end(html);
//             }
//         }
//     });
//     //开始请求数据  http.get()方法
//     http.get(myUrl, function(request) {
//         //监听myUrl地址的请求过程
//         //设置编码格式
//         request.setEncoding("utf8");

//         //数据传输过程中会不断触发data信号
//         request.on("data", function(response) {
//             data += response;
//         });

//         //当数据传输结束触发end
//         request.on("end", function() {
//             //把data数据返回前端
//             res.end(data);
//         });
//     }).on("error", function() {
//         console.log("请求myUrl地址出错！");
//     });
// }).listen(8989,function(err) {
//     if (!err) {
//         console.log("服务器启动成功，正在监听8989...");
//     }
// });