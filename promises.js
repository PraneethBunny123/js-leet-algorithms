function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true
            if(dogWalked) {
                resolve('you walked the dog')
            }else{
                reject('YOU DID NOT WALKED THE DOG')
            }
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = false
            if(cleanedKitchen){
                resolve('you cleaned the kitchen')
            }else{
                reject('YOU DID NOT CLEANED THE KITCHEN')
            }
        }, 2500)
    })
}

function takeTrashOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookTrash = false
            if(tookTrash) {
                resolve('you took the trash out')
            }else{
                reject('YOU DID NOT TAKE THE TRASH OUT')
            }
        }, 500)
    })
}


walkDog().then(value => { console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeTrashOut()})
    .then(value => {console.log(value); console.log('you finished all tasks')})
    .catch(error => console.error(error))