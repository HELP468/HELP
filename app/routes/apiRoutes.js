const express = require('express'),
router = express.Router(),
userRoutes = require('./userRoutes');

//Mount the route modules under /api
router.use('/users', userRoutes)

module.exports = router;