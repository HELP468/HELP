const Ticket = require('../models/Ticket');

// Create a new ticket
exports.createTicket = async(req, res) => {
    try {
        const newTicket = new Ticket({
            participants: req.body.participants,
            subject: req.body.subject,
            description: req.body.description,
            priority: req.body.priority
        });

        await newTicket.save()
        res.status(201).json(newTicket)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to create ticket'})
    }
}
// Get a ticket by ID
exports.getTicketById = async(req,res) => {
    try{
        const ticket = await Ticket.findById(req.params.id).populate('participants');
        if(!ticket) return res.status(404).json({error: 'Ticket not found'});
        res.status(200).json(ticket)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to get ticket'})
    }
};
// Update ticket by ID
exports.updateTicket = async(req,res) => {
    try{
        const updatedTicket = await Ticket.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true, runValidators: true}
        );
        if(!updatedTicket) return res.status(404).json({error: 'Ticket not found'});
        res.status(200).json(updatedTicket);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to update Ticket'})
    }
};
// Delete ticket by ID
exports.deleteTicket = async(req,res) => {
    try{
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if(!ticket) return res.status(404).json({error: 'Ticket not found'});
        res.status(200).json({message: 'Ticket deleted successfully'})
    }catch (err){
        console.error(err);
        res.status(500).json({error: 'Failed to delete ticket'});
    }
};