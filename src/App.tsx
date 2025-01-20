import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

        <h1>Guess the 5 colors</h1>

        <div className="color-pallet">

            <div className="color-option" id='green'></div>
            <div className="color-option" id='red'></div>
            <div className="color-option" id='blue'></div>
            <div className="color-option" id='yellow'></div>
            <div className="color-option" id='white'></div>
            <div className="color-option" id='black'></div>
            <div className="color-option" id='brown'></div>
            <div className="color-option" id='purple'></div>
            <div className="color-option" id='pink'></div>

        </div>

        <div className="player-guesses">

            <div className="guess" id='first-guess'></div>
            <div className="guess" id='second-guess'></div>
            <div className="guess" id='third-guess'></div>
            <div className="guess" id='fourth-guess'></div>
            <div className="guess" id='fifth-guess'></div>

        </div>

        <div className="game-colors">

            <div className="answer" id='first-answer'></div>
            <div className="answer" id='second-answer'></div>
            <div className="answer" id='third-answer'></div>
            <div className="answer" id='fourth-answer'></div>
            <div className="answer" id='fifth-answer'></div>

        </div>

    </>
  )
}

export default App
