const jsonServer = require('json-server')
const server = jsonServer.create()
var express = require('express')
var cors = require('cors')
const { connection } = require('./mysql') //mysql文件写的是数据库连接信息 修改为mysql_demo.js

server.use(cors())
server.use(jsonServer.bodyParser)

server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //当允许携带cookies此处的白名单不能写’*’
  next();
});

server.get('/', (req, res, next) => {
  return res.status(404).json({
    msg: '请调用具体接口地址'
  })

})

server.get('/swiperList', (req, res, next) => {
  let selectSql = 'SELECT * FROM travel_swiper WHERE cityId = ' + req.body.cityId;
  connection.query(selectSql, (err, result) => {
    if (err) {
      // 失败处理
      return;
    }
    return res.status(200).json({
      data: result
    })
  })
})


server.listen(3099, () => {
  console.log('JSON Server is running(3099)')
})
