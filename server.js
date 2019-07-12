//var http = require('http');

//function onRequest(request, response){
 //   console.log("A user made a request" + request.url);
 //   response.writeHead(200, {"context-type": "text/plain"})
  //  response.write("Here is your response");
 //   response.end();
//}

//http.createServer(onRequest).listen(8080); 
//console.log("Server is now running....");

var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('comments.db');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//routes
app.get('/', function(request, response){
    response.render("index", {name: "jerry"});
});

app.get('/signup', function(request, response){
    response.render("index2");
});

app.get('/email', function(request, response){
    response.render("mail");
});


app.get('/comments',function(request, response){
    console.log('GET request received at /comments');
    db.all('SELECT * FROM comments', function(err, rows){
        if(err){
            console.log("Error: " + err);
        }
        else{
            response.send(rows);
        }
    })
});

app.post('/comments', function(request, response){
    
    console.log(request.body['email-dsf'])
    console.log('POST request received at /comments');
    
    response.redirect('/')

})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})