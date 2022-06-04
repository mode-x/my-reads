import Books from "./Books";
import PropTypes from "prop-types";

const BookShelf = ({ shelf, books, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <Books books={books} changeShelf={changeShelf} />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelf: PropTypes.object,
  books: PropTypes.array,
  changeShelf: PropTypes.func,
};

export default BookShelf;
