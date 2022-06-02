import Book from "./Book";

const Books = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </ol>
  );
};

export default Books;
