const express = require('express'),
router = express.Router(),
userRoutes = require('./userRoutes'),
messageRoutes = require('./messageRoutes'),
ticketRoutes = require('./ticketRoutes');

//Mount the route modules under /api
router.use('/users', userRoutes)
router.use('/messages', messageRoutes)
router.use('/tickets', ticketRoutes)

module.exports = router;