const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://saxenaansh42:1234ansh2004@website.gvzdqtz.mongodb.net/?retryWrites=true&w=majority&appName=website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const port = process.env.PORT || 2004;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
