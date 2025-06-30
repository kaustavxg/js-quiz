const body = document.querySelector('body');

const quizDataJS = [
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    a: "'==' compares value only, '===' compares value and type",
    b: "Both are the same",
    c: "'===' compares only values",
    d: "'==' compares value and type",
    correct: "a",
  },
  {
    question: "What is a closure in JavaScript?",
    a: "A function inside a loop",
    b: "A function having access to its own scope only",
    c: "A function having access to variables from its outer function scope even after the outer function has returned",
    d: "An immediately invoked function",
    correct: "c",
  },
  {
    question: "What is the difference between var, let, and const?",
    a: "var is block scoped, let is function scoped, const is global",
    b: "var and let are the same, const is different",
    c: "var is function scoped, let and const are block scoped",
    d: "All are block scoped",
    correct: "c",
  },
  {
    question: "What are arrow functions in JavaScript?",
    a: "Functions that are automatically executed",
    b: "Functions with no return type",
    c: "Functions with shorter syntax and no own 'this' binding",
    d: "Old style JavaScript functions",
    correct: "c",
  },
  {
    question: "What is event delegation in JavaScript?",
    a: "Passing events between functions",
    b: "Using one event handler to manage all child elements",
    c: "Attaching events to all child elements manually",
    d: "Blocking events from reaching children",
    correct: "b",
  },
  {
    question: "What is hoisting in JavaScript?",
    a: "Moving function calls to the bottom",
    b: "JavaScript ignores undeclared variables",
    c: "JavaScript moves declarations to the top of the scope",
    d: "JavaScript prevents global scope pollution",
    correct: "c",
  },
  {
    question: "What is the use of the 'bind()' method?",
    a: "Creates a copy of the function",
    b: "Changes the function name",
    c: "Sets the value of 'this' inside a function",
    d: "Binds variables to constants",
    correct: "c",
  },
  {
    question: "What is the purpose of async/await in JavaScript?",
    a: "To make code synchronous",
    b: "To pause function execution indefinitely",
    c: "To handle asynchronous operations in a cleaner way",
    d: "To create new threads",
    correct: "c",
  },
  {
    question: "What is the 'call()' method in JavaScript?",
    a: "A way to call another function's arguments",
    b: "Executes a function with a given 'this' value and arguments",
    c: "Used to define a function",
    d: "A shortcut for defining variables",
    correct: "b",
  },
  {
    question: "What does 'typeof NaN' return?",
    a: "'number'",
    b: "'NaN'",
    c: "'undefined'",
    d: "'object'",
    correct: "a",
  }
];



const quizContainer = document.createElement('div');
const myQuestions = document.createElement('span');
const myOptions = document.createElement('div');
const next = document.createElement('button');
next.textContent = "Next";

let currentIndex = 0;
let score = 0;

// adding questions and options

function renderQuestion(){

    // clearing input elements
    myOptions.innerHTML = "";

    // adding questions
    myQuestions.innerHTML = `Q${currentIndex + 1}: ${quizDataJS[currentIndex].question}`;

    //adding options
    const options = ["a", "b", "c", "d"];
    options.forEach(function(key){
        const optionBox = document.createElement('div');
    
        const input = document.createElement('input');
        input.value = key;
        input.id = `option-${key}`;
        input.type = 'radio';
        input.name = 'option';

        const label = document.createElement('label');
        label.setAttribute('for', `option-${key}`);
        label.textContent = `${quizDataJS[currentIndex][key]}`;



        optionBox.appendChild(input);
        optionBox.appendChild(label);
        myOptions.appendChild(optionBox);
    });
}


next.addEventListener('click', function(){
    const selected = document.querySelector('input[name="option"]:checked');

    if(!selected){
        alert("please select an option to proceed");
        return;
    }

    if(selected.value === quizDataJS[currentIndex].correct) 
        score++;


    currentIndex++;
    if(currentIndex < quizDataJS.length){
        renderQuestion();
    } else {
        quizContainer.innerHTML = `<h3>Quiz Over</h3><p>Score is ${score}/${quizDataJS.length}</p>`
    }
})


quizContainer.appendChild(myQuestions);
quizContainer.appendChild(myOptions);
quizContainer.appendChild(next);
body.appendChild(quizContainer);

renderQuestion()