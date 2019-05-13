var admin = require("firebase-admin")

var db= admin.database();
var ref = db.ref("registration");

const getFn = (request, response) => {
    ref.orderByChild("username")
    .on("value", (data)=>{
        response.send(data.val());
    });


    };

    const search = (req, res) => {
        const search = req.body.search;
        ref.orderByChild("username").equalTo(search).on("value", (data) => {
            res.send(data.val());
      });
    };