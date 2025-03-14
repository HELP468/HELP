// This is the REST Server, our backend. When in dev, move critical data to Dotenv.
const express = require('express'),
Dotenv = require('dotenv'),
app = express(),
mongo = require('mongoose'),
router = express.Router(),
requestLogger = require('./middleware/requestLogger'),
apiRoutes = require('./routes/apiRoutes');

Dotenv.config();
const path = __dirname + '/views/';
const port = process.env.RESTPORT;

// Prepare the app for Mongo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongo.connect(process.env.MONGODB)
const db = mongo.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Log incoming requests
app.use(requestLogger);

// Default error page to show Vue front-end isn't running
router.get('/', function(req, res){
  res.sendFile(path+'index.html');
});

// Routes
app.use('/', router);
app.use('/api', apiRoutes) // All routes in the apiRoutes file will be prefixed with /api

// Tell Express to serve the views directory
app.use(express.static(path));


// This runs the app and should not be removed under any circumstance
app.listen(port, function(){
  console.log(`listening on port ${port}, view it at localhost:${port}`);
})