import React, { useState } from "react";
import Book from "./book";
import bookspedia from "../bookspedia";
import Buttons from "./button";



function AllBooks() {

    const [item, setItem] = useState(bookspedia);

    const menuItems = [...new Set(bookspedia.map((book) => book.category))];

    const filterItem = (curcat) => {
        const newItem = bookspedia.filter((newVal) => {
            console.log(newVal.category === curcat)
            if (newVal.category === curcat) {
                return newVal
            }
        });

        setItem(newItem);
    };



    return (<div id="popular-container">
                <div className="featured">

                    <h1 className="aBH1">All Books</h1>
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />

                    <Book item={item} />
                </div>
            </div>)
}

export default AllBooks;
