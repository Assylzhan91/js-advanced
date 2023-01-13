import { getWords, wordsCount } from './hw'

window.addEventListener('load', function (){
    let str = '  Всем привет! Ура ура!';
    let count = wordsCount(str)
        console.log(count)

    let a =  getWords(str)

    for (const aElement of a) {
        console.log(aElement)
    }
})
