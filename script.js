
const form = document.getElementById("loginForm");
const username = document.getElementById("username");

const password = document.getElementById("password");

const usererr = document.getElementById("usererr");
const passerr = document.getElementById("passerr");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
   
  var username=$('#username').val();
  var password = $('#password').val();
  if (username=== 'admin' && password === "12345") {
    redirectToMainPage();
  } else {
   
    validuser();
    validpassword();
  }
  });

  function redirectToMainPage() {
    window.location.href = 'main.html';
  }
  function validpassword(){
    if(password.value!="12345"){
        passerr.innerHTML="Please Enter Correct Password"
        passerr.style.color="red";
    }
    else{
      passerr.innerHTML=""
    }
  
    
  }
  function validuser(){
    if(username.value!="admin"){
        usererr.innerHTML="Please Enter Correct Username"
        usererr.style.color="red";
    }
    else{
      usererr.innerHTML=""
    }
   
  }