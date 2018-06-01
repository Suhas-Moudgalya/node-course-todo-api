//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);
/* ===============Object Destructuring================ */
var user = {name:'SMS', age:26};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err)
{
    return console.log("Error Occured:", err);
}
console.log("Connected to MongoDB");

// db.collection('Todos').insertOne({
//         text:'Something to do',
//         completed: false
//     },(err, result)=>{
// if(err)
// {
//     return console.log("Insertaion Error",err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

db.collection('Users').insertOne({
        name:'SMS',
        age: 26,
        location: 'Basavanagudi'
    },(err, result)=>{
if(err)
{
    return console.log("Insertaion Error",err);
}
console.log(JSON.stringify(result.ops,undefined,2));
console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
});

db.close();

});