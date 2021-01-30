function convert(){
    let bin = document.getElementById("bin")

    let dec = parseInt(bin.value, 2)

    let content = document.getElementById("tx")
    
    if(isNaN(dec)){
        content.innerHTML = "Insira um valor binário válido"
    }else{
        content.innerHTML = Number(dec)
        
    }
}