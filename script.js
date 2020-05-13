const qn = document.getElementById('qnTag');
const opts = document.getElementById('options');
const startBtn = document.getElementById('startBtn');

let qnsObj = {
  1: {
    qn: 'Inside which HTML element do we put the JavaScript?',
    ans: {
      opt1: '<js>',
      opt2: '<javascript>',
      opt3: '<script>',
      opt4: '<scripting>'
    }
  },
  2: {
    qn: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
    ans: {
      opt1: '#demo.innerHTML = "Hello World!";',
      opt2: 'document.getElementById("demo").innerHTML = "Hello World!";',
      opt3: 'document.getElement("p").innerHTML = "Hello World!";',
      opt4: 'document.getElementByName("p").innerHTML = "Hello World!";'
    }
  },
  3: {
    qn: 'Where is the correct place to insert a JavaScript?',
    ans: {
      opt1: 'The <head> section',
      opt2: 'The <body> section',
      opt3: 'Both the <head> section and the <body> section are correct',
      opt4: 'The <html> section'
    }
  },
  4: {
    qn: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    ans: {
      opt1: '<script name="xxx.js">',
      opt2: '<script href="xxx.js">',
      opt3: '<script src="xxx.js">',
      opt4: '<script alt="xxx.js">'
    }
  },
  5: {
    qn: 'How do you write "Hello World" in an alert box?',
    ans: {
      opt1: 'msgBox("Hello World");',
      opt2: 'alert("Hello World");',
      opt3: 'alertBox("Hello World");',
      opt4: 'msg("Hello World");'
    }
  }
};

startBtn.addEventListener("click", function() {
  for (const qn in qnsObj) {
    let randomNum = Math.floor(Math.random() * 4);
    let option =
    console.log(randomOpt);
  }
});
