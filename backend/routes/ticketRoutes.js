const express = require('express'),
    router = express.Router(),
    ticketController = require('../controllers/ticketController');

// POST /api/tickets - Create a new ticket
router.post('/', ticketController.createTicket);

// GET /api/tickets/:id - Get ticket by ID
router.get('/:id', ticketController.getTicketById);

// PUT /api/tickets/:id - Update ticket info
router.put('/:id', ticketController.updateTicket);

// DELETE /tickets/:id - Delete ticket
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;