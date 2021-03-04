import React from "react";


export default function header(props){

    function handleInput(value){
       if(value > 0 && value <= 30)
        props.setThisState(value)
    }

    return(
        <div className="header">
            <div className="header-left">
                <input type="number" required min="1" max="30" onInput={(e)=>handleInput(e.target.value)}/>
                <button type="button" onClick={props.fetchCats}>SZUKAJ</button>
            </div>
            <div className="header-right">
                <div><p>Sortuj po datach</p>
                    <div onClick={()=>props.sortItems("date_asc")}>&#94;</div>
                    <div onClick={()=>props.sortItems("date_desc")}>&#94;</div>
                </div>
                <div><p>Sortuj po id</p>
                    <div onClick={()=>props.sortItems("id_asc")}>&#94;</div>
                    <div onClick={()=>props.sortItems("id_desc")}>&#94;</div>
                </div>
            </div>
        </div>
    )
}