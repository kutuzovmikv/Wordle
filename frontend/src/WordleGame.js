import React, { useState, useEffect } from 'react';
import HistoryItem from './HistoryItem';
import './WordleGame.css';

const WordleGame = () => {
    const [word, setWord] = useState('');
    const [attempts, setAttempts] = useState(5);
    const [history, setHistory] = useState([]);
    const [message, setMessage] = useState('');
    const [correctPositions, setCorrectPositions] = useState([]);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectLetters, setIncorrectLetters] = useState([]);

  const handleSubmit = async () => {
    // Отправляем введенное слово на сервер
    const response = await fetch('http://localhost:8000/guess-word/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guess: word }),
    });

    const data = await response.json();

    // Обновляем состояние компонента на основе ответа от сервера
    setCorrectPositions(data.correct_positions);
    setCorrectLetters(data.correct_letters);
    setIncorrectLetters(data.incorrect_letters);
    setMessage(data.message);

    // Уменьшаем количество попыток
    setAttempts(attempts - 1);

    // Добавляем текущее слово в историю
    setHistory((prevHistory) => [
        ...prevHistory,
        { word, ...data, correctPositions: [...data.correct_positions], correctLetters: [...data.correct_letters], incorrectLetters: [...data.incorrect_letters] },
      ]);
  };

  const handleRestart = () => {
    // Сбрасываем все состояния для новой игры
    setWord('');
    setAttempts(5);
    setHistory([]);
    setMessage('');
  };

  useEffect(() => {
    // Если у игрока закончились попытки, выводим сообщение и блокируем поле ввода
    if (attempts === 0) {
      setMessage('Game over. The correct word was APPLE.');
    }
  }, [attempts]);

  return (
    <div className="App">
      <h1>Wordle Game</h1>
      <p>Attempts left: {attempts}</p>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
        disabled={attempts === 0 || message.includes('Congratulations')}
      />
      <button onClick={handleSubmit} disabled={attempts === 0 || message.includes('Congratulations')}>
        Submit
      </button>
      <button onClick={handleRestart}>Restart</button>
      <div className="history">
        {history.map((item, index) => (
          <HistoryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WordleGame;
