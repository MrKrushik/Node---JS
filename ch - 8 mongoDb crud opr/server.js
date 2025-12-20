require('./config/db.config');
const express = require('express');
const Book = require("./model/book.model");

const PORT = 8780;
const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded());

// Table Route
app.get('/', async (req, res) => {

  // All Book Fetch
  const totalBooks = await Book.find();



  return res.render('viewpage', { totalBooks });
});

// Add Book Roate (Form.ejs)
app.get('/addBookPage', (req, res) => {
  return res.render('addpage');
})

// Insert Book Logic
app.post('/addBook', async (req, res) => {
  console.log(req.body);


  const bookAdded = await Book.create(req.body);

  console.log(bookAdded);

  if (bookAdded) {
    console.log("Book inserted Successfully...");
  } else {
    console.log("Book insertion failed...");
  }
  return res.redirect('/');

});

// Edit Route
app.get('/editBook/:bookId', async (req, res) => {
  console.log(req.params);
  const book = await Book.findById(req.params.bookId);

  console.log(book);

  if (book) {
    return res.render('editpage', { book });
  } else {
    return res.redirect('/');
  }
});

// Update Book Logic
app.post('/updateBook', async (req, res) => {
  console.log(req.body);

  const updatedData = await Book.findByIdAndUpdate(req.body.id, req.body, { new: true });

  console.log("Update : ", updatedData);

  return res.redirect('/');
});

// Delete Book Logic
app.get('/deleteBook', async (req, res) => {
  console.log(req.query);

  const deletedBook = await Book.findByIdAndDelete(req.query.bookId);
  if (deletedBook) {
    console.log("Book is perfectly and successfully deleted...😊😊");
  } else {
    console.log("Book is not deleted sorry...is failed...🤷‍♂️🤷‍♂️");
  }
  return res.redirect('/');
});


app.listen(PORT, (err) => {
  if (err) {
    console.log("Server is not started...sorry...is failed....", err);
    return;
  }
  console.log("Server Is Started  (●'◡'●)  Maja Aa Gaya Bro.. 😂");
})