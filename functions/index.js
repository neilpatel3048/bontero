const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.registration = functions.https.onRequest((request, response) => {
const registration = [{
    "email": "neil.patel@bts.tech",
    "password" : "*******",
    "photo?" : "https://barcelonatechnologyschool.com/wp-content/uploads/2019/03/Gael.jpg",
    "username?" : "neilpatel30",
    "user_card1" : "",
    "sign_out" : "",
    
   
        "card1_number" : "0234 1034 1204 1234",
        "card1_security#" : "001",
        "card1_date_expire" : "12/10",
  
            "user_shipping_details1": "", 
            "shipping_street1" : "Arc del teatre",
            "shipping_building" : "16",
            "shipping_Appt" : "2",
            "shipping_city" : "Barcelona",
            "shipping_zip" : "08000",
            "shipping_country" : "Spain",
            "phone_number" : "+34 123 123 0000"
    
  }]


  response.send(registration);
 });

 exports.events = functions.https.onRequest((request, response) => {
    const events = [{
        "event_id" :"EVENT0001",
      "event_name" : "Cleaning Beach Day",
      "event_pic" : "url",
      "event_date" : "25/08/2019",
      "event_hour" : "10am",
      "event_venue" : "Barceloneta",
      "event_details" : "Join us as we get together on our monthly clean up of Barceloneta beach. We want to keep our beach beautiful and special for locals and visitors to this beautiful part of town! Come for a few hours to clean, meet new friends, and enjoy some refreshments afterwards. Note: Wear comfortable clothes and sandals. See you there!"
    }]
       
      response.send(events);
     });
