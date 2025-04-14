const express = require('express'),
    router = express.Router(),
    messageController = require('../controllers/messageController');

// POST /api/messages - Create a new message
router.post('/', messageController.createMessage);

// GET /api/messages/:id - Get message by ID
router.get('/:id', messageController.getMessageById);

// PUT /api/messages/:id - Update message info
router.put('/:id', messageController.updateMessage);

// DELETE /messages/:id - Delete message
router.delete('/:id', messageController.deleteMessage);

module.exports = router;