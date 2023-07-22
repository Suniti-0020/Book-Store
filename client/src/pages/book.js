import React, { useState } from "react";
import Button from '@mui/material/Button';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "../images/.."
import "../CSS/book.css"

function Book(props) {

    const [clicked, setClicked] = useState(false)
    function handleIconClick() {
        if (clicked === false) {
            setClicked(true)
        } else {
            setClicked(false)
        }

    }

    return (
        <div className="container" >
            <div className="wrapper">
                <img className="banner-image" src={props.image} width={190} height={150} class="card-img-top" alt="..." />
                <h1 className="name">{props.name}</h1>
                <p className="info">{props.category}</p>

                <div className="button-wrapper">
                    <span className="rating btn">{props.rating}</span>
                    <button class="btn fill">BUY NOW</button>
                    <Button onClick={handleIconClick}>
                        {clicked ? <BookmarkIcon /> : <TurnedInNotIcon />}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Book;