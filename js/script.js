//Goes through all "post" <p> tags in the post and adds a <br> and .tab
//modifier to them (makes spacing look nice) 
var text = document.getElementsByClassName('post');
for(var i = 0; i < text.length; i++){
  var val = text[i].innerHTML.split("\n");
  val = val.slice(0, val.length -1);
  var newText = val.join("<br><br><span class='tab'>");
  text[i].innerHTML = newText;
}
