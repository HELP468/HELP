// This is the REST Server, our backend. When in dev, move critical data to Dotenv.
const express = require('express'),
User = require('./models/User'),
//Dotenv = require('dotenv'),
app = express(),
mongo = require('mongoose'),
router = express.Router(),
requestLogger = require('./middleware/requestLogger'),
apiRoutes = require('./routes/apiRoutes'),
methodOverride = require('method-override');

//Dotenv.config();
const path = __dirname;
const port = process.env.RESTPORT;

// Prepare the app for Mongo
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

mongo.connect(process.env.MONGODB)
const db = mongo.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Log incoming requests
app.use(requestLogger);

// Default error page to show Vue front-end isn't running
router.get('/', async function(req, res){
  const users = await User.find()
  res.render(path+'/views/index.ejs', {users});
});

router.get('/edit-user/:id', async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).send('User not found');
      }
      res.render('edit-user', { user });
  } catch (err) {
      res.status(500).send('Error loading user');
  }
});

// Routes
app.use('/', router);
app.use('/api', apiRoutes) // All routes in the apiRoutes file will be prefixed with /api

// Tell Express to serve the views directory
app.use(express.static(path));

// for the API test page
app.use('/node_modules', express.static('node_modules'));
app.set('view engine', 'ejs'); 

// This runs the app and should not be removed under any circumstance
app.listen(port, function(){
  console.log(`listening on port ${port}, view it at localhost:${port}`);
});