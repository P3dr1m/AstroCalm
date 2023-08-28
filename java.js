function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "root" && senha == "root"){
        alert("sucesso");
        location.href = "https://astrocalm.netlify.app/";
    }else{
        alert ("email ou senha incorretos")
    }
}
