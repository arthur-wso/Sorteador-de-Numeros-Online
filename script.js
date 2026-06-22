
function drawButton(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if(min>=max){
        alert("O Valor Mínimo tem de ser MENOR que o Valor Máximo")
    } else {
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            
                alert(result);
    }
}