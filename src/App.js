import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./Home";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    setBooks(await BooksAPI.getAll());
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route>
          <Route exact path="/" element={<Home books={books} />} />
        </Route>
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
