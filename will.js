



var delay=2000; //700 = 1 second

setTimeout(function() {
var a = responsiveVoice.speak("Hi Louis, What can I help you prepare");
var sayName = document.getElementById('prompt');
sayName.textContent = 'Say "Prepare Simple Will"';
}, delay);


function clientName(){
    var a = responsiveVoice.speak("What is your Clients Name");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Client name is"';
}

function cityName(){
    var a = responsiveVoice.speak("What city does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Client city is"';
}

function countyName(){
    var a = responsiveVoice.speak("What county does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Client county is"';
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

    'Prepare *val': function(val) {
     var Second = val;
     clientName();
},
    'Client Name is *val': function(val) {
    var Second = val;
    setTest = document.getElementsByClassName("Name");
    for(var i = 0; i < x.length; i++){
    setTest[i].innerText = Second;
    }
    cityName();
},
    'Client City is *val': function(val) {
     var countyName = val;
     setTest = document.getElementsByClassName("cityName");
     clientMarried();
     for(var i = 0; i < x.length; i++){
     setTest[i].innerText = cityName;
}

}
    };

    // Use addCommands API to add commands to annyang
    annyang.addCommands(commands);
    // Start listening. You call this right here or do it later on some event like button click
    annyang.start();
    }
