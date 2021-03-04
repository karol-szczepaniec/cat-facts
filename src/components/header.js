import React, {useState} from "react";
import arrow from "../svg/arrow.svg"
import refresh from "../svg/refresh.svg"


export default function Header(props){

    const [currValue, setCurrValue] = useState(null);

    function handleInput(value){
        setCurrValue(value);
        let elInput = document.querySelector(".form-group1:focus-within");
        let valid1 = document.getElementById("valid1")
       if(value > 0 && value <= 30) {
           props.setThisState(value)
           elInput.style.borderColor = "green"
           valid1.style.display = "none"
       }else if(value == ""){
           elInput.style.borderColor = "dodgerblue"
           valid1.style.display = "none"
       }else{
           elInput.style.borderColor = "red"
           valid1.style.display = "flex"
       }
    }

    function check(){
        if(currValue >0 && currValue <=30){
            props.fetchCats();
        }
    }


    return(
        <div className="header">
            <div className="header-left">
                <div className="form-group1">
                    <label>Ilość kotów</label>
                <input id="inputCats"type="text" required min="1" max="30" onInput={(e)=>handleInput(e.target.value)}/>
                </div>
                <label id="valid1">Wartość musi być z przedziału 1 do 30</label>
                <button  className="searchButton" type="button" onClick={check}>SZUKAJ</button>
            </div>
            <div className="header-right">
            <div className="header-nav">
                <div className="sortBtn">
                    <p className="description">Sortuj po dacie</p>
                    <div className="arrows">
                    <div onClick={()=>props.sortItems("date_asc")} className="arrowUp">
                        <img src={arrow}/>
                    </div>
                    <div onClick={()=>props.sortItems("date_desc")} className="arrowDown">
                        <img src={arrow}/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="sortBtn">
                    <p className="description">Sortuj po id</p>
                    <div className="arrows">
                        <div onClick={()=>props.sortItems("id_asc")} className="arrowUp">
                            <img src={arrow}/>
                        </div>
                        <div onClick={()=>props.sortItems("id_desc")} className="arrowDown">
                            <img src={arrow}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="sortBtn">
                        <div onClick={props.fetchCats} className="refresh">
                            <img src={refresh}/>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}