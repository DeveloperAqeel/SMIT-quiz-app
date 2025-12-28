let form = document.querySelector('.login')
let wcScreen = document.querySelector('.wc-con')
let quesCon = document.querySelector('.Ques-con')
let wcH1 = document.querySelector('.wc-con h1')
wcScreen.style.display= 'none';
quesCon.style.display= 'none';

function formSubmit(){
    let userName = document.querySelector("#inp1").value
    let userRollNum = document.querySelector("#inp2").value
 const userData = {
    userName,
    userRollNum
 }
 localStorage.setItem('userData',JSON.stringify(userData))
 form.style.display= 'none';
 wcScreen.style.display= 'flex';

 wcH1.innerHTML=`Welcome ${userName}`

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
      .forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedOption = btn.innerText;

    console.log("Selected:", selectedOption);
  });
});

let currentIndex = 0;
function showQuestion() {
  
   form.style.display= 'none';
 wcScreen.style.display= 'none';
quesCon.style.display= 'flex';


  document.getElementById("q-num").innerText = `Q ${currentIndex += 1} ` 
  let q = questions[currentIndex];

  document.getElementById("question").innerText = q.question;

  let optionBtns = document.querySelectorAll(".option-btn");

  optionBtns.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.classList.remove("selected");

    document.getElementById("nextBtn").innerText =
    currentIndex === questions.length - 1 ? "Finish" : "Next";
  });
}
 
// let selectedAnswer = "";
let score = 0;

function nextQues(){

  if (selectedOption === "") {
    alert("Pehle option select karo 😅");
    return;
  }

  if (selectedOption === questions[currentIndex].correct) {
    score++;
  }

  currentIndex++;
  selectedOption = "";

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    document.body.innerHTML = `
      <h1>Quiz Finished 🎉</h1>
      <h2>Your Score: ${score} / ${questions.length}</h2>
      <a href="" id="btn">Start Again </a>
    `;
  }
};


