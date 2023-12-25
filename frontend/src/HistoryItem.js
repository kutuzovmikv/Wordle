// HistoryItem.js
import React from 'react';

const HistoryItem = ({ item }) => {
  const { word, correctPositions, correctLetters, incorrectLetters, message } = item;

  return (
    <div className="history-item">
      <div className="word">
        {word.split('').map((letter, i) => (
          <span
            key={i}
            className={
              correctPositions?.includes(i)
                ? 'correct-position'
                : correctLetters?.includes(i)
                ? 'correct-letter'
                : incorrectLetters?.includes(i)
                ? 'incorrect-letter'
                : ''
            }
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="result">{message}</div>
    </div>
  );
};

export default HistoryItem;
