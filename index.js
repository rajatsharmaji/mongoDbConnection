const express = require('express');
const dotenv = require('dotenv');
const User = require('./Models/userModel.js');
const mongoose = require('mongoose')
const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

mongoose
  .connect(
    URI
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.post('/add', async (req, res) => {
    try {  
            const newUser = new User({
            name: req.body.name,
            email: req.body.email,
        });
        const savedUser = await newUser.save();

        res.json({ msg: 'User Added Successfully', user: savedUser });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
