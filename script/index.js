
function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const errorMsg =document.getElementById("errorMsg");

    if(username === "admin" && password === "admin123"){
        alert("Login successful!");
            window.location.href = "http://127.0.0.1:5500/main.html";
            // window.location.href = "main.html";
    }else{
        errorMsg.classList.remove("hidden");
        
    }
    
    
}