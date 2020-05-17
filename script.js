
const title = document.getElementById('title');
const qnTag = document.getElementById('qnTag');
const opts = document.getElementById('options');
const startBtn = document.getElementById('startBtn');
const mins = document.getElementById('minutes');
const secs = document.getElementById('seconds');


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
      opt1: '<script name="xxx.js">',
      opt2: '<script href="xxx.js">',
      opt3: '<script src="xxx.js">',
      opt4: '<script alt="xxx.js">'
    },
     correct: 'opt3',
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

let currentIndex = 0;

startBtn.addEventListener("click", function() {

  startBtn.innerText = 'Siguiente';
  opts.className = 'mb-12';

  let optsChild = opts.childNodes;
  if (opts.childNodes )
  optsChild
  opts.removeChild();

  let currentEl = qunsArr[currentIndex];

  let question = currentEl.qn;

  qnTag.innerText = question;

  let answers = currentEl.ans;

  for ( const opt in answers )  {
    let ansBtn = document.createElement('button');
    ansBtn.className = 'block text-indigo-100 rounded-full bg-indigo-800 px-2 py-2 text-sm font-bold mx-3 mb-3';
    ansBtn.innerText = answers[opt];
    opts.appendChild(ansBtn);
  }

  currentIndex++;
});



