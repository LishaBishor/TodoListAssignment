var user=document.getElementById('user');
var err1=document.getElementById("err1");
var pass=document.getElementById("pass");
var err2=document.getElementById("err2");
function validate(page){
    if(user.value=="admin" && pass.value=="12345"){
       
        // window.location.href="main.html"
        // alert("valid")
        
         loadpage();

       
    }
    else{
        alert("invalid")
    }
    }
function loadpage(){
    // alert("hello")
    window.location.assign("main.html");
     alert("valid");

}