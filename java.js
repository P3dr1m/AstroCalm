function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "root" && senha == "root"){
        alert("sucesso");
        location.href = "https://www.youtube.com/watch?v=LUMFITn510U";
    }else{
        alert ("email ou senha incorretos")
    }
}