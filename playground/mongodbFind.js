const {MongoClient} =require('mongodb');
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
if(err)
{
    return console.log("there was some error");
}
//console.log("find:",db.collection('Todos').find().toArray());
// db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
// console.log("Todos array",JSON.stringify(docs));
// },(err)=>{
// console.log("there was some error",err);
// })
// db.collection('Todos').find().count().then((count)=>{
//     console.log("Todos count:",count);
// }
// ,(err)=>{
//     console.log("there was a error")
// })
db.collection('Users').find({name:'ashu'}).count().then((count)=>{
console.log(count);
},(err)=>{
console.log("there was some error");
})
console.log("app ends");
})