import React from 'react';
import Confetti from 'react-confetti';
import Die from './components/Die';
import './App.css';

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const dice = []
    for (let i = 1; i <= 10; i++) {
      const rand = Math.ceil(Math.random() * 6);
      dice.push(
        {
          value: rand,
          isHeld: false
        }
      );
    }
    return dice;
  }

  console.log(dice);

  const diceElements = dice.map(dice => <Die value={dice.value} />);
  // const diceElements = [];
  // diceNumbers.map(diceNum => {
  //   diceElements.push(<Die value={diceNum} />);
  //   return diceElements
  // });

  function roll() {
    setDice(allNewDice());
  }

  return (
    <main>
      <div className='die-container'>
       {diceElements}
       </div>
       <button
        className='roll-dice'
        onClick={roll}
       >Roll</button>
    </main>
  );
}

export default App;
