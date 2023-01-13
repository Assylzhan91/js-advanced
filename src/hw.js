function trimWords(str){
    return str.trim()
}
export function wordsCount(str){
    str =  trimWords(str)
    //console.log(str.length)
}

export function getWords(str){
    let words = trimWords(str) + ' ',
        pos = 0,
        foundPos = words.indexOf(' ', pos)

    while(foundPos !== -1){
        console.log(foundPos)
        foundPos = words.indexOf(' ', foundPos + 1)
    }
}

