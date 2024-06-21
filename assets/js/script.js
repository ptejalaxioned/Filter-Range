let inputMin=document.querySelector(".min")
let inputMax=document.querySelector(".max")
let main=document.querySelector("main")
$(document).ready(function () {
let shoes_list=document.querySelectorAll(".shoe")
$('input').mousemove(
    function(){
        $(".lowest").text(inputMin.value)
        $(".highest").text(inputMax.value)
        if(parseInt(inputMin.value)+140>parseInt(inputMax.value))
            {
              $(this).prop("disabled", true);
            }
         else{
            console.log("HHHH",this)
            $(this).prop("enabled", true);
         }
    }
)
$('button').click(
    function(){
shoes_list.forEach(function(element) {
    $(element).hide(1000)
    let minVal=parseInt(inputMin.value)
    let maxVal=parseInt(inputMax.value)
    let price_string=element.children[2].innerHTML
    let price=parseInt(price_string.slice(1))
    if(price>=minVal && price<=maxVal)
        {
            $(element).show(1000)
        }
     else{
       let Div= document.createElement("div")
       Div.classList.add("no-result")
       Div.innerHTML="No Result Found"
       main.appendChild(Div)
     }
    }
)
});
$('button').click(
    function(){
        console.log(inputMin.value)
        console.log(inputMax.value)
    }
)
}
)
