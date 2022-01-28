function validate(){
var username =document.getElementById("username").value;
var password =document.getElementById("password").value;
if(username=="admin" && password=="12345"){
    location.assign("homePage.html");
    // console.log("hello")
    
}else{
    alert("Wrong Username or password");
}

}