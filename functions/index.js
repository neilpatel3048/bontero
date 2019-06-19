const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp ();
const products = require("./api/products");
const registration = require("./api/registration");
const blog = require('./api/blogs');
const categories = require('./api/categories');

module.exports = {
    getProducts: functions.https.onRequest (products.get),
    searchProducts: functions.https.onRequest (products.search),
    getRegistration: functions.https.onRequest (registration.get),
    searchRegistration: functions.https.onRequest (registration.search),
    getBlog: functions.https.onRequest(blog.get),
    searchBlog: functions.https.onRequest(blog.search),
    getCategories: functions.https.onRequest(categories.get),
    searchCategories: functions.https.onRequest(categories.search)

};


//admin.initializeApp();



