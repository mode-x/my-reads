import "../css/App.css";
import { Link } from "react-router-dom";
import Books from "./Books";
import PropTypes from "prop-types";

const Search = ({ searchedBooks, search, changeShelf }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              search(e);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Books books={searchedBooks} changeShelf={changeShelf} />
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchedBooks: PropTypes.array,
  search: PropTypes.func,
  changeShelf: PropTypes.func,
};

export default Search;
