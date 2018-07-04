var mongoose=require('mongoose');

var Schema=mongoose.Schema;
var userSchema=new Schema({
    email:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    }
})
var User=mongoose.model('Users',userSchema);
module.exports={
    User
}