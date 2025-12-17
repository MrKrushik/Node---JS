require('./config/db.config');
const express = require('express');
const Movie = require('./model/movie.model');

const PORT = 8000;
const app = express();

app.set('view engine', 'ejs');

// middleware to handle form data
app.use(express.urlencoded());

app.get('/', (req, res) => {
  return res.render('addpage');
});

// Insert movie data route
app.post('/addmovie', async (req, res) => {
  console.log(req.body);

  // const bookData = req.body

  // Book.create(req.body).then(() => {
  //     console.log("Book insrted Successfully...");
  // }).catch(err => {
  //     console.log("Book insertion failed");
  //     console.log("Error", err);
  // });

  const bookmovie = await Movie.create(req.body);

  console.log(bookmovie);

  if (bookmovie) {
    console.log("movie data inserted Successfully...");

    return res.redirect('/');
  } else {
    console.log("movie data insertion failed...");
  }


});

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.log("Server is not started...Plz try now....🤦‍♂️😭!!!", err);
    return false;
  }
  console.log("Server is started successfully...😁😁!!!");
});