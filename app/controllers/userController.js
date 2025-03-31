const User = require('../models/User'),
    bcrypt = require('bcryptjs'),
    dotenv = require('dotenv');

dotenv.config();

const hashPassword = async (password) => {
    if (!password) throw new Error("Password is required");
    return await bcrypt.hash(password, process.env.SALTROUNDS);
}

async function verifyPassword(password, hashedPassword){
    const match = await bcrypt.compare(password, hashedPassword);
    console.log(match ? 'Password is correct!' : 'Password is incorrect');
}

// Create a new user
exports.createUser = async(req, res) => {
    try{
        const hashedPassword = await hashPassword(req.body.password);
        console.log("Hashed password:", hashedPassword);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password_hash: hashedPassword,
            role: req.body.role,
            status: req.body.status,
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user'});
    }
};

// Get user by ID
exports.getUserById = async(req, res) => {
    try{
        const user = User.findById(req.params.id);
        if(!user) return res.status(404).json({error: 'User not found'});
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json({ error: 'Failed to get user'})
    }
};

// Update user by ID
exports.updateUser = async(req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedUser) return res.status(404).json({error: 'User not found'});
        res.status(200).json({message:'User updated successfully'});
    }catch (err) {
        res.status(500).json({ error: 'Failed to update user'});
    }
};

// Delete user by ID
exports.deleteUser = async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({error: 'User not found'});
        res.status(200).json({message: 'User deleted successfully'});
    }catch (err){
        res.status(500).json({error: 'Failed to delete user'})
    }
}