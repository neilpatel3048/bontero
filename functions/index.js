const functions = require('firebase-functions');
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