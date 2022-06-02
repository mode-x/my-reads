import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ book, shelf, changeShelf }) => {
  let navigate = useNavigate();

  const [selectedShelf, setSelectedShelf] = useState(shelf);

  const handleChange = (e) => {
    const value = e.target.value;
    changeShelf(book, value);
    setSelectedShelf(value);
  };

  const showInfo = () => {
    navigate("/book_info/", { state: { bookId: book.id } });
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              })`,
            }}
          ></div>
          <div className="book-shelf-info" onClick={showInfo}></div>
          <div className="book-shelf-changer">
            <select value={selectedShelf} onChange={handleChange}>
              <option value="moveTo" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : ""}
        </div>
      </div>
    </li>
  );
};

export default Book;
