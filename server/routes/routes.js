const express = require('express');

const router = express.Router();

// Example route for fetching all books
router.get('/books', (req, res) => {
    // Logic to fetch all books
    res.send('Fetch all books');
});

// Example route for fetching a single book by ID
router.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    // Logic to fetch a book by ID
    res.send(`Fetch book with ID: ${bookId}`);
});

// Example route for adding a new book
router.post('/books', (req, res) => {
    const newBook = req.body;
    // Logic to add a new book
    res.send('Add a new book');
});

// Example route for updating a book by ID
router.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;
    // Logic to update a book by ID
    res.send(`Update book with ID: ${bookId}`);
});

// Example route for deleting a book by ID
router.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    // Logic to delete a book by ID
    res.send(`Delete book with ID: ${bookId}`);
});

module.exports = router;