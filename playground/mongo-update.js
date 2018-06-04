//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err)
{
    return console.log("Error Occured:", err);
}
console.log("Connected to MongoDB");

// db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5b14de9fe28a2712f486bfa9')},{
//     $set:{
//         completed: true
//     }
// },{
//     returnOriginal:false //to get updated document and not original doc
// }).then((result)=>{
// console.log(result);
// });

db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b0fd6974970ba2ab4f90311')},{
    $set:{
        name: 'SMS'
    },
    $inc:{
        age:1
    }
},{
    returnOriginal:false //to get updated document and not original doc
}).then((result)=>{
console.log(result);
});

db.close();

});