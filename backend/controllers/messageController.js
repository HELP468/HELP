const Message = require('../models/Message');

//create a new Message
exports.createMessage = async(req, res) => {
    try{
        const newMessage = new Message({
            sender_id: req.body.sender_id,
            content: req.body.content,
            status: "sent"
        })
    } catch (err) {
        res.status(500).json({error: 'Failed to create message'});
    }
};

// Get a message by ID
exports.getMessageById = async(req,res) => {
    try{
        const message = Message.findById(req.params.id);
        if(!message) return res.status(404).json({error: 'Message not found'});
        res.status(200).json(message)
    } catch (err) {
        res.status(500).json({error: 'Failed to get message'})
    }
};

// Update message by ID
exports.updateMessage = async(req,res) => {
    try{
        const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedMessage) return res.status(404).json({error: 'Message not found'});
        res.status(200).json({message:'Message updated successfully'});
    } catch (err) {
        res.status(500).json({error: 'Failed to update message'})
    }
};

// Delete message by ID
exports.deleteMessage = async(req,res) => {
    try{
        const message = await Message.findbyIdandDelete(req.params.id);
        if(!message) return res.status(404).json({error: 'Message now found'});
        res.status(200).json({message: 'Message deleted successfully'})
    }catch (err){
        res.status(500).json({error: 'Failed to delete message'});
    }
};