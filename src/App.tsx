import { useState } from 'react';
import './App.css';

function App() {
  const allColors = [
    'green', 'red', 'blue',
    'yellow', 'white', 'black',
    'brown', 'purple', 'pink',
  ];

  const [hiddenColors, setHiddenColors] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<(string | null)[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isGameActive, setIsGameActive] = useState(false);

  const startGame = () => {
    const shuffledColors = [...allColors].sort(() => Math.random() - 0.5);
    setHiddenColors(shuffledColors.slice(0, 5));
    setGuesses(Array(5).fill(null));
    setFeedback(null);
    setIsGameActive(true);
  };

  const endGame = () => {
    setIsGameActive(false);
    setFeedback(null);
    setGuesses([]);
  };

  const handleColorClick = (color: string) => {
    const firstEmptyIndex = guesses.findIndex((guess) => guess === null);
    if (firstEmptyIndex !== -1) {
      setGuesses((prevGuesses) => {
        const updatedGuesses = [...prevGuesses];
        updatedGuesses[firstEmptyIndex] = color;
        return updatedGuesses;
      });
    }
  };

  const handleGuessClick = (index: number) => {
    setGuesses((prevGuesses) => {
      const updatedGuesses = [...prevGuesses];
      updatedGuesses[index] = null;
      return updatedGuesses;
    });
  };

  const checkGuesses = () => {
    if (guesses.every((guess) => guess !== null)) {
      let correctCount = 0;

      guesses.forEach((guess, index) => {
        if (guess === hiddenColors[index]) {
          correctCount++;
        }
      });

      if (correctCount === 5) {
        setFeedback(`🎉 Perfect! You guessed all colors correctly: ${hiddenColors.join(', ')}.`);
        setTimeout(endGame, 1000);
      } else {
        setFeedback(`You guessed ${correctCount}/5 colors correctly in the right order. Try again!`);
      }
    } 
  };

  return (
    <>
      <h1>Guess the 5 colors in order</h1>

      <div className="color-pallet">
        {allColors.map((color) => (
          <div
            key={color}
            className="color-option"
            id={color}
            onClick={() => handleColorClick(color)}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      <div className="player-guesses">
        {guesses.map((guess, index) => (
          <div
            key={index}
            className="guess"
            onClick={() => handleGuessClick(index)}
            style={{
              backgroundColor: guess || '#424141',
              cursor: guess ? 'pointer' : 'default',
              border: '1px solid black',
            }}
          ></div>
        ))}
      </div>

      {feedback && <div className="feedback">{feedback}</div>}

      {!isGameActive && (
        <button id="start-btn" onClick={startGame}>
          Start Game
        </button>
      )}

      {isGameActive && (
        <button
          id="check-btn"
          onClick={checkGuesses}
          disabled={guesses.some((guess) => guess === null)}
        >
          Check Guesses
        </button>
      )}
    </>
  );
}

export default App;
