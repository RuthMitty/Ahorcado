import React, { useState } from "react";
import { LetterForm } from "./components/LetterForm";
import { Word } from "./components/Word";

export const App = () => {
    const [tries, setTries] = useState(10);
    const [wrongLetters, setWrongLetters] = useState(["a", "b", "c"]);
    const [rightLetters, setRightLetters] = useState([]);
    const [word, setWord] = useState("");

    return (
        <div className="App">
            <div className="tries">
                <h3>Tries left</h3>
                <i>
                    {tries}
                </i>
            </div>
            <div className="wrong-letters">
                <h3>Wrong Letters</h3>
                <i>
                    {(() => {
                        let result = "";
 
                        wrongLetters.forEach((letter) => {
                            const lastLetter = wrongLetters[wrongLetters.length - 1];
                            result += letter + ((letter != lastLetter) ? (", ") : (""))
                        });

                        return result;
                    })()}
                </i>
            </div>

            <Word />

            <LetterForm />
        </div>
    );
};