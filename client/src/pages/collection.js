import React from "react";
import Book from "./book";
import bookspedia from "../bookspedia";

function AllBooks() {
    return <div className="featured">
        <h2>My Collection</h2>
        {bookspedia.slice(2, 4).map((book) => {
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