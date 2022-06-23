function locationRequest(location){
    return new Promise((resolve, reject) => {
        console.log("Making request to " + location )
        if (location === 'Google'){
            resolve("Google says hi");
        } else {
            reject("Sorry, I can only reply to Google")
        }
    })
}

function processRequest(response){
    return new Promise ((resolve, reject) => {
        console.log("I'm Processing response from processReqest()Fn");
        resolve('Extra Information: ' + response)
    })
}

locationRequest("Google")
.then((response) => {
    console.log("Response received");
    return processRequest(response)
})
.then((processedResponse) => {
    console.log(processedResponse)
})
.catch((err) => {
    console.log(err)
})