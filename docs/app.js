function BtoD(){
    let bin = document.getElementById("bin")

    let dec = parseInt(bin.value, 2)

    let content = document.getElementById("tx")
    
    if(isNaN(dec)){
        content.innerHTML = "Insira um valor binário válido"
    }else{
        content.innerHTML = Number(dec)
        
    }
}

function DtoB(){
    let deca = document.getElementById("dec")
    let dec = parseInt(deca.value)
    let bin = (dec >>> 0).toString(2)
    let content = document.getElementById("tx2")

    if(isNaN(dec)){
        content.innerHTML = "Insira um valor decimal válido"
    }else{
        content.innerHTML = bin

    }
}
