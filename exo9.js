function charAt(str='', position) {
    myArray = str.split('')

    sentence = myArray[position]

    return sentence
}

console.log(charAt('chopper', 0))
console.log(charAt('chopper', 1))

// j'ai pas cherché, j'ai pris une fonction " helper " .. 