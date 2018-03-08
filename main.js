  console.log("Start . . . ");
//   $.getJSON('questions.json', function(json) {
//     console.log('pp' );
//   });
//   $.ajax({
//     url: 'questions.json',
//     dataType: 'json',
//     type: 'get',
//     cache: false,
//     success: function(data){
//         console.log(data);
//     }
//   });
var dataZ = ""
  $.getJSON('https://kundjanasith.github.io/01219351-lab03/data/questions.json',function(data){
    console.log('data',data)
    dataZ = data
  })
// var r = $.getJSON('https://kundjanasith.github.io/01219351-lab03/data/questions.json',function(data){})
// console.log(r)

  console.log("Finish . . . ");


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

var score = 1
// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
//   t = setTimeout(function() {
//     startTime()
//   }, 500);
// }
time_all = []
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  if(m>=0){
    document.getElementById('timer').innerHTML = m + ":" + s;
    if(m==0&&s==0){
        var sc = document.getElementById("quest").innerHTML.split(":")[1].split("/")[0] 
        sc = parseInt(sc)
        sc = sc + 1
        document.getElementById("c"+(sc-2)).setAttribute('class','circle_red');
        if(sc<=Qnum){
        document.getElementById("c"+(sc-2)).setAttribute('style','box-shadow: 0 0 0px yellow');
        document.getElementById("c"+(sc-1)).setAttribute('style','box-shadow: 0 0 20px yellow');
        document.getElementById("Q0").innerText = sc+') '+resQ[sc-1].Question
        document.getElementById("A1").innerText = resQ[sc-1].Answer1
        document.getElementById("A2").innerText = resQ[sc-1].Answer2
        document.getElementById("A3").innerText = resQ[sc-1].Answer3
        document.getElementById("A4").innerText = resQ[sc-1].Answer4
        document.getElementById("A1").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("A2").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("A3").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("A4").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("timer").innerHTML = 02 + ":" + 00;
        document.getElementById("quest").innerHTML = "Question : "+sc+" / "+Qnum+"&nbsp;&nbsp;&nbsp;&nbsp;"
        ss = (60-parseInt(0))
        mm = (1-parseInt(0))
        if(ss==60){
            ss = 0
            mm = mm + 1
        }
        time_all.push(mm + ":" + ss)
      }
      if(sc==Qnum+1){
        document.getElementById("rt").remove()
        document.getElementById("timer").remove()
        ss = (60-parseInt(0))
        mm = (1-parseInt(0))
        if(ss==60){
            ss = 0
            mm = mm + 1
        }
        time_all.push(mm + ":" + ss)
        document.getElementById("c"+(sc-2)).setAttribute('style','box-shadow: 0 0 0px yellow');
        var myNode = document.getElementById("content-z1");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        document.getElementById("content-z1").appendChild(document.createElement('br'));
        document.getElementById("content-z1").appendChild(document.createElement('br'));
        c_a = 0
        i_a = 0
        ti_m = 0
        ti_s = 0
        for(var i=0 ; i<time_all.length ; i++){
            var uName0 = document.createElement('button');
            // uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;');
            var c = document.getElementById("c"+i)
            console.log(c.className)
            console.log(Qnum)
            if(c.className=="circle_green"){
                c_a = c_a + 1
                uName0.innerHTML = "Quetion ("+(i+1)+") Correct answer | time : "
                uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px green; text-align: center; color: white;');
            }
            if(c.className=="circle_red"){
                i_a = i_a + 1
                uName0.innerHTML = "Quetion ("+(i+1)+") Incorrect answer | time : "
                uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px red; text-align: center; color: white;');
            }
            ti_m = ti_m + parseInt(time_all[i].split(":")[0])
            ti_s = ti_s + parseInt(time_all[i].split(":")[1])
            uName0.innerHTML = uName0.innerHTML + time_all[i]
            document.getElementById("content-z1").appendChild(uName0);
            document.getElementById("content-z1").appendChild(document.createElement('br'));
            document.getElementById("content-z1").appendChild(document.createElement('br'));
        }
        ty = (((ti_m)*60)+ti_s)/Qnum
        ti_ss = parseInt(ti_s)%60
        ti_m = parseInt(ti_m)+parseInt((parseInt(ti_s)/60))
        ty_s = parseInt(ty)%60
        ty_m = parseInt(parseInt(ty)/60)
        var uName0 = document.createElement('button');
        uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px white; text-align: center; color: white;');
        uName0.innerHTML = "Total questions : "+Qnum+"<br>Total correct answer : "+c_a+"<br>Total incorrect answer : "+i_a+"<br>Total time : "+ti_m+":"+ti_s+"<br>Average time spent for each question : "+ty_m+":"+ty_s
        document.getElementById("content-z1").appendChild(uName0);
      }
    }
    setTimeout(startTimer, 1000);
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function chooseA(x) {
    console.log(x)
    var c = document.getElementById('A'+x)
    console.log("PPP")
    console.log(c)
    c.setAttribute('style','background-color: white; width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: black;')
    all_p = [1,2,3,4]
    console.log(all_p)
    i = all_p.indexOf(x)
    all_p.splice(i, 1);
    console.log(all_p)
    for(var i = 0; i < all_p.length; i++){
        console.log(i)
        var aa = document.getElementById('A'+all_p[i])
        aa.setAttribute('style','background-color: black; width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
    }
}
var Qnum = 0
var resQ = []
function submitAns(){
    var sc = document.getElementById("quest").innerHTML.split(":")[1].split("/")[0] 
    sc = parseInt(sc)
    sc = sc + 1
    all_p = ["A1","A2","A3","A4"]
    A = "A"
    for(var t=0 ; t<all_p.length ; t++){
        var temp = document.getElementById(all_p[t])
        console.log(temp)
        if(temp.style.backgroundColor=="white"){
            A = "B"
            console.log(temp.innerHTML)
            if(temp.innerHTML==resQ[sc-2].Solution){
                document.getElementById("c"+(sc-2)).setAttribute('class','circle_green')
            }
            else{
                document.getElementById("c"+(sc-2)).setAttribute('class','circle_red')
            }
        }
    }
    if(A=="A") return
    var mm = document.getElementById("timer").innerHTML.split(":")[0]
    var ss = document.getElementById("timer").innerHTML.split(":")[1]
    if(sc<=Qnum){
        document.getElementById("c"+(sc-2)).setAttribute('style','box-shadow: 0 0 0px yellow');
        document.getElementById("c"+(sc-1)).setAttribute('style','box-shadow: 0 0 20px yellow');
        document.getElementById("Q0").innerHTML = sc+') '+resQ[sc-1].Question
        document.getElementById("A1").innerHTML = resQ[sc-1].Answer1
        document.getElementById("A2").innerHTML = resQ[sc-1].Answer2
        document.getElementById("A3").innerHTML = resQ[sc-1].Answer3
        document.getElementById("A4").innerHTML = resQ[sc-1].Answer4
        document.getElementById("A1").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("A2").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("A3").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("A4").setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;')
        document.getElementById("timer").innerHTML = 02 + ":" + 00;
        document.getElementById("quest").innerHTML = "Question : "+sc+" / "+Qnum+"&nbsp;&nbsp;&nbsp;&nbsp;"
        ss = (60-parseInt(ss))
        mm = (1-parseInt(mm))
        if(ss==60){
            ss = 0
            mm = mm + 1
        }
        time_all.push(mm + ":" + ss)
        console.log(time_all)
    }
    if(sc==Qnum+1){
        document.getElementById("rt").remove()
        document.getElementById("timer").remove()
        ss = (60-parseInt(ss))
        mm = (1-parseInt(mm))
        if(ss==60){
            ss = 0
            mm = mm + 1
        }
        time_all.push(mm + ":" + ss)
        document.getElementById("c"+(sc-2)).setAttribute('style','box-shadow: 0 0 0px yellow');
        var myNode = document.getElementById("content-z1");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        document.getElementById("content-z1").appendChild(document.createElement('br'));
        document.getElementById("content-z1").appendChild(document.createElement('br'));
        c_a = 0
        i_a = 0
        ti_m = 0
        ti_s = 0
        for(var i=0 ; i<time_all.length ; i++){
            var uName0 = document.createElement('button');
            // uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;');
            var c = document.getElementById("c"+i)
            console.log(c.className)
            console.log(Qnum)
            if(c.className=="circle_green"){
                c_a = c_a + 1
                uName0.innerHTML = "Quetion ("+(i+1)+") Correct answer | time : "
                uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px green; text-align: center; color: white;');
            }
            if(c.className=="circle_red"){
                i_a = i_a + 1
                uName0.innerHTML = "Quetion ("+(i+1)+") Incorrect answer | time : "
                uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px red; text-align: center; color: white;');
            }
            ti_m = ti_m + parseInt(time_all[i].split(":")[0])
            ti_s = ti_s + parseInt(time_all[i].split(":")[1])
            uName0.innerHTML = uName0.innerHTML + time_all[i]
            document.getElementById("content-z1").appendChild(uName0);
            document.getElementById("content-z1").appendChild(document.createElement('br'));
            document.getElementById("content-z1").appendChild(document.createElement('br'));
        }
        ty = (((ti_m)*60)+ti_s)/Qnum
        ti_ss = parseInt(ti_s)%60
        ti_m = parseInt(ti_m)+parseInt((parseInt(ti_s)/60))
        ty_s = parseInt(ty)%60
        ty_m = parseInt(parseInt(ty)/60)
        var uName0 = document.createElement('button');
        uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px white; text-align: center; color: white;');
        uName0.innerHTML = "Total questions : "+Qnum+"<br>Total correct answer : "+c_a+"<br>Total incorrect answer : "+i_a+"<br>Total time : "+ti_m+":"+ti_s+"<br>Average time spent for each question : "+ty_m+":"+ty_s
        document.getElementById("content-z1").appendChild(uName0);
    }
}

function question(num){
    Qnum = num
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
    uName0.setAttribute('id','quest');
    uName0.setAttribute('style','font-size: 150%')
    uName0.innerHTML = 'Question : '+score+' / '+num+'&nbsp;&nbsp;&nbsp;&nbsp;'
    document.getElementById("content-zz").appendChild(uName0);
    for( i=0 ; i<num ; i++){
        var uName0 = document.createElement('div');
        uName0.setAttribute('id','c'+i);
        uName0.setAttribute('class','circle_grey');
        document.getElementById("content-zz").appendChild(uName0);
    }
    document.getElementById('c0').setAttribute('style','box-shadow: 0 0 20px yellow;');
    document.getElementById("content-zz").appendChild(document.createElement('br'));
    var uName0 = document.createElement('h13');
    uName0.setAttribute('id','rt')
    uName0.setAttribute('style','font-size: 100%')
    uName0.innerHTML = 'Remaining time : '
    document.getElementById("content-zz").appendChild(uName0);
    var uName0 = document.createElement('h13');
    uName0.setAttribute('style','font-size: 100%')
    uName0.setAttribute('id','timer')
    uName0.innerHTML = 02 + ":" + 00;
    document.getElementById("content-zz").appendChild(uName0);
    startTimer();
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    //##########
    content = JSON.parse(JSON.stringify(questions));
    console.log(content)
    console.log(Object.keys(content).length)
    all_questions = []
    
    // console.log(num)
    // for(i  = 0; i < num; i++ ){
    //     console.log(i)
    //     inn = 1 * Object. keys(content).length - 1
    //     // inn = (Math.random()*(10))
    //     Object.keys(content).length
    //     all_questions.push(content["Q"+inn])
    //     delete content["Q"+inn]
    // }
    // console.log(all_questions)

    for(i  = 0; i <= Object.keys(content).length; i++ ){
        all_questions.push(content["Q"+i])
    }
    
    console.log("ALL")
    console.log(all_questions[15])
    for(i = 0; i< num; i++){
        inn = ( (Math.random()) * (all_questions.length-1) ) + 1
        inn = parseInt(inn)
        resQ.push(all_questions[inn])
        all_questions.splice(inn,1)
    }
    console.log(resQ)
    
    var uName0 = document.createElement('button');
    uName0.setAttribute('id','Q0');
    uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px white; text-align: text;');
    // uName0.disabled = true;
    uName0.innerHTML = '1) '+resQ[0].Question
    document.getElementById("content-z1").appendChild(uName0);
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    var uName0 = document.createElement('button');
    uName0.setAttribute('id','A1');
    uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;');
    uName0.setAttribute('onclick','chooseA(1)');
    uName0.innerHTML = resQ[0].Answer1
    document.getElementById("content-z1").appendChild(uName0);
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    var uName0 = document.createElement('button');
    uName0.setAttribute('id','A2');
    uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;');
    uName0.setAttribute('onclick','chooseA(2)');
    uName0.innerHTML = resQ[0].Answer2
    document.getElementById("content-z1").appendChild(uName0);
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    var uName0 = document.createElement('button');
    uName0.setAttribute('id','A3');
    uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;');
    uName0.setAttribute('onclick','chooseA(3)');
    uName0.innerHTML = resQ[0].Answer3
    document.getElementById("content-z1").appendChild(uName0);
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    var uName0 = document.createElement('button');
    uName0.setAttribute('id','A4');
    uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px yellow; text-align: center; color: white;');
    uName0.setAttribute('onclick','chooseA(4)');
    uName0.innerHTML = resQ[0].Answer4
    document.getElementById("content-z1").appendChild(uName0);
    // button 
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    document.getElementById("content-z1").appendChild(document.createElement('br'));
    var uName0 = document.createElement('button');
    uName0.setAttribute('id','submit');
    uName0.setAttribute('style','width: 100%; box-shadow: 0 0 20px blue; text-align: center; color: white;');
    uName0.setAttribute('onclick','submitAns()');
    uName0.innerHTML = 'Submit'
    document.getElementById("content-z1").appendChild(uName0);
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







