const express = require('express'),
router = express.Router();

// Request Logger
router.use(function (req, res, next) {
    console.log('/' + req.method); // Find out the http method used
    
    //Request body only if it's not empty
    if(Object.keys(req.body).length > 0){
      console.log("req.body: " + JSON.stringify(req.body, null, 2));
    }
    else{
      console.log("req.body: (empty or not applicable for this request method)");
    }
    //Query parameters
    if(Object.keys(req.query).length > 0){
      console.log("req.query: " + JSON.stringify(req.query, null, 2));
    }
    else{
      console.log("req.query: (empty)");
    }
    
    //Log headers
    console.log("req.headers: " + JSON.stringify(req.headers, null, 2));
  
    next();
  });

module.exports = router;