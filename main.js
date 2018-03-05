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
function confirmA(){
    if(document.getElementById("inputName").value.length>0){
        trivia_title.remove()
        inputName.remove()
        document.getElementById("clearBtn").remove()
        document.getElementById("confirmBtn").remove()
    }
}

// function mouseO(e){
//     console.log("OO")
//     e.setAttribute('style','color: red;')
//     e.setAttribute('style','box-shadow: 0 0 20px yellow;')
// }
// function mouseI(e){
//     console.log("II")
//     e.setAttribute('style','color: green;')
//     e.setAttribute('style','box-shadow: 0 0 20px yellow;')
// }

// counter_q = 1
// full_q = 0
// function selectNumQuestion(i){
//     console.log(i)
//     full_q = i
//     first_section.innerHTML = counter_q + "/" + full_q
//     document.getElementById("pls").innerHTML = ""
//     addSecondSection()
// }

// function addSecondSection(){
//     second_section.style.display = 'block'
//     Q00 = document.getElementById("Q00")
//     A01 = document.getElementById("A01")
//     A02 = document.getElementById("A02")
//     A03 = document.getElementById("A03")
//     A04 = document.getElementById("A04")
// }

// function submitAnswer(){
//     counter_q = counter_q + 1
//     first_section.innerHTML = counter_q + "/" + full_q
//     if(counter_q>full_q){
//         second_section.innerHTML = ""
//         first_section.innerHTML = ""
//     }
// }





