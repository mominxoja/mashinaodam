const a =3.6
const b =20.1
const c =70
const d =800








const input = document.querySelector("#value")
const value = input.value
const parag =document.querySelector(".parag")
// input.addEventListener("keyup", function (){
    // parag.textContent =value/a
// })
input.addEventListener("change", function (){
    parag.textContent =input.value/a+"soat"
})




const input1 = document.querySelector("#value")
const parag1 =document.querySelector(".parag1")
input.addEventListener("change", function (){
    parag1.textContent =input.value/b+"soat"
})




const input2 = document.querySelector("#value")
const parag2 =document.querySelector(".parag2")
input.addEventListener("change", function (){
    parag2.textContent =input.value/c+"soat"
})




const input3 = document.querySelector("#value")
const parag3 =document.querySelector(".parag3")
input.addEventListener("change", function (){
    parag3.textContent =input.value/d+"soat"
})