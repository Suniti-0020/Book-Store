import React from "react";
import Book from "./book";
import bookspedia from "../bookspedia";

function AllBooks() {
    return <div className="featured">
        <h1 className="aBH1">All Books</h1>
        {bookspedia.map((book) => {
            return (
                <Book
                    key={book.id}
                    name={book.name}
                    image={book.image}
                    category={book.category}
                    rating={book.rating}
                />
            );
        })}
    </div>
}

export default AllBooks;