const {SHA256}=require('crypto-js');
var password="Ashu@123";
var hash=SHA256(password).toString();
const jwt=require('jsonwebtoken');
var data={
    id:4
}
var token=jwt.sign(data,"ashu@123");
var decoder=jwt.verify(token,"ashu@123");
console.log(token);
console.log(decoder);
// var token={
//     data,
//     hash:SHA256(JSON.stringify(data)+'someSecret').toString()
// }

// token.data.id=5;

// var resultHash=SHA256(JSON.stringify(data)+'someSecret').toString();
// if(token.hash===resultHash)
// {
//     console.log("no manipulation was done over token");
// }
// else{
//     console.log("token was manipulated");
// }