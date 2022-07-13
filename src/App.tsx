import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import WORDS from "./words.json";

function App() {
  const [word, setWord] = useState<string>("");
  const [guesses, setGuesses] = useState<any[]>(Array(6).fill(null));
  useEffect(() => {
    const randWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randWord);
    console.log(randWord);
  }, []);

  return (
    <div className="grid p-12 flex justify-center w-creen h-screen bg-slate-700 text-white">
      {word}
      {guesses.map((guess) => (
        <Line guess={guess} />
      ))}
    </div>
  );
}

export default App;

function Line(props: { guess: any[] }) {
  return (
    <div className="bg-white">
      {props.guess.map((item) => (
        <div>Bos</div>
      ))}
    </div>
  );
}
