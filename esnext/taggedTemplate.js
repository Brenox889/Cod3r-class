
function real(partes, ...valores){
    const resultado = []

    valores.forEach((valor, indice)=>{
        valor = isNaN(valor) ? valor : `R${valor.toFixed(2)}`
    })
}