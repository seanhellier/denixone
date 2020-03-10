const express = require("express");
const mysql = require("mysql");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require('config');
const app = express();



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DB Config
// const db = require('./config/keys').mongoURI;
const db = config.get('mongoURI');

//Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/enoughdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
//logs
app.use(morgan("dev"));

//use sessions for tracking logins
// app.use(session({ secret: 'keyboard cat', cookie: {} }));

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  });
}
const port = process.env.PORT || 5000;

// Start the API server
app.listen(port, () => console.log(`API Server now listening on PORT ${port}`));

