var express=require('express');
var bodyParser=require('body-parser');

const {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');
var app=express();

app.use(bodyParser.json());//no need to call next() it was implicitly called
app.post('/todos',(req,res)=>{
// todo=new todo(req.body)
newtodo= new Todo(req.body);
newtodo.save().then((todos)=>{
    res.send(todos);
},(err)=>{
    res.status(400).send(err);
})
})
app.post('/users',(req,res)=>{
    user=new User(req.body);
    user.save().then((docs)=>{
        res.send(docs);
    })
})
app.get('/todos',(req,res)=>{
Todo.find().then((todos)=>{
    res.send({todos});
},(err)=>{
    res.status(400).send(err);
})
})
app.listen(8080,()=>{
    console.log("listening at port 8080")
});
module.exports={
    app
}