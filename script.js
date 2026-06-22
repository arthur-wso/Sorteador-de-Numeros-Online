
function drawButton() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result);
    } else {
        alert("O Valor Mínimo tem de ser MENOR que o Valor Máximo")
    }
}