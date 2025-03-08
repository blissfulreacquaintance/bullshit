// Riddles object with the question and correct answer for each person
const riddles = {
    "name1": { question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?", answer: "keyboard" },
    "name2": { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    "name3": { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "echo" },
    "name4": { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "the letter m" },
    "name5": { question: "I am tall when I am young and short when I am old. What am I?", answer: "candle" },
    "name6": { question: "What has hands but can’t clap?", answer: "clock" },
    "name7": { question: "What has a heart that doesn’t beat?", answer: "artichoke" },
    "name8": { question: "What is so fragile that saying its name breaks it?", answer: "silence" },
    "name9": { question: "I’m not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, and I can drown. What am I?", answer: "fire" },
    "name10": { question: "The more you have of me, the less you see. What am I?", answer: "darkness" },
    "name11": { question: "What has many keys but can’t open a single lock?", answer: "piano" },
    "name12": { question: "I am not alive, but I grow. I don’t have eyes, but I can show you a lot. What am I?", answer: "book" },
    "name13": { question: "What comes down but never goes up?", answer: "rain" },
    "name14": { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    "name15": { question: "What gets wetter as it dries?", answer: "towel" },
    "name16": { question: "What has an eye but cannot see?", answer: "needle" }
};

// Function to start the riddle when a name is clicked
function startRiddle(name) {
    // Hide the name list
    document.querySelector('.names').style.display = 'none';

    // Show the riddle container
    document.getElementById('riddleContainer').style.display = 'block';

    // Set the riddle question
    document.getElementById('riddle').innerText = riddles[name].question;
    
    // Clear previous answer and message
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
    
    // Save the name clicked to compare later
    sessionStorage.setItem('currentRiddle', name);
}

// Function to check the user's answer
function checkAnswer() {
    const currentRiddle = sessionStorage.getItem('currentRiddle');
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    // Check if the answer is correct
    if (userAnswer === riddles[currentRiddle].answer.toLowerCase()) {
        // Show success message
        document.getElementById('message').innerText = "Correct! You can now proceed.";

        // Unlock the next name
        const nextName = getNextName(currentRiddle);
        if (nextName) {
            document.getElementById(nextName).style.display = 'block';
        }

        // Hide the riddle and show the name list again
        document.getElementById('riddleContainer').style.display = 'none';
        document.querySelector('.names').style.display = 'block';
    } else {
        // Show an error message if the answer is incorrect
        document.getElementById('message').innerText = "Incorrect. Try again!";
    }
}

// Function to get the next name in sequence
function getNextName(currentRiddle) {
    const riddleOrder = [
        "name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8",
        "name9", "name10", "name11", "name12", "name13", "name14", "name15", "name16"
    ];
    
    const currentIndex = riddleOrder.indexOf(currentRiddle);
    if (currentIndex < riddleOrder.length - 1) {
        return riddleOrder[currentIndex + 1];
    }
    return null;
}
