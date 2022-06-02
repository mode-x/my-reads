import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { get } from "../server/BooksAPI";

const BookInfo = () => {
  const { state } = useLocation();
  const { bookId } = state || {};

  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      const data = await get(bookId);

      setBook(data);
    };
    fetchBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        paddingBottom: "200px",
      }}
    >
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div
        style={{
          width: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: "20px",
        }}
      >
        <h2>Book Info</h2>
        <Link to="/">Home</Link>
      </div>
      <div
        style={{
          display: "flex",
          width: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
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
        <div
          style={{
            paddingLeft: "50px",
            maxWidth: "450px",
          }}
        >
          <p>
            <strong>Title:</strong> {book.title}
          </p>
          <p>
            <strong>Authors:</strong>{" "}
            {book.authors ? book.authors.join(", ") : ""}
          </p>
          <p>
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p>
            <strong>Published:</strong> {book.publishedDate}
          </p>
          <p>
            <strong>Page Count:</strong> {book.pageCount}
          </p>
          <p>
            <strong>Language:</strong> {book.language}
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>Description:</strong>
            <br /> {book.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
