import React from "react";
import Cat from "./cat"

export default function catList(){
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
     const url = "https://cat-fact.herokuapp.com/facts"

        const response = await fetch(url);
     const data = await response.json();

        console.log(data);

    }
    const elements = cats.map(cat=>{return <Cat item={cat} />})
    //<button onClick={download}>pobierz</button>
    return(
        <div className="container">
            {elements}
        </div>
    )
}