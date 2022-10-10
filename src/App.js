import Booklist from "./components/BookList";
import { useSelector } from 'react-redux'
import BookForm from "./components/BookForm";


const App = () => {
  const books = useSelector((state) => state.books);
  console.log("books", books)
  return (
    <div className="App">
      <BookForm />
     <Booklist />
    </div>
  );
}

export default App;
