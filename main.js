var trivia_title = document.getElementById("trivia_title");
var inputName = document.getElementById("inputName")

var title_text = "Trivia"
var title_count = 0



i_opacity = 0
setInterval(function(){
    if(i_opacity<10){
        trivia_title.setAttribute('style','font-size: '+i_opacity*100+'%')
        inputName.setAttribute('style','font-size: '+i_opacity*50+'%')
        i_opacity = i_opacity + 1
    }
},100);


// setInterval(function(){
//     if(i_opacity<1){
//         inputName.setAttribute('style','opacity: '+i_opacity)
//         inputName.setAttribute('style','box-shadow: 0 0 '+i_opacity*100+'px yellow;')
//         i_opacity = i_opacity + 0.05
//     }
//     else{
//         inputName.setAttribute('style','text-shadow: 0 0 75px #555555;')
//     }
// },100);
// first_section = document.getElementById("first_section")
// second_section = document.getElementById("second_section")

// Q05 = document.getElementById("Q05")
// Q10 = document.getElementById("Q10")
// Q15 = document.getElementById("Q15")

// document.getElementById("trivia_title")

function inputChange(e) {
   console.log(document.getElementById("inputName").value);
   var r = document.getElementById("inputName").value.length
   if(r>10){
        alert("Maximum name length is 10.")
        document.getElementById("inputName").value = document.getElementById("inputName").value.substring(0,10)
   }
  }

function clearA(){
    document.getElementById("inputName").value = ""
}
var user_name = "XX"

var score = 0
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}


function question(num){
    console.log(num)
    contentZ = document.getElementById("content-z")
    while (contentZ.firstChild) {
        contentZ.removeChild(contentZ.firstChild);
    }
    var aa = document.createElement('div');
    aa.setAttribute('id','content-zz')
    aa.setAttribute('style','width: 100%;');
    aa.setAttribute('style','text-align: left;');
    document.getElementById("content-z").appendChild(aa);
    var uName = document.createElement('h13');
    uName.setAttribute('style','font-size: 200%')
    uName.innerHTML = 'User : '+user_name
    document.getElementById("content-zz").appendChild(uName);
    document.getElementById("content-zz").appendChild(document.createElement('br'));
    var uName0 = document.createElement('h13');
    uName0.setAttribute('style','font-size: 150%')
    uName0.innerHTML = 'Score : '+score+' / '+num
    document.getElementById("content-zz").appendChild(uName0);
    document.getElementById("content-zz").appendChild(document.createElement('br'));
    var uName0 = document.createElement('h13');
    uName0.setAttribute('style','font-size: 100%')
    uName0.innerHTML = 'Remaining time : '
    document.getElementById("content-zz").appendChild(uName0);

    var uName0 = document.createElement('div');
    uName0.setAttribute('id','time')
    uName0.innerHTML = 'ii '
    document.getElementById("content-zz").appendChild(uName0);
    startTime();

}
function chooseNumQ(){
    console.log("P")
    var uName0 = document.createElement('h1');
    uName0.setAttribute('style','font-size: 200%')
    uName0.innerHTML = 'Welcome'
    document.getElementById("content-z").appendChild(uName0);
    var uName = document.createElement('h11');
    uName.setAttribute('style','font-size: 500%')
    uName.innerHTML = user_name
    document.getElementById("content-z").appendChild(uName);
    document.getElementById("content-z").appendChild(document.createElement('br'));
    var pls = document.createElement('h12');
    pls.setAttribute('style','font-size: 200%')
    pls.innerHTML = 'Please select the number of questions.'
    document.getElementById("content-z").appendChild(pls);
    document.getElementById("content-z").appendChild(document.createElement('br'));
    document.getElementById("content-z").appendChild(document.createElement('br'));
    var btn5 = document.createElement('button');
    btn5.setAttribute('style','font-size: 200%')
    btn5.setAttribute('onclick','question(5)')
    btn5.setAttribute('style','box-shadow: 0 0 20px yellow')
    btn5.innerHTML = '&nbsp;&nbsp;5 questions&nbsp;&nbsp;'
    document.getElementById("content-z").appendChild(btn5);
    document.getElementById("content-z").appendChild(document.createElement('br'));
    document.getElementById("content-z").appendChild(document.createElement('br'));
    var btn10 = document.createElement('button');
    btn10.setAttribute('style','font-size: 200%')
    btn10.setAttribute('onclick','question(10)')
    btn10.setAttribute('style','box-shadow: 0 0 20px yellow')
    btn10.innerHTML = '&nbsp;&nbsp;10 questions&nbsp;&nbsp;'
    document.getElementById("content-z").appendChild(btn10);
    document.getElementById("content-z").appendChild(document.createElement('br'));
    document.getElementById("content-z").appendChild(document.createElement('br'));
    var btn15 = document.createElement('button');
    btn15.setAttribute('style','font-size: 200%')
    btn15.setAttribute('onclick','question(15)')
    btn15.setAttribute('style','box-shadow: 0 0 20px yellow')
    btn15.innerHTML = '&nbsp;&nbsp;15 questions&nbsp;&nbsp;'
    document.getElementById("content-z").appendChild(btn15);
}
function confirmA(){
    if(document.getElementById("inputName").value.length>0){
        user_name = document.getElementById("inputName").value
        document.getElementById("head-z").remove()
        chooseNumQ()
    }
}







