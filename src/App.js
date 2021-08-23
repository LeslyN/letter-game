import './App.css';
import lettersJson from './board.json';
import { useState } from "react";

function App() {
  const defaultLetters = lettersJson.board;
  const [newLetters, setLetters] = useState([])
  // const [defaultLettersCopy, setDefaultLetterCopy] = useState([
  //                                                                         { letter: newLetters, clicked: false },
  //                                                                         { letter: 'A', clicked: false}
  //                                                                       ]);

  const clickable = (event) => {
    setLetters([...newLetters, event.target.innerHTML])
  }

  const empty = () => {
    setLetters([])
  }



  return (
    <div className="app">
      <div className="container">
        <div className="empty">
          <span className="word">clear word</span>
          <button onClick={empty} className="icon-deleted">X</button>
        </div>
        <ul className="main">
          {
            defaultLetters.map(item => (
              <button key={item} onClick={clickable} data-mssg={item} className="button-letter">{ item }</button>)
            )
          }
        </ul>
        <div className="result">{newLetters.map(letter => (<span key={letter}>{letter}</span>))}</div>
      </div>
    </div>
  );
}

export default App;
