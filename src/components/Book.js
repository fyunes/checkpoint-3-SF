import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Book = () => {
  const booksList = useSelector((state) => state.books);
  const bookId = useParams().id;
  const findBook = booksList.find(
    (book) => Number(book.isbn) === Number(bookId)
  );
  return (
    findBook && (
      <div>        
        <div key={findBook.isbn} className="col-lg-4 col-md-6 col-12 mb-3">
          <div className="cards h-100 d-flex flex-column justify-content-center">
            <h2>{findBook.title}</h2>
            <h3>{findBook.author}</h3>
            <img className="bookImg mt-auto" src={findBook.imageLink} />
          </div>
        </div>
      </div>
    )
  );
};

export default Book;
