import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Catalog.css';

function Catalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    (book.author && book.author.toLowerCase().includes(search.toLowerCase())) ||
    (book.genre && book.genre.toLowerCase().includes(search.toLowerCase()))
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Katalog knjiga</h1>
      <div className="catalog-search-bar">
        <input
          type="text"
          placeholder="Pretraži po naslovu, autoru ili žanru..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch('')}>Očisti</button>
      </div>
      {filteredBooks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Nema pronađenih knjiga.</p>
      ) : (
        <div className="catalog-list">
          {filteredBooks.map(book => (
            <div key={book._id} className="catalog-item">
              <div className="catalog-item-title">{book.title}</div>
              <div className="catalog-item-author"><strong>Autor:</strong> {book.author}</div>
              <div className="catalog-item-description">{book.description}</div>
              <div><strong>Žanr:</strong> {book.genre}</div>
              <div><strong>Izdavač:</strong> {book.publisher}</div>
              <div><strong>Dostupno:</strong> {book.totalCopies - book.borrowedCount} / {book.totalCopies}</div>
              {/* Ovdje možeš dodati dugmad za posudbu, detalje itd. */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;