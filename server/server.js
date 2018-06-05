var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});

// var Todo = mongoose.model('Todo',{
//     text:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     },
//     completedAt:{
//         type: Number,
//         default:null
//     }
// });

// var newTodo = new Todo({
//     text:'  Eat Dinner also'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved Todo',doc);
// },(error)=>{
//     console.log('Error Occured',error);
// });


// var User = mongoose.model('Users',{
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
// });

// var user = new User({
//     email:'sms@sms.com'
// });

// user.save().then((doc)=>{
//     console.log(doc);
// },(error)=>{
//     console.log(error);
// });