import { useState } from "react"
import { useDispatch } from "react-redux"
import { addBook } from '../features/books/bookSlice'
import { v4 as uuid } from "uuid"


function BookForm() {

        const [books, setBook] = useState({
            title: "",
        })

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
        }
        const dispatch = useDispatch()

    return(
        <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="title" onChange={handleChange} />
        <button>Save</button>    
        </form>
    )
}

export default BookForm