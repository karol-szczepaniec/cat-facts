import React from "react";
import Cat from "./cat"

export default function catList(props){

    const elements = props.catsList.map(cat=>{return <Cat item={cat} />})
    return(
        <div className="container">
            <p>{props.catsToFetch}</p>
            {elements}
        </div>
    )
}