import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBook } from '../features/books/bookSlice'
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"



function BookForm() {

        const [books, setBook] = useState({
            title: "",
        });
        const navigate = useNavigate();
        const params = useParams;
        const book = useSelector(state => state.books);


        const handleChange = e => {
            setBook({
                ...books,
                [e.target.name] : e.target.value,
            })    
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(addBook({
                ...books,
                isbn: uuid(),
            }))
            navigate('/')
        }
        useEffect(() => {
            if (useParams.id) {
                setBook((book.find(books => books.id === params.id)))
            }
        },[]) 
        const dispatch = useDispatch()

    return(
        <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="title" onChange={handleChange} />
        <button>Save</button>    
        </form>
    )
}

export default BookForm