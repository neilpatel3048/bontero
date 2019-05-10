var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();


const events = require('./api/events')
const product_detail = require('./api/product_detail')

module.exports = {
    //Events page
    getevents: functions.https.onRequest(events.get),
    searchevents: functions.https.onRequest(events.search),
    
    //Product detail page
    getproductdetail: functions.https.onRequest(product_detail.get),
    searchproductdetails: functions.https.onRequest(product_detail.search)
}

