import React, {useState, useReducer, useEffect} from "react";
import cat1 from "./svg/cat1.svg"
import cat2 from "./svg/cat2.svg"
import './App.css';
import CatList from "./components/cat-list";
import Header from "./components/header"
function App() {

    const baseUrl = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount="

    const [state,setState] = useState(4);

    const [catsList, dispatch] = useReducer(catsReducer,[])

    useEffect(()=>{
        const url = baseUrl+state;
        fetch(url).then(response=>{
            if(response.ok){
                return response.json();
            }
        }).then(data=>{
            data.forEach(el=>{
                let random = Math.floor(Math.random()*2)+1;
                el.svgSrc = random ==1 ? cat1 : cat2
            })
            dispatch({type: "ADD", payload: data})
        }).finally(()=>{})


    },[0])

    function catsReducer(state, action){
        switch (action.type){
            case "ADD":
                return action.payload
            break;
            case "SORT":
                const newList = state.map((item)=>({...item}))
                if(action.subType == "id_asc"){
                    newList.sort((a,b)=> parseInt(a._id,16) - parseInt(b._id,16))
                    return newList
                }else if(action.subType == "id_desc"){
                    newList.sort((a,b)=> parseInt(b._id,16) - parseInt(a._id,16));
                    return newList;
                }else if(action.subType == "date_asc"){
                    console.log(state)
                    newList.sort((a,b)=> new Date (a.createdAt) - new Date (b.createdAt));
                    return newList;
                }else if(action.subType == "date_desc"){
                    newList.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
                    return newList;
                }
                break;
            default:
                return action.payload;
        }
    }

    async function download(){

        const url = baseUrl+state;

        const response = await fetch(url);
        const data = await response.json();

        {
            data.forEach(el => {
                let random = Math.floor(Math.random() * 2) + 1;
                el.svgSrc = random == 1 ? cat1 : cat2
            })
        }
        dispatch({type: "ADD", payload: data})

    }

    function sortItems(val){
        dispatch({type: "SORT",subType:val, payload: catsList})
    }

  return (
    <div className="App">
        <Header fetchCats={download} setThisState={setState} sortItems={sortItems}/>
        <hr/>
        <CatList className="mainContent" catsToFetch={state} catsList={catsList}/>
    </div>
  );
}

export default App;
