const buttons = document.querySelectorAll(".color")
const bodyy = document.querySelector("body")
buttons.forEach(function (params) {
    params.addEventListener('click',function (e) {
        if (e.target.id==="Red") {
            bodyy.style.backgroundColor="Red"
            
        }
        if (e.target.id==="blue") {
            bodyy.style.backgroundColor="blue"
            
        }
        if (e.target.id==="green") {
            bodyy.style.backgroundColor="green"
            
        }
        if (e.target.id==="purple") {
            bodyy.style.backgroundColor="purple"
            
        }
        
    })

    
})