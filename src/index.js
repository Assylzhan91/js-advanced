function mult(x, y){
    return x * y
}

let math = {
    sum(x, y){
        console.log(this)
        return x + y
    },
    mult(x, y){
        console.log(this)
        return x * y
    },
    some: ()=> {
        console.log('some', this)
        return 1
    }
}

let { sum } = math
let res = sum.bind(math)
console.log(res(1, 2))




