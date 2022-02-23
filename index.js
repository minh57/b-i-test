// bài 1
   
//   function longestLength(a){
//   for (const er of a) {
//     let x = a.length 
//     let i = Math.max(er)
//       console.log(i)
//   }  
//   }
//   longestLength(["minh","min"])

// //  bài 2
// function alternatingSums(x) {
//     for (const arr of x) {
//         if(arr%2){

//         }
//     }
// }
const hello = document.getElementById("hello")
hello.addEventListener("click",function(){
    const hi = document.getElementById("hi")
    const arr = ["red","blue","green","yellow"]
    let x = Math.floor(Math.random()*arr.length)
    const color = arr[x]
    hi.style.backgroundColor = color
})
