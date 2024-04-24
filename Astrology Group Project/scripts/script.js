/*
    Group 5: 
    - Kacie Dastrup
    - Michael Slayton
    - Arvin Kabey
    File Name: script.js
    Date: 04/19/2024
*/

// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#1e1657";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}

// Function to show/ hide answers 
$("#button img").click(function(){
    $(this).siblings("figcaption").toggle();
});


// Quiz Function
const quizData = [
    {
        question: "How old is the Universe?",
        options: ["20.0 billion years old", "13.7 billion years old", "6.2 billion years old", "17.4 billion years old"],
        answer: "13.7 billion years old"
    },
    {
       question: "Which planet has the largest ocean?",
       options: ["Jupiter", "Saturn", "Earth", "Pluto"],
       answer: "Jupiter"
    },
    {
        question: "Which constellation represents a hunter and weapons?",
        options: ["Aries", "Lepus", "Orion", "Ursa Major"],
        answer: "Orion"
    },
    {
        question: "Which is the hottest planet in the solar system?",
        options: ["Mars", "Saturn", "Jupiter", "Venus"],
        answer: "Venus"
    },
    {
        question: "How many stars make up the Big Dipper?",
        options: ["9 Stars", "5 Stars", "7 Stars", "3 Stars"],
        answer: "7 Stars"
    },
    {
        question: "How long does it take the moon to orbit the Earth?",
        options: ["42 days", "28 days", "14 days", "21 days"],
        answer: "28 days"
    },
    {
        question: "Which planet does NOT have rings around it?",
        options: ["Jupiter", "Venus", "Saturn", "Uranus"],
        answer: "Venus"
    },
    {
        question: "How long does it take the sun's rays to reach Earth?",
        options: ["1 hour", "8 minutes", "32 minutes", "12 minutes"],
        answer: "8 minutes"
    },
    {
        question: "The three main parts of a comet are the nucleus, the tail, and the ____?",
        options: ["lead", "ion", "coma", "head"],
        answer: "coma"
    },
    {
        question: "How much of the Milky Way is visible to us?",
        options: ["100%", "0.5%", "0.000003%", "0.0008%"],
        answer: "0.000003%"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(option, button));
        optionsElement.appendChild(button);
    });

}
function selectAnswer(selectedAnswer, selectedButton) {
    const answer = quizData[currentQuestion].answer;
    // Remove "selected" class from all buttons
    const optionButtons = optionsElement.querySelectorAll('button');
    optionButtons.forEach(button => {
        button.classList.remove('selected');
    });
    // Add "selected" class to the clicked button
    selectedButton.classList.add('selected');
    if (selectedAnswer === answer) {
        score++;
    }
}

function submitAnswer() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const heading = document.createElement("h1");
    heading.innerText = "Completed!";
    questionElement.innerHTML = ""; // Clear any previous content
    questionElement.appendChild(heading);
    optionsElement.innerHTML = `<p>Your score: ${score}/${quizData.length}</p>`;
    submitButton.style.display = "none"; // Hide the submit button
}

submitButton.addEventListener("click", submitAnswer);
showQuestion();

