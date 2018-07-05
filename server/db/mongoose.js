var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true });
//mongodb://localhost:27017/TodoApp
module.exports={mongoose};
