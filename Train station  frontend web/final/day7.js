document.getElementById("change").innerHTML = "ana etghairt";
const x = document.getElementById("id1");
const y = document.getElementsByTagName("p");
document.getElementById("id2").innerHTML = "the first paragraph (index 0) inside 'id1' is:" + y[1].innerHTML;


function validationform() {let x = document.forms["form1"]["fname"].value;
                          if (x =="") {alert("name id missing");
                                      return false;}}

function myMove() {
  let id = null;
  const elem = document.getElementById("animate1");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame,50);

    
function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}