var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
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