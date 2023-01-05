let i = null
function countDown(i){
    while(i >= 0){
        console.log(i)
        i--
    }
}

function writeCards(names, event){
    let message = []
    for(i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message
}