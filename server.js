/**
 * Required Packages
 */
var express = require('express');

/**
 * Express config
 */
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));

/**
 * Routes
 */
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


/**
 * Start the server
 */
app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT);
});