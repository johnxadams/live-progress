function locationRequest(location) {
  return new Promise((resolve, reject) => {
    console.log("1: Making request to " + location);
    if (location === "Google") {
      resolve("Google says hi (5: )");
    } else {
      reject(" rejected: Sorry, I can only reply to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(
      "3: I'm running after a resolving value of someReponse is passend as an argument. I Basically run after receiving response from locationRequest() "
    );
    resolve("4: Extra Information: " + response);
  });
}

async function doWork() {
  try {
    /**
     * inside try I put alll of the code
     * that could potentially fail
     */
    const someResponse = await locationRequest("Google");
    console.log("2: Response received");
    const processedResponse = await processRequest(someResponse);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();

/**
 * inside the doWork();
 * locationRequest is waiting for its argument to cause hopely
 * a resolving(value) - which is going to be saved as
 * a variabl in someResponse =  resolve("Google says hi")
 *
 * if the argument is being rejected, the promise will print a reject message
 *
 * processRequest can only await for a resolving value
 * which is save inside the variable someResponse.
 * someReponse is going to act as an argument for processRequest(someResponse)
 *
 *
 */

/**
 * the truthy ifStatementValue that I send as a reuqest,
 * will be saved in a variable const someReponse
 * I'm going to receive a response which is inside the resolve()Method
 * of processRequest function
 */
