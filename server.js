var express =  require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var app = express();
var db = mongoose.connect('mongodb://localhost/F-order')


var Menu = require('./models/menu')
var resturants = require('./controllers/resturants');
var users = require('./controllers/users');
const { populate } = require("./models/resturants");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(request, response){
    response.send("F-order");
})

app.post('/new-resturant', resturants.New)
app.put('/resturant/create-menu', resturants.CreateMenu)
app.get('/resturants', resturants.Get)
app.post('/register/user', users.RegisterUser)
app.post('/register/delivery', users.RegisterDel)
app.get('/favorite', users.ShowFav)
app.put('/favorite/add', users.AddToFav)

app.listen(3000, function(){
    console.log("App is currently listenning at port 3000")
})