import React from "react";
import Booklist from "./components/BookList";
import Book from "./components/Book";
import { useSelector } from 'react-redux'
import BookForm from "./components/BookForm";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  const books = useSelector((state) => state.books);
  console.log("books", books)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route path="/" element={<Booklist />} />
     <Route path="/add-book" element={<BookForm />} />
     <Route path="/edit-book/:id" element={<Book />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
