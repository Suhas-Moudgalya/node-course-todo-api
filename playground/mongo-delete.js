//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err)
{
    return console.log("Error Occured:", err);
}
console.log("Connected to MongoDB");

// db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
//     console.log('Deleted Many Items');
// });

// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);
// });

db.collection('Todos').deleteOne({completed:false}).then((result)=>{
    console.log(result);
});

db.close();

});