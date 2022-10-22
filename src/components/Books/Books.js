import Book from "../Book/Book";
import { useContext } from "react";

import { BooksContext } from "../../context/BooksProvider";




const Books = () => {
    const { books } = useContext(BooksContext);
    return (
        <div>
            {
                books.map((book) => {
                    return (
                        <Book book={book} />
                    )
                })
            }
        </div>
    )
}

export default Books;