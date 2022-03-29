const express = require('express');
const  path  = require('path');
const BodyParser = require('body-parser');

const app = express();

    app.engine('html',require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use('/public', express.static(path.join(__dirname,'public')));
    app.set('views',path.join(__dirname,'/views'));
    app.use(BodyParser.json());//suporte JSON
    app.use(BodyParser.urlencoded({
        extended:true
    }))

    var listItem = ['Ir ao Mercado', 'teste'];

    //list
    app.get('/',(req,res)=>{
        res.render('index.html',{item:listItem});
    })
    //delete
    app.get('/delete/:id',(req,res)=>{
        listItem = listItem.filter((val,index)=>{
            if(index != req.params.id){
                return val;
            }
        });
        res.render('index.html',{item:listItem});
    })
    //insert
    app.post('/',(req,res)=>{
        listItem.push(req.body.tarefas);
        res.render('index.html',{item:listItem});
    })
app.listen(5000,()=>{
    console.log('Servidor Rodando');
})