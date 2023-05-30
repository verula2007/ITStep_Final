$.getJSON("products.json",function(result){
    let prod1 = JSON.stringify(result)
    localStorage.setItem("products",prod1)
    
})
let prod = JSON.parse(localStorage.getItem("products")).products
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
function signIn(){
    location.href="login.html"
}
function Home(){
    location.href="index.html"
}
$(document).ready(function(){
    
    if(localStorage.getItem("index")==0){
        
        searchfunc()
        

    }
    else{
        allfunc()
    }
})
let searchInput = ""
let check = localStorage.getItem("search")

$(document).ready(function(){
    if(typeof check !== 'undefined' && check !== null){
        document.getElementById("viewallbutton").style.color="red"
        document.getElementById("viewallbutton").style.borderColor="red"
        document.getElementById("viewallbutton").style.background="white"
        document.getElementById("search").style.borderColor="greenyellow"
        localStorage.removeItem("index")
        localStorage.setItem("index",0)
        document.getElementById("all").style.display = "none"
        document.getElementById("cartdiv").style.display = "none"
        document.getElementById("searched").style.display = "grid"
        document.getElementById("viewallbutton").disabled = false
        document.getElementById("icon").style.color = "white"
        searchInput = check.toLowerCase()
        document.getElementById("search").value=check
        
    document.getElementById("button1").value =""
    let newarr = document.getElementById("searched").children
    for (let i = 0; i < newarr.length; i++) {
            let element1 = newarr[i];
            element1.style.display = "none"
            
        }
    for (var i = 0; i < a.length; i++) {
        var item = a[i].name.toLowerCase();
        
        
        
        
        
        
        if (item.includes(searchInput)) {
          let divs = document.getElementById("searched").children
          divs[a[i].id].style.display ="flex"
          
          
        }
      
      
    
    }

    
    localStorage.removeItem("search")

    }
})
$('#button1').bind("enterKey",function(e){
    
   
    
    
       
       
    
        searchInput = document.getElementById("button1").value.toLowerCase()
        document.getElementById("search").value = document.getElementById("button1").value
    document.getElementById("button1").value =""
    let newarr = document.getElementById("searched").children
    for (let i = 0; i < newarr.length; i++) {
            let element1 = newarr[i];
            element1.style.display = "none"
            
        }
    for (var i = 0; i < a.length; i++) {
        var item = a[i].name.toLowerCase();
        
        
        
        
        
        
        if (item.includes(searchInput)) {
          let divs = document.getElementById("searched").children
          divs[a[i].id].style.display ="flex"
          
          
        }
      
      
    
    }

    
    localStorage.removeItem("search")
 });
 $('#button1').keyup(function(e){
     if(e.keyCode == 13)
     {
         $(this).trigger("enterKey");
     }
 });

function allfunc(){
    document.getElementById("viewallbutton").style.color="white"
    document.getElementById("viewallbutton").style.borderColor="greenyellow"
    document.getElementById("viewallbutton").style.background="greenyellow"
    document.getElementById("search").style.borderColor="red"
    localStorage.removeItem("index")
    localStorage.setItem("index",1)
    document.getElementById("all").style.display = "grid"
    document.getElementById("searched").style.display = "none"
    document.getElementById("cartdiv").style.display = "none"
    document.getElementById("viewallbutton").disabled = true
    document.getElementById("icon").style.color = "white"
    

}
let number=0
let numb=0
let a = []
for (const key in prod) {
    let prodloop = prod[key]
    let food={
        id:numb,
        image:prodloop.productimg1,
        name:prodloop.productname1,
        price:prodloop.productprice1,
        restaurant:prodloop.name,
    }
    a.push(food)
    numb=numb+1
}

function searchfunc(){
    document.getElementById("viewallbutton").style.color="red"
    document.getElementById("viewallbutton").style.borderColor="red"
    document.getElementById("viewallbutton").style.background="white"
    document.getElementById("search").style.borderColor="greenyellow"
    localStorage.removeItem("index")
    localStorage.setItem("index",0)
    document.getElementById("all").style.display = "none"
    document.getElementById("cartdiv").style.display = "none"
    document.getElementById("searched").style.display = "grid"
    document.getElementById("viewallbutton").disabled = false
    document.getElementById("icon").style.color = "white"
    
        
        
        
        };
    for (const key in prod) {
            let prodloop = prod[key]
            
            
            $("#searched").append(`
            <div class="alldivs">
                <img style="width: 100%; border-radius: 20px; height:65%;" src="`+prodloop.productimg1+`" alt="">
                <p class="prodname" style="font-size: 250%; color: #F65900;">`+ prodloop.productname1+`</p>
                <p id="price" style="font-size: 150%; font-weight: bolder;">`+prodloop.productprice1+`</p>
                <p id="Restaurant" style="font-size: 200%; color: #ffb30e;"">`+prodloop.name+`</p>
                <button style="width: 80%;font-size: 20px; border: none; border-radius: 20px; background-color: #F65900; color: white; padding-top: 10px; padding-bottom: 10px;"  onclick="cartfunc(`+number+`)">Add to cart</button>
            </div>
            `)
        
   
}
let counter=0
function cartfunc(n){
    
    document.getElementById("viewallbutton").style.color="red"
    document.getElementById("viewallbutton").style.borderColor="red"
    document.getElementById("viewallbutton").style.background="white"
    document.getElementById("search").style.borderColor="red"
    counter = counter+1
    document.getElementById("countdiv").innerHTML=counter
    document.getElementById("cartdiv").style.display = "grid"
    document.getElementById("all").style.display = "none"
    document.getElementById("viewallbutton").disabled = false
    document.getElementById("searched").style.display = "none"
    document.getElementById("icon").style.color = "greenyellow"
    
    

    $("#cartdiv").append(`
    <div class="alldivs1">
    <img style="width: 100%; border-radius: 20px; height:65%;" src="`+a[n].image+`" alt="">
    <p class="prodname" style="font-size: 250%; color: #F65900;">`+ a[n].name+`</p>
    <p id="price" style="font-size: 150%; font-weight: bolder;">`+a[n].price+`</p>
    <button style="width: 60px;height:60px ;font-size: 40px; border: none; border-radius: 50%; background-color: red; color: white; "  onclick="deletediv(this)">X</button>
</div>
    `)

} 




let number1=0
for (const key in prod) {
    let prodloop = prod[key]
    
    $("#all").append(`
    <div class="alldivs">
        <img style="width: 100%; border-radius: 20px; height:65%;" src="`+prodloop.productimg1+`" alt="">
        <p style="font-size: 250%; color: #F65900;">`+ prodloop.productname1+`</p>
        <p id="price" style="font-size: 150%; font-weight: bolder;">`+prodloop.productprice1+`</p>
        <p id="Restaurant" style="font-size: 200%; color: #ffb30e;"">`+prodloop.name+`</p>
        <button style="width: 80%;font-size: 20px; border: none; border-radius: 20px; background-color: #F65900; color: white; padding-top: 10px; padding-bottom: 10px;" onclick="cartfunc(`+number1+`)">Add to cart</button>
    </div>
    `)
    
    number1=number1+1
    
    
    };


function deletediv(a){
    element=a
    element.parentNode.remove()
    counter = counter-1
    document.getElementById("countdiv").innerHTML=counter
    

}
function cartfunction2(){
    document.getElementById("viewallbutton").style.color="red"
    document.getElementById("viewallbutton").style.borderColor="red"
    document.getElementById("viewallbutton").style.background="white"
    document.getElementById("search").style.borderColor="red"
    document.getElementById("cartdiv").style.display = "grid"
    document.getElementById("all").style.display = "none"
    document.getElementById("viewallbutton").disabled = false
    document.getElementById("searched").style.display = "none"
    document.getElementById("icon").style.color = "greenyellow"
}
$('#search').bind("enterKey",function(e){
    
    
    let searchInput = document.getElementById("search").value.toLowerCase()
    let newarr = document.getElementById("searched").children
    for (let i = 0; i < newarr.length; i++) {
            let element1 = newarr[i];
            element1.style.display = "none"
            
        }
    for (var i = 0; i < a.length; i++) {
        var item = a[i].name.toLowerCase();
        // console.log(item)
        
        
        
        
        
        if (item.includes(searchInput)) {
          let divs = document.getElementById("searched").children
          divs[a[i].id].style.display ="flex"
          
          
        }
      }
    

    
 });
 $('#search').keyup(function(e){
     if(e.keyCode == 13)
     {
         $(this).trigger("enterKey");
     }
 });