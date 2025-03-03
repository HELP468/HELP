// This is the REST Server, our backend. When in dev, move critical data to Dotenv.
const express = require('express'),
app = express(),
router = express.Router();

const path = __dirname + '/views/';
const port = 3033;

router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req, res){
  res.sendFile(path+'index.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`);
})