function Home(){
    location.href="index.html"
}
document.getElementById("errortext").style.visibility = "hidden"
function register(event){
    event.preventDefault()
    

let registervalue = $("#login-form").serializeArray().reduce(function(a,x){
    a[x.name]=x.value
    return a
},{})
registervalue.active=true
if(registervalue.userName && registervalue.firstName && registervalue.lastName && registervalue.email && registervalue.privateNumber && registervalue.password !=""){
fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
    "userName": registervalue.userName,
    "firstName": registervalue.firstName,
    "lastName": registervalue.lastName,
    "email": registervalue.email,
    "privateNumber": registervalue.privateNumber,
    "password": registervalue.password,
    "active": true})
})
   .then(response => response.json())
   .then(response => {console.log(JSON.stringify(response))
    location.href="login.html"
})

}
else{
    document.getElementById("errortext").style.visibility = "visible"
}
}