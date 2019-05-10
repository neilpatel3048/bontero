var admin = require("firebase-admin");
//get the databse for logins
var db = admin.database();
var ref = db.ref("events");




 const  getFn = (request, response)=>
    {
        ref.orderByChild("event_id")
        .on("value", (data)=>{
            response.send(data.val());
        });
    
    }

    const searchFn = function(request, response)
    {
        const search = request.body.search;
        ref.orderByChild("event_id").equalTo(search).on(val());
        response.send(data.val());
    
    }
    



module.exports = {
    get :fetFn,
    search : searchFn
}