import React, { useState } from "react";
import "../images/.."
import "../CSS/book.css"

const Book = ({ item }) => {

    const [clicked, setClicked] = useState(false)
    function handleIconClick() {
        setClicked(!clicked)
    }

    return (
        <>
            {item.map((Val) => {
                return (
                    <div className="container" data-aos="zoom-in-up" >
                        <div class="box-image">
                            <img src={Val.image} width={150} height={190} alt="..." />
                        </div>
                        <div class="box-text">
                            <h1 className="name">{Val.name}</h1>
                            <div className="catg">{Val.category}</div>
                            <button class="btn">Purchase</button>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Book;