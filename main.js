first_section = document.getElementById("first_section")
second_section = document.getElementById("second_section")

Q05 = document.getElementById("Q05")
Q10 = document.getElementById("Q10")
Q15 = document.getElementById("Q15")

document.getElementById("trivia_title")

function inputChange(e) {
   console.log(document.getElementById("inputName").value);
  }

counter_q = 1
full_q = 0
function selectNumQuestion(i){
    console.log(i)
    full_q = i
    first_section.innerHTML = counter_q + "/" + full_q
    document.getElementById("pls").innerHTML = ""
    addSecondSection()
}

function addSecondSection(){
    second_section.style.display = 'block'
    Q00 = document.getElementById("Q00")
    A01 = document.getElementById("A01")
    A02 = document.getElementById("A02")
    A03 = document.getElementById("A03")
    A04 = document.getElementById("A04")
}

function submitAnswer(){
    counter_q = counter_q + 1
    first_section.innerHTML = counter_q + "/" + full_q
    if(counter_q>full_q){
        second_section.innerHTML = ""
        first_section.innerHTML = ""
    }
}





