const vehicleService = require("../services/vehicle.service");
const moment = require('moment');
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 600 });

const getVehicles = (req, res) => {
  console.log(`Fetching details of vehicle`, [req.params, req.query.timestamp]);
  try {
    let key = req.params.vehicleId + req.query.timestamp;
    let result = myCache.get(key);
    if (result == null) {
       result = vehicleService.getVehicles(req.params.vehicleId,
            req.query.timestamp ? toTimeZone(req.query.timestamp) : moment().format("YYYY-MM-DD HH:mm:ss Z"))
            .then(result => {
                myCache.set(key, result, 60);
                res.status(200).json(result);
            });
    } else {
        console.log(`Got details from cache`, [req.params]);
        res.status(200).json(result)
    }
  } catch (err) {
     console.log(err);
     res.sendStatus(500);
   }
};

const storeVehicles = (req, res) => {
    vehicleService.createVehicle(req.body).then(result => {
        res.status(201).json(result);
    });
};

function toTimeZone(time) {
    var format = 'YYYY-MM-DD HH:mm:ss';
    return moment(time, format).format(format);
}


module.exports = {
  getVehicles,
  storeVehicles,
};