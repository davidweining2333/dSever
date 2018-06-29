var express = require("express");
var router = express.Router();
//3. 创建中间件:use
//截取请求, 拦截回调
router.use('/', function (request, response, next) {
    // console.log('执行中间件')
    // console.log('获取数据库数据')
    // console.log(request.query.page)
    next()
})


//3. 访问服务器(get或者post)
//参数一: 请求根路径
//3.1 get请求
router.get('/getShops', function (request, response) {
    // console.log(request)
    response.send('get请求成功1222fdafdasfsd')
})

//3.2 post请求
router.post('/bb', function (request, response) {
    response.send('post请求成功')
})

module.exports = router;