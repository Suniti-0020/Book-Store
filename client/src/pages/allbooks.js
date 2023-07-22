import React from "react";
import Book from "./book";
import bookspedia from "../bookspedia";

function AllBooks() {
    return <div className="featured">
        <h2>All Books</h2>
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