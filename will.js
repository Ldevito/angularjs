



var delay=2000; //700 = 1 second

setTimeout(function() {
var a = responsiveVoice.speak("Hi Louis, What can I help you prepare");
var sayName = document.getElementById('prompt');
sayName.textContent = 'Say "You can help me prepare a"';
}, delay);


function clientName(){
    var a = responsiveVoice.speak("What is your Clients Name");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Clients name is"';
}

function cityName(){
    var a = responsiveVoice.speak("What city does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Clients city is"';
}
function countyName(){
    var a = responsiveVoice.speak("What county does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Clients county is"';
}
function clientMarried()
{
    var a = responsiveVoice.speak("Is your client married");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Yes or No"';
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

    'You can help me prepare a Will *val': function(val) {
     var Second = val;
     clientName();
},
    'Clients Name is *val': function(val) {
    var Second = val;
    setTest = document.getElementsByClassName("Name");
    for(var i = 0; i < x.length; i++){
    setTest[i].innerText = Second;
    }
    cityName();
},
    'Clients city is *val': function(val) {
     var cityName = val;
     setTest = document.getElementsByClassName("cityName");
     for(var i = 0; i < x.length; i++){
     setTest[i].innerText = cityName;
   }
    countyName();
},
    'Clients county is *val': function(val) {
     var countyName = val;
     setTest = document.getElementsByClassName("countyName");
     clientMarried();
     for(var i = 0; i < x.length; i++){
     setTest[i].innerText = countyName;
}
}
    };

    // Use addCommands API to add commands to annyang
    annyang.addCommands(commands);
    // Start listening. You call this right here or do it later on some event like button click
    annyang.start();
    }
