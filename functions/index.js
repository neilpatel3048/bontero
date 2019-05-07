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


exports.products = functions.https.onRequest((request, response) => {
const products = [
 {  "product_id" :"P0001",
    "product_name" : "Avocado",
    "product_picture" : "https://drive.google.com/file/d/1l7w_T27sPTtejhKOs458i-9hDZ5rTlka/view?usp=sharing",
    "product_price" : "2,00",
    "product_Category" : ["fresh produce", "fruit", "Organic Produce"],
    "category_id": "CAT1234"},

{   "product_id" :"P0002",
    "product_name" : "Orange",
    "product_picture" : "https://drive.google.com/file/d/1l7w_T27sPTtejhKOs458i-9hDZ5rTlka/view?usp=sharing",
    "product_price" : "1,00",
    "product_Category" : ["fresh", "fruit", "Organic Produce"],
    "category_id": "CAT1234"},

{   "product_id" :"P0003",
    "product_name" : " Bamboo Toothbrush",
    "product_picture" : "https://drive.google.com/file/d/1AmsQbeiYhMK_0L2-VG0wRP3_H1JdXzcK/view?usp=sharing",
    "product_price" : "1,00",
    "product_Category" : ["Bathroom", "Toothbrushes", "Home and Beauty"],
    "category_id": "CAT003"},

{   "product_id" :"P0004",
    "product_name" : "Shampoo",
    "product_picture" : "https://drive.google.com/file/d/1GrwQeDznSy4_itpNycbvEDK6fkvc0H1p/view?usp=sharing",
    "product_price" : "4,00",
    "product_Category" : ["Bathroom", "Shampoo", "Home and Beauty"],
    "category_id": "CAT001"},

{   "product_id" :"P0005",
    "product_name" : "Almonds",
    "product_picture" : "https://drive.google.com/file/d/1oENO9SOmcZOsG5C1EfogJG0gsQ0QfI2s/view?usp=sharing",
    "product_price" : "5,00",
    "product_Category" : ["Dry fruits", "almonds spain", "Dry goods"],
    "category_id": "CAT001"  },

{  "product_id" : "P0006",
    "product_name" : "Onion",
    "product_picture" : "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/1511w-getty-yellow-onion.jpg?itok=gh52ZSro",
    "product_price" : "0,75",
    "product_Category" : ["Fresh Produce", "Organic Produce"],
    "category_id": "CAT001"},

{   "product_id" : "P0007",
    "product_name" : "String Bag",
    "product_picture" : "https://drive.google.com/file/d/1lh_8W8tMbFG40NpNbGqe3pGy_SiihnBC/view?usp=sharing",
    "product_price" : "0,75",
    "product_Category" : ["Fresh Produce", "Organic Produce"],
    "category_id": "CAT004"},

{   "product_id" : "P0008",
    "product_name" : "Dark Chocolate",
    "product_picture" : "http://www.edelices.co.uk/media/catalog/product/cache/6/small_image/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolat-tablette-noir-oranges-confites-bio-bovetti.jpg",
    "product_price" : "3,05",
    "product_Category" : ["Sweets", "Chocolates"],
    "category_id": "CAT005"},

{   "product_id" : "P0009",
    "product_name" : "Milk Chocolate",
    "product_picture" : "http://www.edelices.co.uk/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chocolat-tablette-lait-amandes-bio-bovetti.jpg",
    "product_price" : "2,00",
    "product_Category" : ["Sweets", "Chocolates"],
    "category_id": "CAT005"}
]
    response.send(products);
});


exports.productDetails = functions.https.onRequest((request, response) => {
    const productDetails = 
[
    {  
    "product_id" : "P0001",
    "descrption" : "Grown in the heartland of Spain, free from pesticides and other harmful chemicals. The Hass avocado contains many nutrients and is considered one of the greatest superfoods on Earth. It’s a perfect snack or addition to a meal that will keep your body happy and healthy. Produced in: Malaga, Spain by La Nucia Farms",
    "footprint" : {
    "water" : "icon",
    "water text" : "120 liters consumed by avocado",
    "plastic" : "icon",
    "plastic text" : "No plastic was involved in the process",
    "pollution/transport" : "icon",
    "pollution text" : "The tree was 500miles from you",
    "pesticides" : "icon",
    "pesticides text" : "No pesticides have been used in the process" },
    "Producers" : "La Nucia Farms is a family-owned and run business based in outskirts of Malaga. La Nucia Farms is committed to producing the finest possible fresh vegetables and fruits which has been grown using the most sustainable methods. They are committed to operate in the most environmentally-friendly way possible. Their approach so far has produced fruits and vegetables that are fresher, tastier, and more nutritious!"},

    {
    "product_id" : "P0002",
    "descrption" : "Grown in the heartland of Spain, free from pesticides and other harmful chemicals. The spanish orange contains many nutrients and is considered one of the tastiest oranges on Earth. It’s a perfect snack or addition to a meal that will keep your body happy and healthy. Produced in: Tarragona, Spain by El Vendrell",
    "footprint" : {
    "water" : "icon",
    "water text" : "50 liters consumed by orange",
    "plastic" : "icon",
    "plastic text" : "No plastic was involved in the process",
    "pollution/transport" : "icon",
    "pollution text" : "The tree was 50miles from you",
    "pesticides" : "icon",
    "pesticides text" : "No pesticides have been used in the process" },
    "Producers" : "El Vendrell farm is a family-owned and run business based in outskirts of Barcelona. It is committed to producing the finest possible fresh vegetables and fruits which have been grown using the most sustainable methods. They are committed to operate in the most environmentally-friendly way possible. Their approach so far has produced fruits and vegetables that are fresher, tastier, and more nutritious!"},
]
        response.send(productDetails);
  });
