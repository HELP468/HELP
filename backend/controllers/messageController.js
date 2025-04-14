const Message = require('../models/Message');

//create a new Message
exports.createMessage = async(req, res) => {
    try{
        const newMessage = new Message({
            sender_id: req.body.sender_id,
            content: req.body.content,
            type: req.body.type || "text", // default fallback
            status: "sent"
        });

        await newMessage.save();
        res.status(201).json(newMessage)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to create message'});
    }
};

// Get a message by ID
exports.getMessageById = async(req,res) => {
    try{
        const message = await Message.findById(req.params.id);
        if(!message) return res.status(404).json({error: 'Message not found'});
        res.status(200).json(message)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to get message'})
    }
};

// Update message by ID
exports.updateMessage = async(req,res) => {
    try{
        const updatedMessage = await Message.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true, runValidators: true}
        );
        if(!updatedMessage) return res.status(404).json({error: 'Message not found'});
        res.status(200).json(updatedMessage);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to update message'})
    }
};

// Delete message by ID
exports.deleteMessage = async(req,res) => {
    try{
        const message = await Message.findByIdAndDelete(req.params.id);
        if(!message) return res.status(404).json({error: 'Message not found'});
        res.status(200).json({message: 'Message deleted successfully'})
    }catch (err){
        console.error(err);
        res.status(500).json({error: 'Failed to delete message'});
    }
};