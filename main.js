$.getJSON("products.json",function(result){
    let prod1 = JSON.stringify(result)
    localStorage.setItem("products",prod1)
    
})
let prod = JSON.parse(localStorage.getItem("products")).products
document.getElementById("image1").style.backgroundImage = 'url(' + prod.greysvage.productimg1 +')'
document.getElementById("image2").style.backgroundImage = 'url(' + prod.greysvage.productimg2 +')'
document.getElementById("image3").style.backgroundImage = 'url(' + prod.greysvage.productimg3 +')'
document.getElementById("image4").style.backgroundImage = 'url(' + prod.greysvage.productimg4 +')'

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
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
   
//   });

  obj1=[
    {
        img:prod.burgerarena.productimg1,
        product:prod.burgerarena.productname1,
        name:prod.burgerarena.name,
        price:prod.burgerarena.productprice1
    },
    {
        img:prod.topsticks.productimg1,
        product:prod.topsticks.productname1,
        name:prod.topsticks.name,
        price:prod.topsticks.productprice1
    },
    {
        img:prod.cakeworld.productimg1,
        product:prod.cakeworld.productname1,
        name:prod.cakeworld.name,
        price:prod.cakeworld.productprice1
    },
    {
        img:prod.fastfooddine.productimg1,
        product:prod.fastfooddine.productname1,
        name:prod.fastfooddine.name,
        price:prod.fastfooddine.productprice1
    },
    {
        img:prod.foodyman.productimg1,
        product:prod.foodyman.productname1,
        name:prod.foodyman.name,
        price:prod.foodyman.productprice1
    },
  ]


caruselData=1  
showData(caruselData)
function showData(number) {
    let newindex=0
    let index1=0
   for (let index = 0; index < 5; index++) {
    index1=index+1
    
    newindex=5*(number-1)+index
    
    document.getElementById("caruselimg"+index1).src=obj1[newindex].img
    document.getElementById("caruselprod"+index1).innerHTML=obj1[newindex].product
    document.getElementById("caruselloc"+index1).innerHTML=obj1[newindex].name
    document.getElementById("caruselprice"+index1).innerHTML=obj1[newindex].price
    
   }

    
}  
document.getElementById("leftarrow").disabled = true

function leftscrol()
{
    if(caruselData>1){
        caruselData=caruselData-1
        showData(caruselData)
    }
    else{
        document.getElementById("leftarrow").disabled = true
        document.getElementById("rightarrow").disabled = false
    }
}


function rightscrol(){
    if(caruselData<obj1.length/5){
        caruselData=caruselData+1
        
        showData(caruselData)
    }
    else{
        document.getElementById("rightarrow").disabled = true
        document.getElementById("leftarrow").disabled = false
    }
}


