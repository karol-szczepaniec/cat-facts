import React from "react";
import cat1 from "../svg/cat1.svg"
import cat2 from "../svg/cat2.svg"

export default function catItem(props){

    return(
        <div className="card" key={props.item.id}>
            <div className="picture">
                <img src={cat1}/>
            </div>
            <div className="content">
            <div className="id">id: {props.item.id}</div>
            <div className="date">{props.item.data}</div>
            <div className="text">{props.item.text}</div>
            </div>
        </div>
    )
}