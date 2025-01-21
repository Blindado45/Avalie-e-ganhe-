const challenges = [
  { question: "Avalie o carro Tesla Model S", answer: "Excelente" },
  { question: "Avalie o restaurante Dominos Pizza", answer: "Bom" },
  { question: "Avalie o jogador de basquete LeBron James", answer: "Excelente" },
  { question: "Avalie o hotel Hilton", answer: "Ótimo" },
  { question: "Avalie o site Amazon", answer: "Bom" },
  { question: "Avalie o carro Toyota Corolla", answer: "Médio" },
  { question: "Avalie o restaurante KFC", answer: "Bom" },
  { question: "Avalie o jogador de futebol Cristiano Ronaldo", answer: "Excelente" },
  { question: "Avalie o hotel Marriott", answer: "Ótimo" },
  { question: "Avalie o site Google", answer: "Excelente" },
  { question: "Avalie o carro Ford Mustang", answer: "Excelente" },
  { question: "Avalie o restaurante Burger King", answer: "Médio" },
  { question: "Avalie o jogador de basquete Michael Jordan", answer: "Excelente" },
  { question: "Avalie o hotel Ibis", answer: "Bom" },
  { question: "Avalie o site YouTube", answer: "Ótimo" },
  { question: "Avalie o carro BMW Série 3", answer: "Ótimo" },
  { question: "Avalie o restaurante Subway", answer: "Bom" },
  { question: "Avalie o jogador de futebol Lionel Messi", answer: "Excelente" },
  { question: "Avalie o hotel Ritz-Carlton", answer: "Excelente" },
  { question: "Avalie o site Facebook", answer: "Médio" }
];

let currentQuestionIndex = 0;
let score = 0;
let mistakes = 0;
let timer;

function startTimer() {
  let timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function loadQuestion() {
  if (currentQuestionIndex >= challenges.length || mistakes >= 4) {
    endGame();
    return;
  }

  document.getElementById("question").textContent =
    challenges[currentQuestionIndex].question;
  document.getElementById("answer").value = "";
}

function endGame() {
  clearInterval(timer);

  if (mistakes >= 4) {
    alert("Você perdeu! Tente novamente amanhã.");
  } else {
    alert(`Fim do jogo! Sua pontuação: ${score}`);
  }

  document.getElementById("game-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

document.getElementById("start-game").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  currentQuestionIndex = 0;
  score = 0;
  mistakes = 0;
  startTimer();
  loadQuestion();
});

document.getElementById("submit-answer").addEventListener("click", () => {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = challenges[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "Correto!";
  } else {
    mistakes++;
    document.getElementById("feedback").textContent = "Errado!";
  }

  currentQuestionIndex++;
  loadQuestion();
});