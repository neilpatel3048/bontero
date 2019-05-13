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

const admin = require('firebase-admin');
admin.initializeApp();


const blog = require('./apis/blogs');
const categories = require('./apis/categories');

module.exports = {
    getBlog: functions.https.onRequest(blog.get),
    searchBlog: functions.https.onRequest(blog.search),
    getCategories: functions.https.onRequest(categories.get),
    searchCategories: functions.https.onRequest(categories.search)
};