var express = require('express');



var app = express();
app.set('port', process.env.PORT || 3000);

// Erste Middleware
app.use(express.static('./public'));



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
        console.log( 'Express ready on http://127.0.0.1:' + app.get('port'));
    });