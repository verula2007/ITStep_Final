// class Food{
//     constructor(name,img,price,restaurant,){
//         this.Name=name
//         this.Img=img
//         this.Price=price
//         this.restaurant=restaurant
//     }
// }
// let location = ""
// function locationFunction(){
//     location = document.getElementById('search').value
//     console.log(location)
// }
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