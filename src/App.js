import React, {useState, useReducer, useEffect} from "react";
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
                el.svgSrc = random ==1 ? "/static/media/cat1.79597c16.svg" : "/static/media/cat2.c8457b33.svg"
            })
            dispatch({type: "ADD", payload: data})
        }).finally(()=>{

    })

    },[0])

    function catsReducer(state, action){
         return action.payload
    }

    async function download(){

        const url = baseUrl+state;

        const response = await fetch(url);
        const data = await response.json();

        data.forEach(el=>{
            let random = Math.floor(Math.random()*2)+1;
            el.svgSrc = random ==1 ? "/static/media/cat1.79597c16.svg" : "/static/media/cat2.c8457b33.svg"
        })

        dispatch({type: "ADD", payload: data})

    }

  return (
    <div className="App">
        <Header fetchCats={download} setThisState={setState}/>
        <CatList className="mainContent" catsToFetch={state} catsList={catsList}/>
    </div>
  );
}

export default App;
