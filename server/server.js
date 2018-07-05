var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require ('mongodb');
const {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');
var app=express();
const port=process.env.PORT || 8080;
app.use(bodyParser.json());//no need to call next() it was implicitly called
app.post('/todos',(req,res)=>{

newtodo= new Todo(req.body);
newtodo.save().then((todos)=>{
    res.status(200).send(todos);
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
app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    console.log(typeof id);
    Todo.find({_id:id}).then((todo)=>{
        if(!todo)
        {
           return res.status(404).send();
        }
        res.send(todo);}).catch((e)=>res.status(400).send())
})
app.listen(port,()=>{
    console.log(`listening at port ${port}` )
});
module.exports={
    app
}