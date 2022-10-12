import { useSelector } from "react-redux"
import React from "react";
import   BookCard    from "./BookCard"



const Booklist = () => {
    const booksList = useSelector(state => state.books)
 

return (
    <div className="bookList">
    <div className="container row">
        {booksList.map((book) => {
            return (
              <>
                <BookCard key={book.id} book={book} />
              </>)})}       
    </div>
    </div>
)};

export default Booklist