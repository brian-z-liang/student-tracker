// main server page
const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const StudentController = require('./controllers/StudentController')

const app = express();

mongoose.connect('mongodb+srv://StudentTracker:Codesmith@realmcluster.l3pec.mongodb.net/TheData?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})
.then(() => console.log('connection made!'));

const PORT = 3000;


app.use(express.json());

app.post('/newData', 
  StudentController.createNewStudent,
  (req, res) => {
    console.log('request', req.body);
    return res.status(200).send('Post received');
})

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res, next) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server listening on PORT', PORT);
});
