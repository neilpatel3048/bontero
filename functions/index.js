const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.categories = functions.https.onRequest((request, response) => {

    const categories = [{
        "category_id": "CAT001",
        "category_photo": "url",
        "category_name": "Organic Produce"
      },
      
      {
        "category_id": "CAT002",
        "category_photo": "url",
        "category_name": "Drinks and Dairy"
      },
      
      {
        "category_id": "CAT003",
        "category_photo": "url",
        "category_name": "Dry Goods"
      },
      
      {
        "category_id": "CAT004",
        "category_photo": "url",
        "category_name": "Home and Beauty"
      },
      
      {
        "category_id": "CAT005",
        "category_photo": "url",
        "category_name": "Sweets"
      }]
 response.send("helolo");
 });
