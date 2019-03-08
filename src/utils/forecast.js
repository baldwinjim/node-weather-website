const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/01763728ae64c29279942ea3f81f426b/' + lat + ',' + long

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback(body.error)
        } else {
            callback(undefined, body.daily.data[0].summary + '  It is currently ' + body.currently.temperature + ' degrees out.  There is a ' + body.currently.precipProbability * 100 + '% chance of rain.') 
        }
    })
}

module.exports = forecast