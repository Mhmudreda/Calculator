

let userInput = document.getElementById('userInput');
let button = document.querySelectorAll('button')

//console.log(button)

button.forEach(x =>  {
    x.addEventListener("click",(e)=>{

     // console.log(e.target.textContent)
     
     if(e.target.textContent === "AC"){
        userInput.innerHTML=""
     }else if(e.target.textContent === "DEL"){
        userInput.innerHTML = userInput.innerHTML.slice(0,-1)
     }else if(e.target.textContent === "="){
        userInput.innerHTML = eval(userInput.innerHTML)
     }
     else
     {
        userInput.innerHTML += e.target.textContent
     }

    })

})


