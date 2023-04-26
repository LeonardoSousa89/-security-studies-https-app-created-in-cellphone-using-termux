const port=54322

const fs=require('fs')
const https=require('https')
const log=require('morgan')
const express=require('express')

const app=express()

app.use(log('dev'))

app.get('/', function(req, res){
  res.status(200).json({
    info: 'Site online using https node modules'
  })
})

//os objetos de chave key e cert são obrigatórios, caso contrário o navegador retornará um erro
const options={
  key: fs.readFileSync("./ssh/server.key"),
  cert: fs.readFileSync("./ssh/server.cert")
}

https.createServer(options, app).listen(port, ()=>{
  
  console.table({ port })
  console.log({ key:options.key })
  console.log({ certificate:options.cert })
})
