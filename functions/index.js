const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp ();

const products = require("./apis/products");
const registration = require("./apis/registration");

module.exports = {

    //Products
    getProducts: functions.https.onRequest (products.get),
    searchProducts: functions.https.onRequest (products.search),

    //registration
    getRegistration: functions.https.onRequest (registration.get),
    searchRegistration: functions.https.onRequest (registration.search)

};


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
