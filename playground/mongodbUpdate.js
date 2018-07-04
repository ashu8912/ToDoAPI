const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err)
    {
       return console.log("there was some error")
    }
    db.collection("Users").findOneAndUpdate({name:'random'},{
        $set:{
         name:'John Doe'
        },
        $inc:{
          age:20
        }
    },{returnOriginal:false}).then((result)=>{
        console.log(result);
    })
//     db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5b3c296d09aa1d115e9ce494')},
// {$set:{
// completed:false
// }
// },
// {returnOriginal:false}).then((result)=>{
//     console.log(result);
// })
})