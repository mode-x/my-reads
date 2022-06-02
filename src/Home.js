import "./App.css";
import { Link } from "react-router-dom";
import Books from "./Books";

const Home = ({ books }) => {
  const shelves = [
    { id: "currentlyReading", name: "Currently Reading" },
    { id: "wantToRead", name: "Want to Read" },
    { id: "read", name: "Read" },
  ];
  const booksInShelf = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf) => (
          <div className="bookshelf" key={shelf.id}>
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <Books books={booksInShelf(shelf.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
