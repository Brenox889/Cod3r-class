// arrow function (this)
const lex = () => console.log(this===exports)

// default param
function log(text = 'Node'){
    console.log(text)
}

//rest operator
function total(...numbers){
    let total = 0
    numbers.forEach(n=>total +=n)
}
console.log(2+2+2)