import React, { useState } from "react";
import Button from '@mui/material/Button';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
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
                    <div className="container" >
                        <div className="wrapper">
                            <img className="banner-image" src={Val.image} width={190} height={150} class="card-img-top" alt="..." />
                            <h1 className="name">{Val.name}</h1>
                            <div className="disp">
                                <span className="info">{Val.category}</span>
                                <Button className="bMark" onClick={handleIconClick}>
                                    {clicked ? <BookmarkIcon /> : <TurnedInNotIcon />}
                                </Button>
                            </div>

                            <div className="button-wrapper disp">
                                <button class="btn fill">Purchase</button>
                                <span className="rating btn">{Val.rating}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Book;