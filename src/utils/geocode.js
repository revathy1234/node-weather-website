// https://www.npmjs.com/package/request#requestoptions-callback
const request = require('request')
const geocode = (address,callback) => {
    
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?type=address&access_token=pk.eyJ1IjoicmV2YXRoeXJhbTI4IiwiYSI6ImNqeDlpcG1jbzB3bGgzeW8xanZ5eWJlcW4ifQ.u3aR9ejCj0-SOx035Yx55Q&limit=1'

    request({url, json : true}, (error,{body}) => {
            if(error){
                callback('unable to connect to the network!',undefined)
            }else if(body.features.length === 0){
                callback('invalid input!',undefined)
            } else{
                callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],  
                location : body.features[0].place_name
            })
    }
})
}




module.exports = geocode