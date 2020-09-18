function first(str='', len=1) {

    word = str.slice(0 ,len)
    
    return word
}

console.log(first('chopper'))
console.log(first('chopper', 2))
console.log(first('tony', 5))