const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp ();

//const admin = require('firebase-admin');
//admin.initializeApp();

const products = require("./api/products");
const registration = require("./api/registration");
const blog = require("./api/blogs");
const categories = require("./api/categories");
const events = require("./api/events");
const product_detail = require("./api/product_detail");

module.exports = {

    //Products
    getProducts: functions.https.onRequest (products.get),
    searchProducts: functions.https.onRequest (products.search),

    //registration
    getRegistration: functions.https.onRequest (registration.get),
    searchRegistration: functions.https.onRequest (registration.search),

    //blogs
    getBlog: functions.https.onRequest(blog.get),
    searchBlog: functions.https.onRequest(blog.search),

    //categories
    getCategories: functions.https.onRequest(categories.get),
    searchCategories: functions.https.onRequest(categories.search),

    //Events
    getevents: functions.https.onRequest(events.get),
    searchproduct_detail: functions.https.onRequest(events.search),

    //
    getproduct_detail: functions.https.onRequest(product_detail.get),
    searchproduct_detail: functions.https.onRequest(product_detail.search)
};







