const {mongoose}=require('../server/server');
const {Todo}=require('../server/models/todo');
const {User}=require('../server/models/user');
var id='5b3c9ab6b1afdab852dc24d6';

User.find({_id:id}).then((user)=>{
    //if user is not found users is assigned null
    if(!user)
    {
        return console.log("no users found");
    }
console.log(user);
}).catch(e=>console.log(e));

User.findOne({_id:id}).then((user)=>{
    if(!user)
    {
        return console.log("user not found");
    }
        console.log(user);
        
}).catch((e)=>console.log(e));    
User.findById(id).then((user)=>{
if(!user)
{
    return console.log("user not found");
}
    console.log(user);
}).catch((e)=>console.log(e));