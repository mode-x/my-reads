import Book from "./Book";
import PropTypes from "prop-types";

const Books = ({ books, changeShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book
          book={book}
          key={book.id}
          shelf={book.shelf}
          changeShelf={changeShelf}
        />
      ))}
    </ol>
  );
};

Books.propTypes = {
  books: PropTypes.array,
  changeShelf: PropTypes.func,
};

export default Books;
