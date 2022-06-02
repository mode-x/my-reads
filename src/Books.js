import Book from "./Book";

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

export default Books;
