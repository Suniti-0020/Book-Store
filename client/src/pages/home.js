import React, { useState } from "react";
import Book from "./book"
import bookspedia from "../bookspedia";


function Home() {

    const [item, setItem] = useState(bookspedia);

    return (

        <div className="">
            <div className="">
                <div className="">
                </div>
                <h2 className="">
                    The Fasted Delivery in
                    <span className="">Your Home</span>
                </h2>
                <p className=" ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries
                </p>
                <button className="">
                    Order Now
                </button>
            </div>

            <div className="featured">
                <h2>Featured Books</h2>

                <Book item={item.slice(2, 7)} />

            </div>

        </div>

    );
}


export default Home;