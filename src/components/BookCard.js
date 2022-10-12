import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({book}) => {
  return (
    <div key={book.isbn} className="col-lg-4 col-md-6 col-12 mb-3"> 
    <div className="cards h-100 d-flex flex-column justify-content-center">
    <h2>{book.title}</h2>
    <h3>{book.author}</h3>
    <img className="bookImg mt-auto" src={book.imageLink} alt={book.imageLink}/>                
    <Link to={`/edit-book/${book.isbn}`}> More info </Link>
    </div>
    </div>
  )
}

export default BookCard