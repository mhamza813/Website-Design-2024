const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1
    },
    {
      question: "What is the color of the sky?",
      options: ["Blue", "Red", "Green", "Yellow"],
      answer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementsByClassName("option");
    const questionData = questions[currentQuestionIndex];
  
    questionElement.innerText = questionData.question;
    for (let i = 0; i < options.length; i++) {
      options[i].innerText = questionData.options[i];
      options[i].style.backgroundColor = "#007bff";
      options[i].disabled = false;
    }
  
    document.getElementById("next-button").style.display = "none";
    document.getElementById("result-container").style.display = "none";
  }
  
  function selectAnswer(optionIndex) {
    const options = document.getElementsByClassName("option");
    const questionData = questions[currentQuestionIndex];
  
    if (optionIndex === questionData.answer) {
      options[optionIndex].style.backgroundColor = "green";
      score++;
    } else {
      options[optionIndex].style.backgroundColor = "red";
      options[questionData.answer].style.backgroundColor = "green";
    }
  
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  
    document.getElementById("next-button").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("result-container").style.display = "block";
  
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Your score: ${score} out of ${questions.length}`;
  }
  
  showQuestion();
  