const express = require('express');
const Book = require('../models/Book'); // Import Book model

const router = express.Router();

// Dohvati sve knjige
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Dohvati knjigu po ID-u
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Dodaj novu knjigu
router.post('/', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Ažuriraj knjigu po ID-u
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obriši knjigu po ID-u
router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;