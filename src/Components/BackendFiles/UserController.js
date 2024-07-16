const User  = require('./User');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');

const checkEmail = async (req, res) => {
    const { email } = req.body;
    try{
        const userExists = await User.findOne({ email})
        res.json({ userExists: !!userExists})
    } catch (error) {
        res.status(500).json({ message: 'Server error'})
    }
}

const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.fingOne({ email });
        if(userExists) {
            return res.status(400).json({message: 'User already exists'})
        }

        const user = new User ({ email, password});
        await user.save();
        res.status(201).json({message: 'User created successfully'})
    }catch (error){
        res.status(500).json({ message: 'Server error'});
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({ message: 'Invalid email or password'})
        }
        const isMatch = await user.matchPassword(password)
        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password'})
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'})
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error'});
    }
}

module.exports = {signup, signin , checkEmail}