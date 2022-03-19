
  
     


let questions = [
  {
    id: 1,
    question: " India is a federal union comprising twenty-eight states and how many union territories?",
    answer: "8",
   
    options: [
      "6",
      "7",
      "8",
      "9",
     ]
  },
  {
    id: 2,
    question: "Which of the following is the capital of Arunachal Pradesh?",
    answer: "Itanagar",
    options: [
      "Itanagar",
      "Dispur",
      "Imphal",
      "Panaji"
    ]
  },
  {
    id: 3,
    question: "What are the major languages spoken in Andhra Pradesh",
    answer: "Telugu and Urdu",
    options: [
      "Odia and Telugu",
      "Telugu and Urdu",
      "Telugu and Kannada",
      "All of the above languages"
    ]
  },
  {
    id: 4,
    question: "What is the state flower of Haryana",
    answer: "Lotus",
    options: [
      "Lotus",
      "Rhododendron",
      "Golden Shower",
      "Not declared"
    ]
  },
  {
    id: 5,
    question: "Which of the following states is not located in the North?",
    answer: "Jharkhand",
    options: [
      "Jharkhand",
      " Jammu and Kashmir",
      "Himachal Pradesh",
      "Haryana"
    ]
  },
  {
    id: 6,
    question: "In which of the following state, the main language is Khasi",
    answer: "Meghalaya",
    options: [
      "Nagaland",
      "Mizoram",
      "Meghalaya",
      "Haryana"
    ]
  },
  {
    id: 7,
    question: " Which is the largest coffee-producing state of India",
    answer: "Karnataka",
    options: [
      " Kerala",
      "Tamil Nadu",
      "Karnataka",
      "Arunachal Pradesh"
    ]
  },
  {
    id: 8,
    question: " Which is the largest coffee-producing state of India",
    answer: "Karnataka",
    options: [
      " Kerala",
      "Tamil Nadu",
      "Karnataka",
      "Arunachal Pradesh"
    ]
  },
  {
    id: 9,
    question: " Which state has the largest population?",
    answer: "Uttar Pradesh",
    options: [
      "Uttar Pradesh",
      "Maharastra",
      "Bihar",
      "Andra Pradesh"
    ]
   },
   {
    id: 10,
    question: "In what state is Elephant Falls located?",
    answer: "Meghalaya",
    options: [
      "Mizoram",
      "Orissa",
      "Manipur",
      "Meghalaya"
    ]
   },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
