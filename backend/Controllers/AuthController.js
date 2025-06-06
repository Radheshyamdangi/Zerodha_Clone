const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



module.exports.Signup = async (req, res) => {
  try {
   
    const { email,username ,password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      email,
      password: password,
      username,
      createdAt: new Date(),
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};




module.exports.Login = async (req, res) => {
  try {
    

    const { email, password } = req.body;
   
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }


    if (!user.password || typeof user.password !== "string") {
      return res.status(500).json({ message: "Invalid stored password format" });
      
    }

 
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
   
   

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

   
    res.status(200).json({
      message: "Login successful",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


