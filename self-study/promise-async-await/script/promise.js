let p = new Promise((resolve, reject) => {
    let a  = 1 + 1;
    if (a === 2){
        resolve("Success");
    } else {
        reject("Failed");
    }
})

/**
 * Anything inside of a .then is going to run
 * for a resolve.
 * So the truthy ifStatement goes to resolve().
 * resolve() in turn triggers the .then()
 * 
 * the parameter inside the then()Method 
 * is equivalent to the input inside the resolve()Method
 * 
 * 
 * the parameter inside the catch()Method 
 * is equivalent to the input inside the reject()Method
 * only reacts if ifStatement fails
 */
p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})






let userLeft = false;
let catMeme =  true;

function anotherPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: 'Sad Smiley :('
            })
        } else if (catMeme) {
            reject({
                name: 'Watching cat memes',
                message: 'Cat memes funnier than youtube '
            })
        } else {
            resolve('This is the resolve message')
        }
    })
}

/**
 * first I call the function anotherPromise()
 * and add the .then()Method
 * 
 * the errorMessage parameter inside the catch()Method 
 * is refering to the the object{} inside the reject()Methods
 * in the ifStatement
 * Meaning errorMessage.name === ('User Left' || 'Watching cat memes')
 * 
 * And if both reject Statements are false, we move the resolve()Method
 */

anotherPromise().then((message) => {
    console.log('Success ' + message);
}).catch((errorMessage) => {
    console.log(`${errorMessage.name} ${errorMessage.message}`)
})





const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

/**
 * Witzh Promise.all()Method I can run all three 
 * Promises at once without waiting for one after each other
 * Using an array inside the all() I cna send in all
 * the different Promises that I want to run.
 * I'll pass the .then()Methode which is going to 
 * send an array of all three resolve('messages')
 * 
 * 
 *     ! r a c e
 * the equivalent Promise.race([item1, item2, item3]).then()
 * will run the first Promise that is completed
 * instead of waiting for all Promises to finish loading.
 * Because of that it will only return a single 
 * message - as opposed to all of the messages 
 * 
 */

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})