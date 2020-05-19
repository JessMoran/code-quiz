//Global variables
const title = document.getElementById('title');
const sectionCont = document.getElementById('sectionCont');
const qnTag = document.getElementById('qnTag');
const optsCont = document.getElementById('optionsCont');
const startBtn = document.getElementById('startBtn');
const submitCont = document.getElementById('submitCont');
const validationCont = document.getElementById('validationCont');
const secs = document.getElementById('seconds');
let currentIndex = 0;
let currentEl;
let score = 0;
let initials = '';
let secondsLeft = 60;
let timeInterval;

//Set Timer
function setTime() {
   timeInterval = setInterval(function () {
    secondsLeft--;
    secs.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      cleanArea();
      displaySubmit();
      title.innerText = 'Good try!';

      return secondsLeft;
    }

  }, 1000);
}

//Data
let qunsArr = [
  {
    qn: 'Inside which HTML element do we put the JavaScript?',
    ans: {
      opt1: '<js>',
      opt2: '<javascript>',
      opt3: '<script>',
      opt4: '<scripting>'
    },
    correct: 'opt3',
  },
  {
    qn: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
    ans: {
      opt1: '#demo.innerHTML = "Hello World!";',
      opt2: 'document.getElementById("demo").innerHTML = "Hello World!";',
      opt3: 'document.getElement("p").innerHTML = "Hello World!";',
      opt4: 'document.getElementByName("p").innerHTML = "Hello World!";'
    },
    correct: 'opt2',
  },
  {
    qn: 'Where is the correct place to insert a JavaScript?',
    ans: {
      opt1: 'The <head> section',
      opt2: 'The <body> section',
      opt3: 'Both the <head> section and the <body> section are correct',
      opt4: 'The <html> section'
    },
    correct: 'opt3',
  },
  {
    qn: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    ans: {
      opt1: '<script src="xxx.js">',
      opt2: '<script href="xxx.js">',
      opt3: '<script name="xxx.js">',
      opt4: '<script alt="xxx.js">'
    },
    correct: 'opt1',
  },
  {
    qn: 'How do you write "Hello World" in an alert box?',
    ans: {
      opt1: 'msgBox("Hello World");',
      opt2: 'alert("Hello World");',
      opt3: 'alertBox("Hello World");',
      opt4: 'msg("Hello World");'
    },
    correct: 'opt2'
  }
];

function cleanArea (){
  //Clear parent questions div
  while (optsCont.firstChild) {
    optsCont.removeChild(optsCont.firstChild);
  }

  //Clear parent result display
  while (validationCont.firstChild) {
    validationCont.removeChild(validationCont.firstChild);
  }
}

//Run the function after click
startBtn.addEventListener("click", function () {

  //Set timer first time
  if (currentIndex === 0) {
    //Call timer function
    setTime();
  }

  cleanArea();

  //Runs in the last question
  if (currentIndex === qunsArr.length) {
    clearInterval(timeInterval);
    displaySubmit();
    return;
  }

  //Reassignment the currentEl value according to the index's array
  currentEl = qunsArr[currentIndex];

  //Set variable with the current answer' object  and change the qnTag text
  let question = currentEl.qn;
  qnTag.innerText = question;

  //Set variable with the current answer' object
  let answers = currentEl.ans;

  //Loop the answers object and gets the options
  for (const opt in answers) {
    //Create elements
    let ansBtn = document.createElement('button');

    //Set attributes
    ansBtn.className = 'focus:outline-none bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full block text-left my-3';
    ansBtn.setAttribute('value', opt);

    //Change text
    ansBtn.innerText = answers[opt];
    startBtn.innerText = 'Siguiente';

    //Append children
    optsCont.appendChild(ansBtn);
  }

  //Increment current index +1
  currentIndex++;
});

//Validate answers
//if tha value is the sames as the correct answer it shows an icon and text
optsCont.addEventListener('click', function (e) {
  if (e.target.value === currentEl.correct) {
    //Create elements
    let correctIcon = document.createElement('i');
    let correctText = document.createElement('span');

    //Set classes
    correctIcon.className = 'fas fa-check text-indigo-500';
    correctText.className = 'text-indigo-800';
    validationCont.className = 'my-5';

    //Change text
    correctText.innerText = ' Correct';

    //Append children
    validationCont.appendChild(correctIcon);
    validationCont.appendChild(correctText);

    //Increments score by one
    score++;
  } else { // if tha value is not the same as the correct answer it shows an icon and text
    //
    secondsLeft -= 10;

    //Create elements
    let incorrectIcon = document.createElement('i');
    let incorrectText = document.createElement('span');

    //Set classes
    incorrectIcon.className = 'fas fa-times text-indigo-500';
    incorrectText.className = 'text-indigo-800';
    validationCont.className = 'my-5';

    //Change text
    incorrectText.innerText = ' Wrong';

    //Append Children
    validationCont.appendChild(incorrectIcon);
    validationCont.appendChild(incorrectText);
  }
});

//Show submit view
function displaySubmit() {
  //Create elements
  let inputInitials = document.createElement('input');
  let submitBtn = document.createElement('button');

  //Set classes and attributes
  inputInitials.setAttribute('placeholder', 'Enter initials');
  inputInitials.className = 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal';
  submitBtn.className = 'focus:outline-none bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full block text-left my-3';
  startBtn.className = 'hidden';
  submitCont.className = 'col-start-2 text-center mt-8';
  submitBtn.id = 'submitBtn';

  //Change text
  qnTag.innerText = 'Your final Score is: ' + score;
  title.innerText = 'All done!';
  submitBtn.innerText = 'Submit';

  //Append children
  sectionCont.appendChild(inputInitials);
  submitCont.appendChild(submitBtn);

  //Gets input value
  inputInitials.addEventListener("keyup", function () {
    initials = inputInitials.value.toUpperCase();
  });

  //Save
  submitBtn.addEventListener("click", function () {
    //Call saveData function
    saveData();

    //Create elements
    let clearBtn = document.createElement('button');

    //Change text
    title.innerText = 'Highscores';
    submitBtn.innerText = 'Try again';
    clearBtn.className = 'focus:outline-none bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white p-2 border border-indigo-500 hover:border-transparent rounded-full my-3 ml-3';

    //Append children
    submitCont.appendChild(clearBtn);

    //Gets players array and parse into a JSON
    let playersArr = JSON.parse(localStorage.getItem('players'));

    //
    playersArr.forEach(player => {
      //Create elements
      let highscoreDiv = document.createElement('div');
      let namePharagraph = document.createElement('span');
      let scoreParagraph = document.createElement('span');

      //Set classes and attributes
      highscoreDiv.className = 'bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 mt-10 text-left';
      namePharagraph.className = 'font-bold mr-5';
      qnTag.className = 'hidden';
      inputInitials.className = 'hidden';
      submitCont.className = 'col-start-2 flex mt-8 mx-auto';

      namePharagraph.innerText = player.initials;
      scoreParagraph.innerText = player.score;
      clearBtn.innerText = 'Clear Scores';

      //Append children
      sectionCont.appendChild(highscoreDiv);
      highscoreDiv.appendChild(namePharagraph);
      highscoreDiv.appendChild(scoreParagraph);
    });

    clearBtn.addEventListener('click', function () {
      //Clear Players Score after press clear button
      while (sectionCont.firstChild) {
        sectionCont.removeChild(sectionCont.firstChild);
      }

      localStorage.clear();
    })
  });
}

function saveData() {
  //Set variable
  let players;

  //Set object
  let player = {
    initials: initials,
    score: score,
  };

  //Creates new array and save the first player
  if (localStorage.getItem('players') === null) {
    players = [];
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
  } else { //If the array exist just push the new player's object
    players = JSON.parse(localStorage.getItem('players'));
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
  }
}
