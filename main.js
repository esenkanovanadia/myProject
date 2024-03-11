const btn = document.querySelector(".btn")


function changeClick(){
    alert('knopka nazhata')
}
btn.addEventListener("click", changeClick)



let input = document.querySelector('.input')

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        console.log(input.value);
    }
})

!zadania
const showBtn = document.querySelector(".scryt")
const hideBtn = document.querySelector(".pokazat")

const box = document.querySelector(".box")

showBtn.addEventListener("click", () => {
    box.classList.add("knopki")
})

// hideBtn.addEventListener("click", () => {
//     box.classList.remove("knopki")
// })


//  function changeBackgroundColor() {
//     var element = document.getElementById("text")
//     element.style.color = "green"
//  } 

//  function dobavit() {
//     var text = document.getElementById("textInput").value
//     var listItem = document.createElement("li")
//  }



//! 11.03.2024
