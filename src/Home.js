import "./App.css";
import { Link } from "react-router-dom";
import BookShelves from "./BookShelves";

const Home = ({ books, resetSearch, changeShelf }) => {
  const shelves = [
    { id: "currentlyReading", name: "Currently Reading" },
    { id: "wantToRead", name: "Want to Read" },
    { id: "read", name: "Read" },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelves
          shelves={shelves}
          books={books}
          changeShelf={changeShelf}
        />
      </div>
      <div className="open-search">
        <Link to="/search" onClick={resetSearch}>
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default Home;
