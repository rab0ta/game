

let questions = [
  {
   "question" : "Kas programmeerimiskeeled on samad, mis arvutikeeled?",
    "ans": "dropBox1"
  },
  {
    "question" : "Kas Python on interpreteeritud programmeerimiskeel?",
     "ans": "dropBox2"
   },
   {
    "question" : "Kas for-tsükkel võimaldab koodibloki kordamist kindlaksmääratud arv kordi?",
     "ans": "dropBox2"
   },
   {
    "question" : "Kas JavaScript on sama mis Java?",
     "ans": "dropBox1"
   },
   {
    "question" : "Kas objektorienteeritud programmeerimiskeeltes kasutatakse objekte?",
     "ans": "dropBox2"
   },
   {
    "question" : "Kas C++ on alamhulk keelest C?",
     "ans": "dropBox1"
   },
   {
    "question" : "Kas CSS kasutatakse veebilehtede stiilide määratlemiseks?",
     "ans": "dropBox2"
   },
   {
    "question" : "Kas funktsionaalne programmeerimine rõhutab staatiliste meetodite kasutamist?",
     "ans": "dropBox1"
   },
   {
    "question" : "Kas SQL on keel andmebaaside haldamiseks ja päringute tegemiseks?",
     "ans": "dropBox2"
   },
   {
    "question" : "Kas Git on versioonihaldussüsteem?",
     "ans": "dropBox2"
   },
   {}
  ]
  function gameStart(){
    let button = document.getElementById("button")
    button.style = "display: none"
    questionsReper();
  }
  var score = 0;
  function checker(){
    score = 0;
    for(i = 0; i< questions.length; i++){
      let element = document.getElementById("animals" + i)
      var parent = element.parentNode;
      if (parent.id == questions[i].ans){
        element.style = "color: #3bed2b";
        score ++;
      }
      else{
        element.style = "color: #660303";
      }
    }
    let info = document.getElementById("score");
    info.innerHTML = "SCORE: " + score;
  }

  function reset(){
    location.reload();
  }

let trueanswers = 0
var counter = 0;
function questionsReper(){
    const newQuestion = document.createElement("h1");
    const parent = document.getElementById("questionZone");
    
    newQuestion.id = "animals" + counter //
    newQuestion.draggable = "true"; // Works
    newQuestion.ondragstart = function drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    }
   
    newQuestion.innerHTML = questions[counter].question
    parent.appendChild(newQuestion);
    counter++;
    if(counter == questions.length){
      let div = document.getElementById("questionZone");
      div.style = "display: none";
    }
}
function drop(event) {
  var data = event.dataTransfer.getData("text");
  var q = document.getElementById("animals" + (counter - 1))
  event.target.appendChild(document.getElementById(data));
  questionsReper();
  q.setAttribute("draggable", false)
}
function allowDrop(event) {
  event.preventDefault();
}