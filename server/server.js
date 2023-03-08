const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

// app middleware
app.use(bodyParser.json());
app.use(cors());

// route middleware
app.use(postRoutes);

const port = 8000;
const DB_URL = 'mongodb://localhost:27017/MERN-CRUD';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Hehe... DB Connected'))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

