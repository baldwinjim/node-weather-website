const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiamltYmFsZHdpbiIsImEiOiJjanN3cTZqdjUwNm00NDNycTUya3k1MDFqIn0.j86Kgue9Q_IpTdr-7nDn4w&limit=1'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services')
        } else if (body.features.length === 0)  {
            callback('No matching location!')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode