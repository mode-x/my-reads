import BookShelf from "./BookShelf";

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

export default BookShelves;
