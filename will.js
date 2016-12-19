

var response = "None"
var wifeName = "Name"
var delay=2000; //700 = 1 second
var rand = Math.floor(Math.random() * 4);
setTimeout(function() {
  window.alert(rand);
  switch(rand){
  case 1:
  var a = responsiveVoice.speak("Hi Louis, What can I help you prepare");
  break;
  case 2:
  var a = responsiveVoice.speak("Hello Louis, What can I help you with today");
  break;
  case 3:
  var a = responsiveVoice.speak("Good Afternoon Louis, how can I assist you");
  break;
  default:
  var a = responsiveVoice.speak("Greetings Louis, how can I be of service");
  }
var sayName = document.getElementById('prompt');
sayName.textContent = 'Say "Prepare Simple Will"';
}, delay);


function fclientName(){

    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Clients name is"';
}

function fcityName(){
    var a = responsiveVoice.speak("What city does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "City is"';
}

function fcountyName(){
    var a = responsiveVoice.speak("What county does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "County is"';
}

function fclientMarried()
{
    var a = responsiveVoice.speak("Is your client married");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Yes or No"';
    response = "CM";
}

function fwifeName()
{
    var a = responsiveVoice.speak("What is wifes name");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Wife name is"';
}

function sweetHeart()
{
    var a = responsiveVoice.speak("Is this a sweetheart will");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Yes or No"';
    response = "SH";
}

function endPrep()
{
  var a = responsiveVoice.speak("Louis, this completes the Will preparation");
  var a = responsiveVoice.speak("I am glad to have been of service");
  var ele = document. getElementById('prompt');
  ele.style.display = "none";
}

function myFunction(){
x=document.getElementsByClassName("Name");  // Find the elements
for(var i = 0; i < x.length; i++){
x[i].innerText="Name";    // Change the content
}
}
myFunction();

     // check if speech recognition is supported
    if (annyang) {
    // Define your commands
    var commands = {
    //  'My name is *val': function(val) { var first = val;
    //  var setFirst = document.getElementById('firstName');
    //  setFirst.textContent = first;
    //  speak();
//},

    'Prepare *val': function(val) {
     var Second = val;
     fclientName();
},
    'Clients Name is *val': function(val) {
      fcityName();
      var Second = val;
      setTest = document.getElementsByClassName("Name");
      for(var i = 0; i < x.length; i++){
        setTest[i].innerText = Second;
    }

},

    'City is *val': function(val) {
      fcountyName();
      var vcityName = val;
      setCityName = document.getElementsByClassName("cityName");
      for(var i = 0; i < x.length; i++){
        setCityName[i].innerText = vcityName;
     }

},

    'County is *val': function(val) {
       fclientMarried();
       var countyName = val;
       setTest = document.getElementsByClassName("countyName");
       for(var i = 0; i < x.length; i++){
         setTest[i].innerText = countyName;

}

},
    'Yes': function(val) {
      if (response == "CM"){
      fwifeName();
    }
    else if (response == "SH"){
      endPrep();
      setTest = document.getElementsByClassName("wifeName");
      for(var i = 0; i < x.length; i++){
        setTest[i].innerText = wifeName;
      }
    }
},

    'Wife name is *val': function(val){
      sweetHeart();
      wifeName = val;

    },

    'No': function(val) {
        fwifeName();

}

    };

    // Use addCommands API to add commands to annyang
    annyang.addCommands(commands);
    // Start listening. You call this right here or do it later on some event like button click
    annyang.start();
    }
