import random

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel

app = FastAPI()

# Allow cross-origin resource sharing (CORS) for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You might want to restrict this to your frontend's domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Placeholder for the secret word
five_letter_words = [
    'APPLE', 'CHAIR', 'TIGER', 'WATER', 'GRASP',
    'HAPPY', 'SUNNY', 'CLOUD', 'BEACH', 'WAVES',
    'LUNCH', 'SWEET', 'WORLD', 'LEMON', 'PAPER',
    'GRACE', 'BLISS', 'MUSIC', 'POWER', 'SHINE'
]

secret_word = random.choice(five_letter_words)


class GuessPayload(BaseModel):
    guess: str


@app.post("/guess-word/")
def guess_word(payload: GuessPayload):
    global secret_word

    guess = payload.guess

    # Validate the input
    if len(guess) != 5:
        raise HTTPException(status_code=400, detail="Invalid input. Please enter a 5-letter word.")

    correct_positions = []
    correct_letters = []
    incorrect_letters = []

    for i in range(5):
        if guess[i] == secret_word[i]:
            correct_positions.append(i)
        elif guess[i] in secret_word:
            correct_letters.append(i)
        else:
            incorrect_letters.append(i)

    response = {
        "correct_positions": correct_positions,
        "correct_letters": correct_letters,
        "incorrect_letters": incorrect_letters,
    }

    # Check if the word is completely correct
    if len(correct_positions) == 5:
        response["result"] = "success"
        response["message"] = "Congratulations! You guessed the word."
        secret_word = random.choice(five_letter_words)
    else:
        response["result"] = "fail"
        response["message"] = "Try again"

    return response
