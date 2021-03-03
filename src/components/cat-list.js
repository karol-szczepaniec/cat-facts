import React from "react";
import CatItem from "./cat"

export default function catList(props){

    const elements = props.catsList.map(cat=>{return <CatItem item={cat} key={cat._id}/>})
    return(
        <div className="container">
            {elements}
        </div>
    )
}