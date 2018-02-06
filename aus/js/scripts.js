var d = new Date();
var mins = d.getMinutes() < 10 ? "0" + d.getMinutes(): d.getMinutes();
// set east coast time
var hours, ending;
if(d.getHours() > 12){
  hours = (d.getHours()-12);
  ending = "PM";
}else{
  hours = (d.getHours() == 0)? "12" : d.getHours();
  ending = "AM";
}

document.getElementById("top-time").innerHTML = hours + ":" + mins + ending;

var utc = d.getTime() + (d.getTimezoneOffset() * 36000000);
var d2 = new Date(utc + (3600000*14));
//set AUS time
var ausHours, ausEnding;
if(d2.getHours() > 12){
  ausHours = d2.getHours() - 12;
  ausEnding = "PM";
}else{
  ausHours = (d2.getHours() == 0)? "12" : d2.getHours();
  ausEnding = "AM";
}

document.getElementById("bottom-time").innerHTML = ausHours + ":" + mins + ausEnding;

// assuming I sleep between 1am and 8am
var text = (ausHours >= 1 && ausHours < 8 && ausEnding == "AM") ? "Eric is (probably) sleeping" : "Eric is (problably) awake";
document.getElementById("text-desc").innerHTML = text;
