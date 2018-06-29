<h2>一个自己玩的nodejs服务，实现各种功能吧</h2>

#启动服务
node index.js
#启动mongo服务
net start/stop mongodb (mongodb为预先安装好的服务)
#使用pm2启动服务
pm2 start --node-args="--inspect" index.js --watch
使用--node-args增加node参数