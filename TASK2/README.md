#  Number Guessing Game

A fun and interactive browser-based Number Guessing Game built using HTML, CSS, and JavaScript.

The player has to guess a randomly generated number between 1 and 100. The game provides hints after each guess and tracks the number of attempts taken to find the correct answer.

---

## Features

- Random number generation
- Interactive user interface
- Hint system (Higher / Lower)
- "Very Close" hints when near the answer
- Attempt counter
- Best score tracking using Local Storage
- Restart game option
- Responsive design

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## How to Run

### Method 1

1. Download or clone the project.
2. Open the project folder.
3. Double-click `index.html`.

### Method 2 (Recommended)

Open terminal inside the project folder and run:

```bash
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

in your browser.

---

## Game Rules

1. The game generates a random number between 1 and 100.
2. Enter your guess in the input field.
3. Click the **CHECK** button.
4. The game will provide hints:
   - Try Higher
   - Try Lower
   - Very Close
5. Keep guessing until you find the correct number.
6. Your score is based on the number of attempts used.

---

## Project Structure

```
TASK2
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Future Improvements

- Multiple difficulty levels
- Sound effects
- Timer mode
- Leaderboard system
- Animated celebrations
- Dark/Light theme toggle

---

## Author

Nandini Chauhan

SkillCraft Technology Internship Task 02