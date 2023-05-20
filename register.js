function Home(){
    location.href="index.html"
}

function register(){
let registervalue = $("#login-form").serializeArray().reduce(function(a,x){
    a[x.name]=x.value
    return a
},{})


fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(registervalue)
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}