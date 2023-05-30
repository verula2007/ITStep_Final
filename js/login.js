function Home(){
    location.href="index.html"
}
document.getElementById("errortext").style.visibility = "hidden"
function loginFunc(event){
    event.preventDefault()
    

let loginvalue = $("#login-form").serializeArray().reduce(function(a,x){
    a[x.name]=x.value
    return a
},{})


if(loginvalue.email && loginvalue.password !=""){
fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
    
    "email": loginvalue.email,
    
    "password": loginvalue.password
    })
})
   .then(response =>response.json())
   .then(response => {console.log(JSON.stringify(response))

    localStorage.setItem("user", JSON.stringify(response))
    
    location.href="index.html"
}).catch(error => {
    document.getElementById("errortext").innerHTML="Email or password is incorect!"
    document.getElementById("errortext").style.visibility = "visible"

})

}
else{
    document.getElementById("errortext").style.visibility = "visible"
}
}


