import Books from "./Books";

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

export default BookShelf;
