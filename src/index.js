import { getWords, wordsCount } from './hw'

window.addEventListener('load', function (){
    //let str = '  Всем привет! Ура ура!';
    let str = 'aa';
    let count = wordsCount(str)

    let a =  getWords(str)

    for (const aElement of a) {
        console.log(aElement)
    }

})
