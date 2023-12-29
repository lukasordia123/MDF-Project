let displayQuestion = document.querySelector(".question");
let nextQuestion = document.querySelector(".nextQuestion");
let answersBox = document.querySelector(".answers-box");
let scoreDisplay = document.querySelector(".score");
let currentQUestion = 0;
let score = 0;
let quizBox = document.querySelector(".box");
var resetBtn = document.createElement("button");
let finalSC = document.createElement("h1");
//questions

let questions = [
  {
    question: "1:რა არის მედია წიგნიერება?",
    answers: [
      {
        value: "შესაძლებლობა, რომ გამოვიყენოთ სოციალური მედია.",
        correct: false,
      },
      {
        value: "მედიის მესიჯების კრიტიკული ანალიზისა და შეფასების უნარი.",
        correct: true,
      },
      {
        value: "შესაძლებლობა, რომ ჩამოვაყალიბოთ ვირუსული კონტენტი.",
        correct: false,
      },
      {
        value: "შესაძლებლობა, რომ ვუყოროთ ტელევიზორს დიდხანს.",
        correct: false,
      },
    ],
  },
  {
    question: "2:რა არ არის დეზინფომარაცია?",

    answers: [
      {
        value: "ზუსტი და სანდო ინფორმაცია.",
        correct: true,
      },
      {
        value: "მოტყუების მიზნით გავრცელებული ინფომრაცია.",
        correct: false,
      },
      {
        value: "საინფორმაციო სტატიები წყაროების გარეშე.",
        correct: false,
      },
      {
        value: "ჭორები ცნობილ ადამიანებზე.",
        correct: false,
      },
    ],
  },
  {
    question:
      "3:რომელი სოციალური მედიის პრათფორმა ასოცირდება ხშირად დეზინფორმაციის სწრაფ გავრცელებასთან?",

    answers: [
      {
        value: "Linkedin",
        correct: false,
      },
      {
        value: "X",
        correct: true,
      },
      {
        value: "youtube",
        correct: false,
      },
      {
        value: "ყველა ზემოთ ხსენებული.",
        correct: false,
      },
    ],
  },
  {
    question:
      "4:მედია წიგნიერება არის მხოლოდ ტრადიციული მედიის შემეცნება, როგორიცაა  გაზეთები და ტელევიზია.",

    answers: [
      {
        value: `სიცურეა`,
        correct: true,
      },
      {
        value: `ჭეშმარიტია`,
        correct: false,
      },
    ],
  },
  {
    question:
      "5:Deepfakes არის მანიპულირებული ვიდეო ან ფოტოები, რომლებიც შექმნილია მაყურებლის მოსატყუებლად.",

    answers: [
      {
        value: "სიცრუეა",
        correct: false,
      },

      {
        value: "ჭეშმარიტია",
        correct: true,
      },
    ],
  },
  {
    question: "6:ფაქტების შემოწმება მედია წიგნიერების არსებითი უნარია.",

    answers: [
      {
        value: "სიცრუეა",
        correct: false,
      },

      {
        value: "ჭეშმარიტია",
        correct: true,
      },
    ],
  },
  {
    question: "7:სატირული საინფორმაციო ვებგვერდები ინფორმაციის სანდო წყაროა.",

    answers: [
      {
        value: "სიცრუე",
        correct: true,
      },

      {
        value: "ჭეშმარიტია",
        correct: false,
      },
    ],
  },

  {
    question: "8:დეზინფორმაცია ყოველთვის მიზან მიმართული და მავნეა.",

    answers: [
      {
        value: "სიცრუე",
        correct: true,
      },

      {
        value: "ჭეშმარიტია",
        correct: false,
      },
    ],
  },
  {
    question: '9:შეუსაბამე შესატყვისი სიტყვას "Clickbait".',

    answers: [
      {
        value: "მანიპულირებული ვიდეო ან სურათები",
        correct: false,
      },

      {
        value: "სენსაციური სათაურები დაწკაპუნების მოსაზიდად.",
        correct: true,
      },
      {
        value: "მედია მესიჯების ანალიზისა და შეფასების უნარი.",
        correct: false,
      },
      {
        value: "ცრუ ინფორმაციის განზრახ გავრცელება",
        correct: false,
      },
    ],
  },

  {
    question: "10:შეუსაბამე შესატყვისი სიტყვას:Deepfake",

    answers: [
      {
        value: "მანიპულირებული ვიდეო ან სურათები",
        correct: true,
      },

      {
        value: "სენსაციური სათაურები დაწკაპუნების მოსაზიდად",
        correct: false,
      },
      {
        value: "მედია მესიჯების ანალიზისა და შეფასების უნარი",
        correct: false,
      },
      {
        value: "ცრუ ინფორმაციის განზრახ გავრცელება",
        correct: false,
      },
    ],
  },
  {
    question: '11:შეუსაბამე შესატყვისი სიტყვას "მედია წიგნიერება".',

    answers: [
      {
        value: "მანიპულირებული ვიდეო ან სურათები",
        correct: false,
      },

      {
        value: "სენსაციური სათაურები დაწკაპუნების მოსაზიდად",
        correct: false,
      },
      {
        value: "მედია მესიჯების ანალიზისა და შეფასების უნარი",
        correct: true,
      },
      {
        value: "ცრუ ინფორმაციის განზრახ გავრცელება",
        correct: false,
      },
    ],
  },
  {
    question:
      "12:რა არის ტერმინი ცრუ ინფორმაციის განზრახ გავრცელებაზე, რათა ზიანი მიაყენოს ადამიანს, ჯგუფს ან ქვეყანას?",

    answers: [
      {
        value: "დეზინფორმაცია",
        correct: false,
      },

      {
        value: "Clickbate",
        correct: false,
      },
      {
        value: "პროპაგანდა",
        correct: true,
      },
      {
        value: "სატირა",
        correct: false,
      },
    ],
  },
  {
    question:
      "13:ჩამოთვლილთაგან რომელია ახალი ამბებისა და ინფორმაციის სანდო წყაროს მაგალითი?",

    answers: [
      {
        value: "ბლოგინს პოსტი ავტორის გარეშე.",
        correct: false,
      },

      {
        value: "სტატია ცნობილი და პატივცემული ორგანიზაციისა.",
        correct: true,
      },
      {
        value: "სენსაციური სათაურით ტვიტი.",
        correct: false,
      },
      {
        value: "პოსტი ანონიმური ფორუმიდან.",
        correct: false,
      },
    ],
  },
  {
    question: "14:რა როლს ასრულებენ ფაქტების შემმოწმებელი ორგანიზაციები მედია წიგნიერებაში?",

    answers: [
      {
        value: "ყალბი ამბების შექმნა.",
        correct: false,
      },

      {
        value: "ინფორმაციის სიზუსტის შემოწმება.",
        correct: true,
      },
      {
        value: "მიკერძებული მოსაზრების ხელშეწყობა,",
        correct: false,
      },
      {
        value: "დაწკაპუნების სათაურების გენერირება",
        correct: false,
      },
    ],
  },
  {
    question: "15:რა არის ტერმინი ემოციურად დატვირთული ენის გამოყენების პრაქტიკაში ინფორმაციის ნაწილზე აუდიტორიის პასუხის მანიპულირებისათვის?",

    answers: [
      {
        value: "დადასტურების მიკერძოება",
        correct: false,
      },

      {
        value: "სენსაციალიზმი",
        correct: true,
      },
      {
        value: "Clickbate",
        correct: false,
      },
      {
        value: "Deepfake",
        correct: false,
      },
    ],
  },
  {
    question: "16:როგორ შეუძლიათ ინდივიდებს თავი აარიდონ Clickbate -ის სათაურების მსხვერპლად ყოფნას?",

    answers: [
      {
        value: "გააზიარეთ სტატია ერთი შეხედვით.",
        correct: false,
      },

      {
        value: "გაზიარებამდე ინფორმაციის გადამოწმება",
        correct: true,
      },
      {
        value: "დაუჯერეთ სათაურს, თუ ის ემთხვევა პირად შეხედულებებს.",
        correct: false,
      },
      {
        value: "საერთოდ მოერიდეთ სოციალურ მედიას.",
        correct: false,
      },
    ],
  },
  {
    question: "17:რა არის ტერმინი ფენომენისთვის,როდესაც ინდივიდები ექვემდებარებიან მხოლოდ ინფორმაციას,რომელიც შეესაბამება მათ არსებულ შეხედულებებს და აძლიერებთ მათ მოსაზრებებს?",

    answers: [
      {
        value: "დადასტურების მიკერძოება.",
        correct: false,
      },

      {
        value: "ცენზურა",
        correct: false,
      },
      {
        value: "ექო პალატა",
        correct: true,
      },
      {
        value: "მედია წიგნიერება",
        correct: false,
      },
    ],
  },
  {
    question: "18:ჩამოთვლილთაგან რომელია გავრცელებული დეზინფორმაციის პოტენციური შედეგი.",

    answers: [
      {
        value: "საზოგადოების ცნობიერების ამაღლება.",
        correct: false,
      },

      {
        value: "გამუმჯობესებული ციფრული წიგნიერება.",
        correct: false,
      },
      {
        value: "მედიისა და ინსტიტუტების მიმართ ნდობის დარღვევა.",
        correct: false,
      },
      {
        value: "ყველა ზემოთ ხსენებული.",
        correct: true,
      },
    ],
  },
  {
    question: "19:რა არის მედია წიგნიერების განათლების უპირველესი მიზანი?",

    answers: [
      {
        value: "ინფორმაციის ცენზურის ხელშეწყობა.",
        correct: false,
      },

      {
        value: "კრიტიკული აზროვნების უნარის გამომუშავება,მედია მესიჯების ანალიზისათვის.",
        correct: true,
      },
      {
        value: "ახალი ამბების წყაროების წახალისება.",
        correct: false,
      },
      {
        value: "არცერთი ზემოთ ხსენებული.",
        correct: false,
      },
    ],
  },
  {
    question: "20:რა არის კოორდინირებული არავთენტური ქცევა?",

    answers: [
      {
        value: "რამდენიმე გვერდის, ჯგუფის და ანგარიშის ერთობლივად მუშაობა,მათი ვინაობის და საქმიანობის შესახებ საზოგადოების შეცდომაში შესაყვანად",
        correct: true,
      },

      {
        value: "შეთანხმებული ქცევა, რათა საზოგადოებას უბიძგონ ცრუ ინფორმაციის გავრცელებისაკენ.",
        correct: false,
      },
      {
        value: "საზოგადოებისათვის საზიანო დაჯგუფება რომელიც, შეთანხმებულად ავრცელებს დეზინფორმაციას პოლიტიკის შესახებ.",
        correct: false,
      },
      {
        value: "ყველა ზემოთ ხსენებული",
        correct: false,
      },
    ],
  },
];

//function get Answers
function getAnswers(currentQUestion) {
  //kada dodje do kraja pitanja
  if (currentQUestion >= questions.length) {
    currentQUestion = 0;
    console.log(currentQUestion);
    displayQuestion.remove();
    finalSC.innerText = ` Final score:${score}`;
    finalSC.classList.add("question");
    quizBox.append(finalSC);
    nextQuestion.remove();
    answersBox.remove();
    scoreDisplay.remove();

    resetBtn.innerText = "One more time?";
    resetBtn.classList.add("resetBtn");
    document.querySelector(".box").append(resetBtn);
  }

  removeLastQuestion();
  displayQuestion.innerText = questions[currentQUestion].question;
  questions[currentQUestion].answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.classList.add("answer");
    if (answer.correct) {
      btn.classList.add("true");
    }
    btn.innerText = answer.value;
    answersBox.appendChild(btn);
    btn.onclick = checkCorrectAnswer;
  });
}

//fucntion remove Last Question
function removeLastQuestion() {
  while (answersBox.firstChild) {
    answersBox.removeChild(answersBox.lastChild);
  }
}

//cheking corect Anaswer
function checkCorrectAnswer(e) {
  let ans = document.querySelectorAll(".answer");

  if (e.target.matches(".answer")) {
    ans.forEach((ans) => ans.classList.remove("orange"));
    this.classList.add("orange");
  } else {
  }
  if (e.target.matches(".true")) {
    score += 1;
  } else {
    score -= 1;
  }
}

//nextQUestion btn
nextQuestion.addEventListener("click", () => {
  console.log(score);
  nextQuestion.innerText = "Next Qustion";
  getAnswers(currentQUestion);
  currentQUestion += 1;
});

resetBtn.addEventListener("click", () => {
  score = 0;
  currentQUestion = 0;
  finalSC.remove();
  resetBtn.remove();
  scoreDisplay.style.display = "flex";
  scoreDisplay.innerText = score;
  quizBox.append(displayQuestion);
  quizBox.append(answersBox);
  quizBox.append(nextQuestion);
});
if (
  scoreDisplay.value == "Final score:1" ||
  scoreDisplay.value == "Final score:2" ||
  scoreDisplay.value == "Final score:4" ||
  scoreDisplay.value == "Final score:3"
) {
  let img = (document.querySelector("#characterImg").style.display = "flex");
}
