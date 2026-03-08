
function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const errorMsg =document.getElementById("errorMsg");

    if(username === "admin" && password === "admin123"){
        alert("Login successful!");
            // window.location.href = "dashboard.html";
    }else{
        errorMsg.classList.remove("hidden");
        console.log("Invalid username or password");
    }
    
    
}