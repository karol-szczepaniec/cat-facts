import React from 'react';
import closeBtn from '../svg/close.svg'

export default function Modal(props){

    if(!props.show){
        return null;
    }
        let date = new Date(props.item.createdAt).toLocaleDateString();
        return (
            <div className="backdrop">
                <div className="modal">
                    <div className="modalCloseButton">
                        <img src={closeBtn}/>
                    </div>
                    <div className="pictureModal">
                        <img src={props.item.svgSrc}/>
                    </div>
                    <div className="content">
                        <div className="idModal">id: {props.item._id}</div>
                        <div className="dateModal">{date}</div>
                        <div className="textModal">{props.item.text}</div>
                    </div>
                </div>
            </div>
        )
}

