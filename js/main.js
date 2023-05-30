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
    {
        img:prod.pizzahub.productimg1,
        product:prod.pizzahub.productname1,
        name:prod.pizzahub.name,
        price:prod.pizzahub.productprice1
    },
    {
        img:prod.kfc.productimg1,
        product:prod.kfc.productname1,
        name:prod.kfc.name,
        price:prod.kfc.productprice1
    },
    {
        img:prod.tacobell.productimg1,
        product:prod.tacobell.productname1,
        name:prod.tacobell.name,
        price:prod.tacobell.productprice1
    },
    {
        img:prod.redsquare.productimg1,
        product:prod.redsquare.productname1,
        name:prod.redsquare.name,
        price:prod.redsquare.productprice1
    },
    {
        img:prod.subway.productimg1,
        product:prod.subway.productname1,
        name:prod.subway.name,
        price:prod.subway.productprice1
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
    if(caruselData>1 ){
        caruselData=caruselData-1
        showData(caruselData)
        document.getElementById("rightarrow").disabled = false
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
        document.getElementById("leftarrow").disabled = false
    }
    else{
        document.getElementById("rightarrow").disabled = true
        document.getElementById("leftarrow").disabled = false
    }
}

document.getElementById("feauturedimage1").style.backgroundImage = 'url(' +prod.foodworld.productimg1 + ")"
document.getElementById("feauturedlogo1").src= prod.foodworld.logo
document.getElementById("feauturedname1").innerHTML= prod.foodworld.name
document.getElementById("feauturedimage2").style.backgroundImage = 'url(' +prod.pizzahub.productimg1 + ")"
document.getElementById("feauturedlogo2").src= prod.pizzahub.logo
document.getElementById("feauturedname2").innerHTML= prod.pizzahub.name
document.getElementById("feauturedimage3").style.backgroundImage = 'url(' +prod.donutshut.productimg1 + ")"
document.getElementById("feauturedlogo3").src= prod.donutshut.logo
document.getElementById("feauturedname3").innerHTML= prod.donutshut.name
document.getElementById("feauturedimage4").style.backgroundImage = 'url(' +prod.subway.productimg1 + ")"
document.getElementById("feauturedlogo4").src= prod.subway.logo
document.getElementById("feauturedname4").innerHTML= prod.subway.name
document.getElementById("feauturedimage5").style.backgroundImage = 'url(' +prod.rubytuesday.productimg1 + ")"
document.getElementById("feauturedlogo5").src= prod.rubytuesday.logo
document.getElementById("feauturedname5").innerHTML= prod.rubytuesday.name
document.getElementById("feauturedimage6").style.backgroundImage = 'url(' +prod.kfc.productimg1 + ")"
document.getElementById("feauturedlogo6").src= prod.kfc.logo
document.getElementById("feauturedname6").innerHTML= prod.kfc.name
document.getElementById("feauturedimage7").style.backgroundImage = 'url(' +prod.redsquare.productimg1 + ")"
document.getElementById("feauturedlogo7").src= prod.redsquare.logo
document.getElementById("feauturedname7").innerHTML= prod.redsquare.name
document.getElementById("feauturedimage8").style.backgroundImage = 'url(' +prod.tacobell.productimg1 + ")"
document.getElementById("feauturedlogo8").src= prod.tacobell.logo
document.getElementById("feauturedname8").innerHTML= prod.tacobell.name

obj2 =[
    {
        img:"images/pizza.png",
        text:"Pizza"
    },
    {
        img:"images/burger.png",
        text:"Burger"
    },
    {
        img:"images/noodles.png",
        text:"Noodles"
    },
    {
        img:"images/sandwich.png",
        text:"Sub-sandwich"
    },
    {
        img:"images/chowmain.png",
        text:"Chowmain"
    },
    {
        img:"images/steak.png",
        text:"Steak"
    },
    {
        img:"images/steak.png",
        text:"Steak"
    },
    {
        img:"images/chowmain.png",
        text:"Chowmain"
    },
    {
        img:"images/sandwich.png",
        text:"Sub-sandwich"
    },
    {
        img:"images/noodles.png",
        text:"Noodles"
    },
    {
        img:"images/burger.png",
        text:"Burger"
    },
    {
        img:"images/pizza.png",
        text:"Pizza"
    },


]


caruselData1=1  
showData1(caruselData1)
function showData1(number) {
    let newindex=0
    let index1=0
   for (index = 0; index < 6; index++) {
    index1=index+1
    
    newindex=6*(number-1)+index
    
    document.getElementById("carusel2image"+index1).src=obj2[newindex].img
    document.getElementById("carusel2text"+index1).innerHTML=obj2[newindex].text

    
   }

    
}  
document.getElementById("carusel2arrow1").disabled = true

function leftscrol1()
{
    if(caruselData1>1 ){
        caruselData1=caruselData1-1
        showData1(caruselData1)
        document.getElementById("carusel2arrow2").disabled = false
    }
    else{
        document.getElementById("carusel2arrow1").disabled = true
        document.getElementById("carusel2arrow2").disabled = false
    }
}


function rightscrol1(){
    if(caruselData1<obj2.length/6){
        caruselData1=caruselData1+1
        
        showData1(caruselData1)
        document.getElementById("carusel2arrow1").disabled = false
    }
    else{
        document.getElementById("carusel2arrow2").disabled = true
        document.getElementById("carusel2arrow1").disabled = false
    }
}
$('#button1').bind("enterKey",function(e){
    localStorage.removeItem("index")
    localStorage.setItem("index",0)
    let ragac = document.getElementById("button1").value
    localStorage.setItem("search",ragac)
    location.href="search.html"
    
 });
 
 
 
 $('#button1').keyup(function(e){
     if(e.keyCode == 13)
     {
         $(this).trigger("enterKey");
     }
 });
 function viewall(){
    location.href="search.html"
    localStorage.removeItem("index")
    localStorage.setItem("index",1)

 }
 