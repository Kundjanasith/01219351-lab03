// content = JSON.parse(JSON.stringify(questions));
// console.log(content.a)

nameWeb = document.getElementById("name_web")
nameWeb.innerText = "GAME NAME"

length_questions = 5
limit_questions = 15

first_section = document.getElementById("first_section")
second_section = document.getElementById("second_section")

for(i=1;i<=limit_questions;i++){
    if(i%length_questions==0){
        addSelectNumQuestion(i)
    }
}

function addSelectNumQuestion(i){
    var buttonQuestion = document.createElement('button');
    buttonQuestion.setAttribute('id','questionS'+i)
    buttonQuestion.setAttribute('onclick','selectNumQuestion('+i+')')
    buttonQuestion.innerHTML = i + "&nbsp;Questions"
    first_section.appendChild(buttonQuestion);
}

function selectNumQuestion(i){
    console.log(i)
    first_section.innerHTML = ""
    first_section.innerHTML = i + "&nbsp;Questions"
}