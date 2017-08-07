var express =require('express')
var app= express()
var bodyParser = require('body-parser')
var shortid=require('shortid')
var fs = require('fs')
var path=require('path')
var clientPath = path.join(__dirname, '/data.json')

app.use(express.static(clientPath));
app.use(bodyParser.json());

console.log('starting server')
app.route('/api/chirps')
    .get(function(req,res){
        console.log(req.body)
        res.send('heres get')
       // console.log(res)
        next()
    })
    .post(function(req,res){
       // console.log(req)
        
        // fs.writeFile(clientPath, 'utf-8', function(err,file){
            // if (err){
            //     res.sendStatus(500)
            //     res.send('Could not read file')
            // }
            res.send(req.body)
      //  })
        next()
    });


app.listen(3000)