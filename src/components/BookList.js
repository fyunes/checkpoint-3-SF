import { useSelector } from "react-redux"
import { Link } from "react-router-dom";



const Booklist = () => {
    const books = useSelector(state => state.books)
 

return (
    <div className="bookList">
    <div className="container row">
        {books.map((books, index) => {
            return (
                <div key={books.isbn} className="col-lg-4 col-md-6 col-12 mb-3"> 
                <div className="cards h-100 d-flex flex-column justify-content-center">
                <h2>{books.title}</h2>
                <h3>{books.author}</h3>
                <img className="bookImg mt-auto" src={books.imageLink} alt={books.imageLink}/>                
                <Link to={`/edit-book/${books.isbn}`}> More info </Link>
                </div>
                </div>)})}       
    </div>
    </div>
)};

export default Booklist