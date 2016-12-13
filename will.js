



var delay=2000; //700 = 1 second

setTimeout(function() {
var a = responsiveVoice.speak("Hi Louis, What can I help you prepare");
var sayName = document.getElementById('prompt');
sayName.textContent = 'Say "Prepare Simple Will"';
}, delay);


function fclientName(){
    var a = responsiveVoice.speak("What is your Clients Name");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "Clients name is"';
}

function fcityName(){
    var a = responsiveVoice.speak("What city does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "City is"';
}

function fcountyName(){
    window.alert("this sucks big time");
    var a = responsiveVoice.speak("What county does client live in");
    var sayName = document.getElementById('prompt');
    sayName.textContent = 'Say "County is"';
}

function fclientMarried()
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
     fclientName();
},
    'Clients Name is *val': function(val) {
    var Second = val;
    setTest = document.getElementsByClassName("Name");
    for(var i = 0; i < x.length; i++){
    setTest[i].innerText = Second;
    }
    fcityName();
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
     var countyName = val;
     setTest = document.getElementsByClassName("countyName");
     for(var i = 0; i < x.length; i++){
     setTest[i].innerText = countyName;
     fclientMarried();
}

}
    };

    // Use addCommands API to add commands to annyang
    annyang.addCommands(commands);
    // Start listening. You call this right here or do it later on some event like button click
    annyang.start();
    }
