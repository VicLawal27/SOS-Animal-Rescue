var apiKey = "B9jIb4yZiryaifQXKBzDgHBhE2AmwQ7a40glzNTEwWwdH43OHw";
var apiSecret = "YZljrUqUnACitAzn5QucTliJakBiQ05sSagozLwA";



// write a function that generates an access token
const generateToken = function(key, secret){
    let url = "https://api.petfinder.com/v2/oauth2/token";
    // fetch the api auth
    fetch(url, {
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    }).then(response => response.json()).then(data => {
        localStorage.setItem("access_key", JSON.stringify(data));
        console.log("token", data);
        return data;
    });
    // return an access token
}

// var token = generateToken(apiKey, apiSecret);
// // write a fucntion that checks the expiration
// var generateNewToken = function(access_token){
//     // if the token has expired generate a new token
//     if(access_token["expires_in"] === 0) {
//         return setTimeout(() => {generateToken(apiKey, apiSecret)}, 3600);
//     }
// }

// var newToken = generateNewToken(token);

generateToken(); //page load 