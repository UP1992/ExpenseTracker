import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// generate JWT
export const generateToken = (id) => {
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
  const { username, email, password } = req.body;
};

//get user info
exports.getUserInfo = async (req, res) => {
  const { username, email, password } = req.body;
};
