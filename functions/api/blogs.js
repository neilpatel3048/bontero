var cors = require ('cors')({origin: true });
var admin = require("firebase-admin");

var db = admin.database();
var ref = db.ref("blogs");

const getFn = (request, response) => {
    //CORS
    return cors(request, response, () => {
        ref.orderByChild("publish_date").on("value", (data) => {
        response.send(data.val());
        });
    });
};

const searchFn = (req, res) => {
    //CORS
    return cors(request, response, () => {
        const search = req.body.search;
        ref.orderByChild("blog_title").equalTo(search).on("value", (data) => {
        res.send(data.val());
        });
    })
};


module.exports =  {
    get : getFn, 
    search : searchFn
}
