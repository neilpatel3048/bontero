var admin = require("firebase-admin");
//get the databse for logins
var db = admin.database();
var ref = db.ref("product_details");


const  getFn = (request, response)=>
{
    ref.orderByChild("product_id")
    .on("value", (data)=>{
        response.send(data.val());
    });

}

const search = (request, response) =>  {
    const search = request.body.search;
    ref.orderByChild("Producers").equalTo(search).on("value", (data) => {
        res.send(data.val());
     });

  }

module.exports = {
get :fetFn,
search : searchFn
}