import React, { Component, useState } from 'react';
import Modal from './DialogModal';
export default function CatItem(props){

    let date = new Date(props.item.createdAt).toLocaleDateString();

    const [modalState, setModalState] =useState(false);
    const [state, setState] =useState("");

    function toggleModal(e, currentItem){
        setState(currentItem);
        setModalState(modalState ? false : true)
    }

    return(
        <div className="card" onClick={(e)=>toggleModal(e,props.item)}>
            <div className="picture">
                <img src={props.item.svgSrc}/>
            </div>
            <div className="content">
            <div className="id">id: {props.item._id}</div>
            <div className="date">{date}</div>
            <div className="text">{props.item.text}</div>
            </div>
            <Modal show={modalState} onClose={toggleModal} item={state}></Modal>
        </div>
    )
}