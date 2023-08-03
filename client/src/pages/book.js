import React from "react";
import "../images/.."
import "../CSS/book.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Book = ({ item }) => {


    return (
        <>
            {item.map((Val) => {
                return (
                    <div className="container" data-aos="zoom-in-up" >
                        <div class="box-image">
                            <img src={Val.image} width={150} height={190} alt="..." />
                            <button className="scart"><ShoppingCartIcon className="cart" /></button>
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