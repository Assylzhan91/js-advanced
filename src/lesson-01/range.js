export function* sample(){
    let a = 1
    yield a;
    a = yield 2;
    a = yield 3 ;

}