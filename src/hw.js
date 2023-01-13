function trimWords(str){
    return str?.trim()
}
export function wordsCount(str){
    str =  trimWords(str)
    let count = 0
    let words = trimWords(str) + ' ',
        pos = 0,
        foundPos = words.indexOf(' ', pos);

    while(true){
        if (foundPos === -1) break;
        pos = foundPos
        pos++
        foundPos = words.indexOf(' ', pos)
        count++
    }
    return count
}

export function* getWords(str){
    let words = trimWords(str) + ' ',
        pos = 0,
        foundPos = words.indexOf(' ', pos);
    while(foundPos !== -1){
        let a = words.substring(pos, foundPos)
        a = a.replace(/!/, '')
        pos = foundPos
        pos++
        foundPos = words.indexOf(' ', pos)
        yield a
    }


}

