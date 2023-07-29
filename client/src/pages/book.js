import React, { useState } from "react";
import Button from '@mui/material/Button';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "../images/.."
import "../CSS/book.css"

const Book = ({ item }) => {

    const [clicked, setClicked] = useState(false)
    function handleIconClick() {
        if (clicked === false) {
            setClicked(true)
        } else {
            setClicked(false)
        }

    }

    return (
        <>
            {item.map((Val) => {
                return (
                    <div className="container" >
                        {/* <div className="wrapper"> */}
                        <div class="box-image">
                            <img src={Val.image} width={140} height={200}  alt="..." />
                        </div>
                        <div class="box-text">
                            <h1 className="name">{Val.name}</h1>
                            <div className="disp">
                                <span className="catg">{Val.category}</span>
                                <Button className="bMark" onClick={handleIconClick}>
                                    {clicked ? <BookmarkIcon /> : <TurnedInNotIcon />}
                                </Button>
                            </div>

                            <div className="button-wrapper disp">
                                <button class="btn">Purchase</button>
                                <span className="rating">{Val.rating}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Book;