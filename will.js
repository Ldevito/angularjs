
var delay=2000; //700 = 1 second

setTimeout(function() {
var a = responsiveVoice.speak("What is you Clients Name");
var sayName = document.getElementById('prompt');
sayName.textContent = "Say Clients Name is";
}, delay);

function cityName(){
    var a = responsiveVoice.speak("What city does client live in");
}
function countyName(){
    var a = responsiveVoice.speak("What county does client live in");
}
function child1Name()
{
    var a = responsiveVoice.speak("What is you childs name");
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
    'Clients name is *val': function(val) {
    var Second = val;
    setTest = document.getElementsByClassName("Name");
    for(var i = 0; i < x.length; i++){
    setTest[i].innerText = Second;
    }
    cityName();
},
    'Client lives in *val': function(val) {
     var cityName = val;
     countyName();
     setTest = document.getElementsByClassName("cityName");
     for(var i = 0; i < x.length; i++){
     setTest[i].innerText = cityName;
   }

},
    'Clients county is *val': function(val) {
     var countyName = val;
     setTest = document.getElementsByClassName("countyName");
     child1Name();
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
