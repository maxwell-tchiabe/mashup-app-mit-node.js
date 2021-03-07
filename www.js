
const api_country= require('./API_country')
const api_helper = require('./API_helper')
var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var PORT= process.env.PORT || 3000;
var http= require('http');
var server= http.Server(app);


var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.set('port', process.env.PORT || 3000);

// Erste Middleware
app.use(express.static('./public'));
app.set('view engine', 'ejs');




app.post('/masthead', urlencodedParser, function(req, res, ){
     
     var city = req.body.Ort;
  

    console.log(req.body.Ort);
    

    api_helper.make_API_call('https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=828262096bf08de77b25040f4583e78e')
    .then(response => {
        var pre= response.main.pressure;
        var coun = response.sys.country;
        //res.send('a ' + city + ' la temperature ambiante est de: '+(response.main.temp-273.15).toFixed(2)+'°')
       console.log('ok')
       res.render('index', {data:(response.main.temp-273.15).toFixed(2), stadt: city, presure:pre, contry: coun});
    })
    .catch(error => {
        res.send('die Stadt ist falsch geschrieben oder existiert nicht')
    })
    
});
   

// API for land

app.post('/index.html', urlencodedParser, function(req, res, ){
     
    var country= req.body.land;

   console.log(req.body.land);
   

   api_country.call_API ('https://restcountries.eu/rest/v2/name/'+ country,jsonParser )
   .then(response =>{

    var data= response;
   
      console.log( 'ok');
     res.render('index2', {DD:data[0].capital, pays: country, pop:data[0].population, language:data[0].languages[0].name});
    })
   .catch(error => {
       res.send('das Land ist falsch oder wurde nicht so gut geschrieben. bitte prüfen sie ob sie das Land auf englisch geschrieben haben')
         })
   
});

app.get('/index.html', urlencodedParser,  function(req, res, ){
    var email= req.body.email;
     res.send(email)
 
 });
      
   

// Error Handling
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Internal error');
});


    app.listen(app.get('port'), function(){
       console.log( 'Express ready on localhost:' + app.get('port'));
  
}); 
