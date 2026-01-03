let form = document.querySelector('.login')
let wcScreen = document.querySelector('.wc-con')
let quesCon = document.querySelector('.Ques-con')
let wcH1 = document.querySelector('.wc-con h1')
let timer = document.querySelector('.timer')
wcScreen.style.display = 'none'
quesCon.style.display = 'none'
timer.style.display = 'none'
let userName = ""
let RollNum = ""
function formSubmit() {
  userName = document.querySelector("#inp1").value
  userRollNum = document.querySelector("#inp2").value
  // console.log(userName);
  const userData = {
    userName,
    userRollNum
  }
  localStorage.setItem('userData', JSON.stringify(userData))
  form.style.display = 'none';
  wcScreen.style.display = 'flex';

  wcH1.innerHTML = `Welcome ${userName}`

}

const questions = [
  {
    question: "JavaScript kis type ki language hai?",
    options: ["Compiled", "Interpreted", "Markup", "Styling"],
    correct: "Interpreted"
  },
  {
    question: "JS ka full form kya hai?",
    options: ["Java Source", "JavaScript", "Just Script", "Json Script"],
    correct: "JavaScript"
  },
  {
    question: "JavaScript ko kis tag mein likhte hain?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: "<script>"
  },
  {
    question: "JavaScript browser mein kahan run hoti hai?",
    options: ["Server", "Compiler", "Browser", "Database"],
    correct: "Browser"
  },
  {
    question: "Variable declare karne ke liye kaunsa keyword use hota hai?",
    options: ["var", "int", "string", "float"],
    correct: "var"
  },
  {
    question: "Kaunsa keyword constant value ke liye use hota hai?",
    options: ["var", "let", "const", "static"],
    correct: "const"
  },
  {
    question: "Array ka index kis number se start hota hai?",
    options: ["0", "1", "-1", "2"],
    correct: "0"
  },
  {
    question: "JavaScript mein function kaise banate hain?",
    options: [
      "function myFunc()",
      "def myFunc()",
      "create myFunc()",
      "func myFunc()"
    ],
    correct: "function myFunc()"
  },
  {
    question: "DOM ka full form kya hai?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Document Oriented Model",
      "Dynamic Object Model"
    ],
    correct: "Document Object Model"
  },
  {
    question: "document.getElementById kya return karta hai?",
    options: ["Array", "String", "HTML Element", "Number"],
    correct: "HTML Element"
  },
  {
    question: "forEach kis par use hota hai?",
    options: ["Object", "Array", "String", "Number"],
    correct: "Array"
  },
  {
    question: "JavaScript mein == aur === mein kya farq hai?",
    options: [
      "Koi farq nahi",
      "=== type bhi check karta hai",
      "== fast hota hai",
      "=== slow hota hai"
    ],
    correct: "=== type bhi check karta hai"
  },
  {
    question: "alert() function ka kya kaam hai?",
    options: [
      "Console mein print",
      "Popup show",
      "HTML change",
      "Page reload"
    ],
    correct: "Popup show"
  },
  {
    question: "console.log ka use kyun hota hai?",
    options: [
      "Data save",
      "Debugging",
      "Alert show",
      "HTML design"
    ],
    correct: "Debugging"
  },
  {
    question: "JavaScript mein comment kaise likhte hain?",
    options: [
      "// comment",
      "<!-- comment -->",
      "# comment",
      "** comment **"
    ],
    correct: "// comment"
  },
  {
    question: "Event listener add karne ka method kaunsa hai?",
    options: [
      "addEventListener()",
      "addEvent()",
      "onClick()",
      "listenEvent()"
    ],
    correct: "addEventListener()"
  },
  {
    question: "Math.random() kya return karta hai?",
    options: [
      "0 se 1 ke darmiyan number",
      "Sirf 1",
      "Integer value",
      "String"
    ],
    correct: "0 se 1 ke darmiyan number"
  },
  {
    question: "JavaScript mein null ka matlab kya hai?",
    options: [
      "Undefined",
      "Empty value",
      "Zero",
      "False"
    ],
    correct: "Empty value"
  },
  {
    question: "setTimeout ka use kya hai?",
    options: [
      "Loop chalana",
      "Delay ke baad function run",
      "Page reload",
      "Animation stop"
    ],
    correct: "Delay ke baad function run"
  },
  {
    question: "LocalStorage kis cheez ke liye use hota hai?",
    options: [
      "Temporary data",
      "Browser mein data save",
      "Server storage",
      "API call"
    ],
    correct: "Browser mein data save"
  }
];

let selectedOption = "";
// console.log(selectedOption)
document.querySelectorAll(".option-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".option-btn")
      .forEach(b => b.classList.remove("selected"))
    btn.classList.add("selected");
    selectedOption = btn.innerText;

    console.log("Selected:", selectedOption)
  });
});

let currentIndex = 0

function showQuestion() {

  form.style.display = 'none'
  wcScreen.style.display = 'none'
  quesCon.style.display = 'flex'
  timer.style.display = 'flex'



  document.getElementById("q-num").innerText = `Q ${currentIndex + 1} `
  let q = questions[currentIndex];

  document.getElementById("question").innerText = q.question;

  let optionBtns = document.querySelectorAll(".option-btn")

  optionBtns.forEach((btn, index) => {
    btn.innerText = q.options[index]
    btn.classList.remove("selected");
    document.getElementById("nextBtn").innerText =
      currentIndex === questions.length - 1 ? "Finish" : "Next"
  });
}

// let selectedAnswer = "";
let score = 0;


function nextQues() {
  
  if (selectedOption === "") {
    alert("please Select Atleast one option");
    return;
  }

  if (selectedOption === questions[currentIndex].correct) {
    score++;
  }
  
  currentIndex++;
  selectedOption = "";
  let gret70 = ""
  let cong = ""
  let percentage = ((score / questions.length) * 100).toFixed(2);
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    if (percentage >= 70) {
      gret70 = "Congratulations You have passed the quiz with good score.";
      cong = " Congratulations "
    }
    else if (percentage >= 40) {
      gret70 = "Good effort You have scored average in the quiz.";
      cong = " Good Effort "
    }
    document.body.innerHTML = `
    <div class="finshQuiz">
    <h1>🎉🎉🎉${cong}${userName}🎉🎉🎉</h1>
    <h2>${gret70}</h2>
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <h2>Your percentage: ${percentage}%</h2>
    <button id="btn" onclick="startAgain()">Start Again</button>
    </div>
    `;
  }
};

const startAgain = () => {
  
  clearInterval(Timer);

  currentIndex = 0;
  score = 0;
  selectedOption = "";
  totalTime = 20 * 60;

  document.body.innerHTML = "";       
  document.body.append(form, wcScreen, quesCon, timer);

  showQuestion();
  startTimer();
  // currentIndex = 0;
  // score = 0;
  // selectedOption = "";
  // totalTime = 20 * 60;
  // showQuestion();
  // startTimer();
};

let totalTime = 20 * 60
let Timer
function startTimer() {
  Timer = setInterval(() => {

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText =
      `${minutes}:${seconds}`;

    totalTime--;

    if (totalTime < 0) {
      clearInterval(Timer);
      finishQuiz();
    }

  }, 1000);
}
function finishQuiz() {
  document.body.innerHTML =
    `<div class="finshQuiz">
    <h1>Time Over!</h1>
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <button id="btn">Start Again</button>
    </div>
  `;
}

let startTimerCallBtn = document.querySelector('.btncall')
startTimerCallBtn.style.anmationName = 'rrotat'
startTimerCallBtn.addEventListener('click', () => {
  startTimerCallBtn.style.anmationName = 'rotation'

  startTimer()
})
// return false;