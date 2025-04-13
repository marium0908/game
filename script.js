const quiz = [
  {
    question: "What is the first pillar of Islam?",
    options: ["Salah", "Zakat", "Shahada", "Sawm"],
    answer: "Shahada"
  },
  {
    question: "How many times a day do Muslims pray?",
    options: ["2", "3", "5", "7"],
    answer: "5"
  },
  {
    question: "Which month do Muslims fast in?",
    options: ["Muharram", "Shawwal", "Ramadan", "Dhul-Hijjah"],
    answer: "Ramadan"
  },
  {
    question: "What is the holy book of Islam?",
    options: ["Bible", "Quran", "Torah", "Vedas"],
    answer: "Quran"
  }
  {
    question: "Who was the first Prophet in Islam?",
    options: ['Prophet Muhammad (PBUH)', 'Prophet Ibrahim (Abraham)', ' Prophet Adam','Prophet Musa (Moses)'],
    answer: "Prophet Adam"
  },
  {
    question: "Which city is known as the birthplace of Prophet Muhammad (PBUH)?",
    options: ['Jerusalem', ' Mecca', 'Madina', 'Mairo'],
    answer: "Mecca"
  },
  {
    question: "In which battle did Prophet Muhammad (PBUH) first participate as a leader?",
    options: ['Battle of Uhud', 'Battle of Badr', 'Battle of Khandaq', 'Battle of Hunayn'],
    answer: "Battle of Badr"
  },
  {
    question: "How many pillars of Islam are there?",
    options: ['5', '3', '2', '7'],
    answer: "5"
  },
  {
    question: "What is the festival that marks the end of Ramadan?",
    options: ['Eid al-Adha', 'Eid al-Fitr', 'Mawlid', 'Haji'],
    answer: "Eid al-Fitr"
  },
  {
    question: "What do Muslims celebrate during Eid al-Adha?",
    options: [' The end of Hajj', 'The birth of Prophet Muhammad (PBUH)', 'The sacrifice of Prophet Ibrahim', 'The start of the Islamic New Year'],
    answer: "Option A10"
  },
  
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreContainer = document.getElementById("score-container");

function loadQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
  scoreContainer.textContent = "";
}

function checkAnswer(selected) {
  const correct = quiz[currentQuestion].answer;
  if (selected === correct) {
    score++;
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! Correct answer is: ${correct}`);
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreContainer.textContent = `You scored ${score} out of ${quiz.length}`;
}

loadQuestion();
