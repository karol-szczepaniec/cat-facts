import React, {useState} from "react";
import './App.css';
import CatList from "./components/cat-list";
import Header from "./components/header"
function App() {

    const [state,setState] = useState(2);

    let cats = [
        {
            id: "59cd7a97c828120020f7d3a1",
            data: "2020-01-12",
            text: "Wszystkie Internetowe generatory Lorem Ipsum mają tendencje do kopiowania już istniejących bloków, co czyni nasz pierwszym prawdziwym generatorem w Internecie. Używamy zawierającego ponad 200 łacińskich słów słownika, w kontekście wielu znanych sentencji, by wygenerować tekst wyglądający odpowiednio.",
        },
        {
            id: "789y9",
            data: "2022-02-33",
            text: "jakiś opis jest",
        },
        {
            id: "789y9",
            data: "2022-02-33",
            text: "jakiś opis jest",
        },
    ]

    async function download(){
        const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount="+state;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

    }

  return (
    <div className="App">
        <Header fetchCats={download} setThisState={setState}/>
        <CatList catsToFetch={state} catsList={cats}/>
    </div>
  );
}

export default App;
