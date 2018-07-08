var mongoose=require('mongoose');
const validator=require('validator');
mongoose.Promise=global.Promise;
var Schema=mongoose.Schema;
var jwt=require('jsonwebtoken');
var _=require('lodash');
const bcrypt=require('bcryptjs');
var userSchema=new Schema({
    email:{
        type:String,
        trim:true,
        required:true,
        minlength:1,
        unique:true,
        validate:{
            validator:validator.isEmail,
        message:'{VALUE} is not a valid email'
        }
        
    },
    password:{
       type:String,
       required:true,
       minlength:4
    },
    tokens:[
        {
            access:{
            type:String,
            required:true
            },
            token:{
                type:String,
                required:true
            }
        }
    ]
})
userSchema.statics.findByToken=function(token){
var User=this;    
var decode;
try{
    decode=jwt.verify(token,'abc123')
}
catch(e)
{
return Promise.reject();
}
console.log(decode);
return User.findOne({'_id':decode._id,
'tokens.token':token,
'tokens.access':'auth'
})
}
userSchema.methods.toJSON=function(){
var user=this;
console.log(user);

return _.pick(user,["email","_id"]);
}
userSchema.methods.generateAuthToken=function(){
var user=this;
var access='auth';
console.log(user._id);
var token=jwt.sign({_id:user._id,access},"abc123").toString();
user.tokens.push({access,token});
return user.save().then(()=>token);
}
userSchema.pre('save',function(next){
var user=this;
if(user.isModified('password')){
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(user.password,salt,(err,hash)=>{
        user.password=hash;
        next();
    })
})
}
else{
    next();
}
})
var User=mongoose.model('Users',userSchema);
module.exports={
    User
}