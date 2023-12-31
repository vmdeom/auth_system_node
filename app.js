const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs')

//----CONFIG-------

dotenv.config({ path: './.env'});

const port = process.env.PORT;
const address = process.env.IP;

app = express();

let userState = 'Please, login or register.'

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

let data = {logged: 'no'};

//----ENDCONFIG----

//----GET----------

app.get('/', function(req, res){
    res.render("page", {pageToRender: 'userpage.ejs',
                        user: userState});
});

app.get('/register', function(req, res){
    res.render("page", {pageToRender: 'register.ejs',
                        message: ''});
});

app.get('/login', function(req, res){
    res.render("page", {pageToRender: 'login.ejs'});
});

//----ENDGET-------

//----POST---------

app.post('/auth/register', function(req, res){
    const {name, email, password, password_confirm} = req.body
    console.log(req.body);
});

app.post('/auth/login', function(req, res){
    console.log(req.body);
    res.cookie('userData', data);
    res.redirect('/')
});

//----ENDPOST------

//----LISTEN-------

app.listen(port || 3000, address, function(){
    console.log('listening at ' + address + ":" + port)
});

//----ENDLISTEN----