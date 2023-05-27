fetch('products.json').then(function(response){
    let get1 = response.json() 

    console.log(get1.JSONStringify())

    localStorage.setItem("products",response.json())
})

document.getElementById(image1).style.backgroundImage = "url('"+ +"')"
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
        title:"bla1",
        days:5
    },
    {
        title:"bla2",
        days:5
    },
    {
        title:"bla3",
        days:5
    },
    {
        title:"bla4",
        days:5
    },
    {
        title:"bla5",
        days:5
    },
    {
        title:"bla6",
        days:5
    },
    {
        title:"bla7",
        days:5
    },
    {
        title:"bla8",
        days:5
    },
    {
        title:"bla9",
        days:5
    },
    {
        title:"bla10",
        days:5
    }
  ]


caruselData=1  
showData(caruselData)
function showData(number) {
    let newindex=0
    let index1=0
   for (let index = 0; index < 5; index++) {
    index1=index+1
    console.log(index1)
    newindex=5*(number-1)+index
    console.log(newindex)
    console.log(obj1[newindex])
    console.log(obj1)
    document.getElementById("name1"+index1).innerHTML=obj1[newindex].title
    document.getElementById("remaining"+index1).innerHTML=obj1[newindex].days
    
   }

    
}  

function leftscrol()
{
    if(caruselData>1){
        caruselData=caruselData-1
        showData(caruselData)
    }
}


function rightscrol(){
    if(caruselData==1 || caruselData<obj.length/5){
        caruselData=caruselData+1
        console.log(caruselData)
        showData(caruselData)
    }
}


