var admin = require("firebase-admin");

var db = admin.database();
var ref = db.ref("categories");

const getFn = (request, response) => {
    ref.orderByChild("category_id")
    .on("value", (data) => {
        response.send(data.val());
    });
}

const searchFn = (req, res) => {
    const search = req.body.search;
    ref.orderByChild("category_name").equalTo(search).on("value", (data) => {
        res.send(data.val());
  });
};


module.exports =  {
    get : getFn, 
    search : searchFn
}
