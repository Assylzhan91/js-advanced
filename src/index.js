import { Timer } from './timer'
import { testGen } from './range'
import { getWords, wordsCount } from './hw'

window.addEventListener('load', function (){
    const timer = new Timer(document.querySelector('.timer'), 5)
    timer.render()
    timer.start()
    let password = Symbol('some');
    let str = '  Всем привет! Ура ура! ';
    wordsCount(str)

    for (const strElement of getWords(str)) {
        console.log(strElement)
    }

})
