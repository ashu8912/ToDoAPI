var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require ('mongodb');
const {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');
var _=require('lodash');
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
//delete route
app.delete('/todos/:id',(req,res)=>{
    Todo.findOneAndRemove({_id:req.params.id}).then((todo)=>{
        if(!res)
        {
            return res.status(200).send()
        }
        res.send(todo);
    }).catch(e=>res.status(404).send())
})

//patch(update) route
app.patch('/todos/:id',(req,res)=>{
    var id=req.params.id;
    var body=_.pick(req.body,['text','completed']);
    if(_.isBoolean(body.completed) && body.completed)
    {
       body.completedAt=new Date().getTime();
    }
    Todo.findOneAndUpdate({_id:id},{
        $set:body
    },{
        new:true
    }).then((updatedTodo)=>{
        if(!updatedTodo)
        {
            res.status(404).send();
        }
        res.send(updatedTodo);
    }).catch(e=>res.status(400).send(e))
})


app.listen(port,()=>{
    console.log(`listening at port ${port}` )
});
module.exports={
    app
}