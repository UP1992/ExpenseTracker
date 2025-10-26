const User = require('../models/User');
const jwt = require('jsonwebtoken');

// generate JWT
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1h'});

};

//register user
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  //Validation
  if(!fullName || !email || !password) {
    return res.status(400).json({message: 'Please fill in all required fields'});
  }

  try{
    //Check if user exists
    const userExists = await User.findOne({email});
    if(userExists) {
      return res.status(400).json({message: 'Email already in use'});
    }

    //Create user
    const user = await User.create({ fullName, email, password, profileImageUrl });

    res.status(201).json({
      _id: user._id,
      user,
    token: generateToken(user._id),
    });
  }
  catch(error) {
    res.status(500).json({message: 'Error registering user', error: error.message});
  }
};

//Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) {
    return  res.status(400).json({message: 'All fields are required'});
  }
  try {

    const user = await User.findOne({ email });
    if(!user || !(await user.matchPassword(password))) {
      return res.status(400).json({message: 'Invalid credentials'});
    }

    res.status(200).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({message: 'Error logging in', error: error.message});
  }
};

//get user info
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if(!user) {
      return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: 'Error fetching user info', error: error.message});
  }
};
