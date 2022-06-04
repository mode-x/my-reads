import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const BookShelves = ({ shelves, books, changeShelf }) => {
  const booksInShelf = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };
  return (
    <div>
      {shelves.map((shelf) => (
        <BookShelf
          key={shelf.id}
          shelf={shelf}
          books={booksInShelf(shelf.id)}
          changeShelf={changeShelf}
        />
      ))}
    </div>
  );
};

BookShelves.propTypes = {
  shelves: PropTypes.array,
  books: PropTypes.array,
  changeShelf: PropTypes.func,
};

export default BookShelves;
