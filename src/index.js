import { Timer } from './timer'

window.addEventListener('load', function (){
    const timer = new Timer(document.querySelector('.timer'), 5)
    timer.render()
    timer.start()
    let password = Symbol('some');
console.log(password)
})
