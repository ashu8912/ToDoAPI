const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        console.log("unable to connect to mongo server");
    return;
    }
    console.log("success:connected to MongoDb Server");


db.collection('Users').insertOne({
name:'mike',
age:26,
location:'newYork'
},(err,result)=>{
    if(err)
    {
    console.log("there was some error")
    }
    console.log("data inserted ",JSON.stringify(result.ops))
})
//     db.collection('Todos').insertOne({
// text:'complete react js',
// completed:false
//     },(err,result)=>{
//       if(err)
//       {
//           console.log("there was some error in inserting");
//           return;
//       }
//       console.log(JSON.stringify(result.ops))
//     })
    // db.collection('Users').insertOne({name:'ashu',age:20,location:'464/13'},(err,result)=>{
    //     if(err)
    //     {
    //     return console.log("unable to insert ",err)
    //     }
    //     console.log("successfully inserted",result.ops[0]._id.getTimestamp())
    // })
    // db.close();

})
