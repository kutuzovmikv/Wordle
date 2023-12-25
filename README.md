# Wordle Game

Welcome to the Wordle Game project! This simple and engaging word-guessing game challenges players to guess a 5-letter word within a limited number of attempts. The game provides visual feedback, highlighting correct positions and letters in the guessed word.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive UI**: User-friendly interface for input and interaction.
- **Real-time Feedback**: Visual indication of correct positions and letters.
- **Input History**: Track and display previous guesses with corresponding colors.
- **Attempt Counter**: Keep track of the remaining attempts to guess the word.
- **Restart Functionality**: Start a new game with a click of a button.

## Technologies Used

- **Frontend**: React
- **Backend**: FastAPI (Python)
- **Styling**: CSS
- **Communication**: Fetch API

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/wordle-game.git
   cd wordle-game

2. **Install Dependecies**

      ```bash
        # Navigate to the frontend directory
        cd frontend
        npm install
    
        # Navigate to the backend directory
        cd ../backend
        pip install -r requirements.txt
       ```

3. **Run the application**

   ```bash
   # Start the frontend development server
   cd frontend
   npm start
   
   # Start the backend server
   cd ../backend
   uvicorn main:app --reload
   ```
   
   Visit http://localhost:3000 in your browser to access the Wordle game.

## Usage

- **Enter a Word:** Input a 5-letter word and submit.
- **Receive Feedback:** Visual feedback will be provided for correct positions and letters.
- **Track Attempts:** Monitor the remaining attempts to guess the word.
- **Review History:** Explore the input history to see previous guesses and their results.
- **Restart Game:** Start a new game at any time.

## Api Documentation

The backend API provides a single endpoint for guessing the word. Check the API documentation for details on the request and response format.

- **Endpoint: /guess-word/**
- **Method: POST**
- **Request Payload: { "guess": ["A", "P", "P", "L", "E"] }**
- **Response Format:**

```json
{
  "correct_positions": [0, 1],
  "correct_letters": [0, 1],
  "incorrect_letters": [0, 1],
  "result": "success",
  "message": "Congratulations! You guessed the word."
}
```

## Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests.

- Fork the repository.
- Create a new branch: `git checkout -b feature/new-feature`
- Make your changes and commit them: `git commit -m 'Add new feature'`
- Push to the branch: `git push origin feature/new-feature`
- Submit a pull request.

## License

Слово пацана даю, не баню