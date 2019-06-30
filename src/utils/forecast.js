// https://www.npmjs.com/package/request#requestoptions-callback
const request = require('request')

const forecast = (lat,long,callback) => {

    const forecastUrl = 'https://api.darksky.net/forecast/f0b83f026e412697495cc23f0393bd05/'+ lat + ',' + long

    request({url : forecastUrl, json : true}, (error,{body}) => {
        if(error){
            callback('unable toconnect to network',undefined)
        } else if(body.error){
            callback('invalid input',undefined)
        } else{
            callback(undefined, body.daily.data[0].summary +' There is currently '+body.currently.temperature+' degrees out. The high today is ' +body.daily.data[0].temperatureMax+' with a low of'+body.daily.data[0].temperatureMin+' There is a '+body.currently.precipProbability+'% chance of rain')
        }
    })

}

module.exports = forecast