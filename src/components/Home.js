import "../css/App.css";
import { Link } from "react-router-dom";
import BookShelves from "./BookShelves";
import PropTypes from "prop-types";

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

Home.propTypes = {
  books: PropTypes.array,
  resetSearch: PropTypes.func,
  changeShelf: PropTypes.func,
};

export default Home;
