//express 框架  node  的框架
const express = require('express')
const cors = require('cors')
const app = express()  //会自动创.建一个服务器
app.listen(3000)  // 服务器端口
app.use(cors())
// 轮播图接口 localhost ：3000/banner
const banner = require('./banner')
app.get('/banner',(req,res) => {
    res.json({code:200,banner})
}) 

// app 后面跟get   post  表示前端发送过 请 求
// 参数1请求路径  加  /