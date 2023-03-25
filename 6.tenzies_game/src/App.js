import React from 'react';
import Confetti from 'react-confetti';
import { nanoid } from 'nanoid';
import Die from './components/Die';
import './App.css';

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect( () => {
    const allDiceHeld = dice.every( die => die.isHeld);
    const dieVal = dice[0].value;
    const allSameValue = dice.every( die => die.value === dieVal);
    if (allDiceHeld && allSameValue) setTenzies(true);
  }, [dice]);
  
  function generateDie() {
     return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  } 

  function allNewDice() {
    const dice = []
    for (let i = 1; i <= 10; i++) {
      dice.push(generateDie());
    }
    return dice;
  }


  const diceElements = dice.map(die => {
    return <Die 
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDieEvent={(event) => holdDie(event, die.id)}
    />
  });
  // const diceElements = [];
  // diceNumbers.map(diceNum => {
  //   diceElements.push(<Die value={diceNum} />);
  //   return diceElements
  // });

  function roll() {
    setDice((oldDice) => {
      return oldDice.map(die =>  die.isHeld ? die : generateDie());
    });
  }

  function holdDie(event, id) {
    event.stopPropagation();
    setDice((prevDice) => {
      return prevDice.map(die => {
        return die.id === id ? 
                {...die, isHeld: !die.isHeld}:
                die;
      });
    });
  }

  function resetGame() {
    setDice(allNewDice());
    setTenzies(false);
  }

  return (
    <main>
      { tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze</p>
      <div className='die-container'>
       {diceElements}
       </div>
      { tenzies ? 
       <button
        className='roll-dice'
        onClick={resetGame}
       >New Game</button> :
       <button
        className='roll-dice'
        onClick={roll}
       >Roll</button>
      }
    </main>
  );
}

export default App;
