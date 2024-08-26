const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

/*
  GET- '/' Get method
  Hello World method
*/
app.get('/', function(req, res) {
  console.log(req);
  res.send(`Hello Express ${req.body.name}`);
});



(async function () {
  try {
    await mongoose.connect('mongodb+srv://gauravmsbdocs:gauravsingla@cluster0.0ueg5ny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected with MongoDB');
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    })
  } catch {
    console.log('Unable to connect to MongoDB');
  }
})();
