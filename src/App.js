import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./Home";
import Search from "./Search";
import BookInfo from "./BookInfo";

function App() {
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const fetchBooks = async () => {
    setBooks(await BooksAPI.getAll());
  };

  const resetSearch = () => {
    setSearchedBooks([]);
  };

  const search = (e) => {
    const value = e.target.value;
    setSearchedBooks([]);
    if (value.length > 0) {
      const searchBooks = async () => {
        const data = await BooksAPI.search(value, 20);

        if (!data.error) {
          data.forEach((item) => {
            const [matchedBook] = books.filter((book) => book.id === item.id);
            if (matchedBook) {
              item.shelf = matchedBook.shelf;
            } else {
              item.shelf = "none";
            }
          });
          setSearchedBooks(data);
        }
      };
      searchBooks();
    }
  };

  const changeShelf = (book, shelf) => {
    const updateBook = async () => {
      await BooksAPI.update(book, shelf);

      fetchBooks();
    };
    updateBook();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route>
          <Route
            exact
            path="/"
            element={
              <Home
                books={books}
                resetSearch={resetSearch}
                changeShelf={changeShelf}
              />
            }
          />
        </Route>
        <Route
          exact
          path="/search"
          element={
            <Search
              searchedBooks={searchedBooks}
              search={search}
              changeShelf={changeShelf}
            />
          }
        />
        <Route exact path="/book_info" element={<BookInfo />} />
      </Routes>
    </div>
  );
}

export default App;
