const {MongoClient}=require('mongodb');
const {ObjectID}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log("there was some error");
    }
//db.collection('Users').deleteMany({name:'mike'});
db.collection("Users").findOneAndDelete({_id: new ObjectID("5b3ae6f18f14e53390561cd1")});

    //delete many
//      db.collection('Todos').deleteMany({completed:false}).then((result)=>{
// console.log(result);
//      })
    //delete one
//  db.collection('Todos').deleteOne({completed:false}).then((result)=>{
//      console.log(result);
// })
    //find one and delete
   // db.collection('Todos').findOneAndDelete({completed:false}).then(result=>console.log(result))
});