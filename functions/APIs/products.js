var admin = require("firebase-admin")

var db= admin.database();
var ref = db.ref("products");

const getFn = (request, response) => {
    ref.orderByChild("product_id")
    .on("value", (data) => {
        response.send(data.val());
    });


    };


const search = (req, res) => {
    const search = req.body.search;
    ref.orderByChild("product_name").equalTo(search).on("value", (data) => {
        res.send(data.val());
  });
};





module.exports = {
get : getFn,
search : search


}