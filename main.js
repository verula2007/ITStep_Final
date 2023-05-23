$('#slidediv').css("display","none")
$( document ).ready(function() {
    if("user" in localStorage){
    document.getElementById("icon2").nextElementSibling.style.display="none"
    obj = JSON.parse(localStorage.getItem("user"))
    document.getElementById("namep").innerHTML= obj.firstName
    $("#button2").removeAttr('onclick').click(function () {
        document.getElementById("button2").style.display = "none"
        $('#slidediv').slideToggle();
    });
    $('#slidediv').click(function(){
        $('#slidediv').slideToggle(1)
        document.getElementById("button2").style.display = "flex"
    })
    $("#signout").click(function(){
        localStorage.removeItem("user")
        location.reload()
    })
    
    
    }
    
})

// class Food{
//     constructor(name,img,price,restaurant,){
//         this.Name=name
//         this.Img=img
//         this.Price=price
//         this.restaurant=restaurant
//     }
// }

function locationFunc(event){
    event.preventDefault()
    locat = document.getElementById('search').value
    if(locat == ""){
    document.getElementById("searchDiv").style.border = "1px solid red" 
    document.getElementById("search").style.borderTop = "1px solid red" 
    document.getElementById("search").style.borderBottom = "1px solid red" 
    }
    else{
        document.getElementById("searchDiv").style.border = "none" 
        document.getElementById("search").style.borderTop = "none" 
        document.getElementById("search").style.borderBottom = "none"
        localStorage.setItem("location",locat)
        
        }
}
function signIn(){
    location.href="login.html"
}
function Home(){
    location.href="index.html"
}
document.getElementById("deldiv").disabled = true;
function Delivery(i){
    let current = i
    let parent = current.parentElement
    if (current == parent.lastElementChild){
        current.removeAttribute('id')
        current.setAttribute('id','deldiv')
        current.previousElementSibling.removeAttribute('id')
        current.previousElementSibling.setAttribute('id','pickupdiv')
        
        current.disabled=true
        current.previousElementSibling.disabled=false
    }
    else{
        current.removeAttribute('id')
        current.setAttribute('id','deldiv')
        current.nextElementSibling.removeAttribute('id')
        current.nextElementSibling.setAttribute('id','pickupdiv')
        current.disabled=true
        current.nextElementSibling.disabled=false
    }
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });
