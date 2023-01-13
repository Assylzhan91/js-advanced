export function* testGen(){
    let num = 1
    while (true){
        try {
            yield num++
        }catch (err){
            console.log(err)
        }
    }
}