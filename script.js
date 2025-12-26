let form = document.querySelector('.login')
let wcScreen = document.querySelector('.wc-con')
let wcH1 = document.querySelector('.wc-con h1')
wcScreen.style.display= 'none';

function formSubmit(){
    let userName = document.querySelector("#inp1").value
    let userRollNum = document.querySelector("#inp2").value
 const userData = {
    userName,
    userRollNum
 }
 localStorage.setItem('userData',JSON.stringify(userData))
//  console.log(userData.userName)
 form.style.display= 'none';
 wcScreen.style.display= 'flex';

 wcH1.innerHTML=`Welcome ${userName}`

}

const quizQuestions = [
  {
    question: "JavaScript kis type ki language hai?",
    options: {
      a: "Markup Language",
      b: "Styling Language",
      c: "Programming Language",
      d: "Database Language"
    },
    correct: "c"
  },
  {
    question: "JavaScript ko kis tag ke andar likha jata hai?",
    options: {
      a: "<js>",
      b: "<javascript>",
      c: "<script>",
      d: "<code>"
    },
    correct: "c"
  },
  {
    question: "Variable declare karne ke liye kaunsa keyword use hota hai?",
    options: {
      a: "var",
      b: "let",
      c: "const",
      d: "All of these"
    },
    correct: "d"
  },
  {
    question: "let aur const mein main difference kya hai?",
    options: {
      a: "let redeclare hota hai",
      b: "const ki value change nahi hoti",
      c: "let global hota hai",
      d: "const function hota hai"
    },
    correct: "b"
  },
  {
    question: "JavaScript mein function ka kaam kya hai?",
    options: {
      a: "HTML likhna",
      b: "CSS apply karna",
      c: "Code reuse karna",
      d: "Database connect"
    },
    correct: "c"
  },
  {
    question: "Arrow function ka syntax kya hai?",
    options: {
      a: "function =>",
      b: "() => {}",
      c: "=> function()",
      d: "() -> {}"
    },
    correct: "b"
  },
  {
    question: "Array ka index kis number se start hota hai?",
    options: {
      a: "1",
      b: "0",
      c: "-1",
      d: "2"
    },
    correct: "b"
  },
  {
    question: "Object kis format mein data store karta hai?",
    options: {
      a: "key : value",
      b: "index : value",
      c: "value : key",
      d: "row : column"
    },
    correct: "a"
  },
  {
    question: "=== operator kya check karta hai?",
    options: {
      a: "Sirf value",
      b: "Sirf type",
      c: "Value aur type dono",
      d: "Kuch bhi nahi"
    },
    correct: "c"
  },
  {
    question: "NaN ka matlab kya hai?",
    options: {
      a: "New and New",
      b: "Not a Name",
      c: "Not a Number",
      d: "No any Number"
    },
    correct: "c"
  },
  {
    question: "LocalStorage mein data kis form mein save hota hai?",
    options: {
      a: "Number",
      b: "Object",
      c: "Array",
      d: "String"
    },
    correct: "d"
  },
  {
    question: "JSON.stringify ka use kya hai?",
    options: {
      a: "String ko object banana",
      b: "Object ko string banana",
      c: "Data delete",
      d: "Array banana"
    },
    correct: "b"
  },
  {
    question: "JSON.parse ka kaam kya hai?",
    options: {
      a: "String ko object banana",
      b: "Object ko string banana",
      c: "Loop chalana",
      d: "Condition check"
    },
    correct: "a"
  },
  {
    question: "Event listener ka use kya hai?",
    options: {
      a: "CSS lagana",
      b: "User action handle",
      c: "HTML likhna",
      d: "Database connect"
    },
    correct: "b"
  },
  {
    question: "setTimeout kis liye use hota hai?",
    options: {
      a: "Loop",
      b: "Delay",
      c: "Animation only",
      d: "Condition"
    },
    correct: "b"
  },
  {
    question: "for loop ka use kya hai?",
    options: {
      a: "Condition",
      b: "Function",
      c: "Repeat code",
      d: "Design"
    },
    correct: "c"
  },
  {
    question: "Prompt ka use kya hai?",
    options: {
      a: "Output show",
      b: "Input lena",
      c: "Alert",
      d: "Confirm"
    },
    correct: "b"
  },
  {
    question: "Confirm box kya return karta hai?",
    options: {
      a: "String",
      b: "Number",
      c: "Boolean",
      d: "Object"
    },
    correct: "c"
  },
  {
    question: "typeof operator ka use kya hai?",
    options: {
      a: "Value change",
      b: "Data type check",
      c: "Loop",
      d: "Condition"
    },
    correct: "b"
  },
  {
    question: "JavaScript file ka extension kya hota hai?",
    options: {
      a: ".java",
      b: ".jsx",
      c: ".js",
      d: ".json"
    },
    correct: "c"
  }
];
