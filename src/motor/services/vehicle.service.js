const db = require("../config/db.config");

const getVehicles = (id, timestamp) => {
    console.log(`Querying details of vehicle`, [id, timestamp]);

    let results = db.query(`WITH CTE AS (SELECT ROW_NUMBER() OVER (PARTITION BY "vehicleId" ORDER BY timestamp DESC) AS RN,`
                                + `"vehicleId" VEHICLEID,STATE,timestamp FROM PUBLIC."stateLogs" `
                                + `WHERE "vehicleId" = $1 AND timestamp <= $2 )`
                                + `SELECT v.ID,COALESCE(s.STATE, v.state) state,make, model,timestamp FROM CTE s,`
                                + `public.vehicles v WHERE RN = 1 and v.id=s.vehicleId`, [parseInt(id), timestamp])
    .catch(console.log)
    .then(result => result.rows);

    console.log(`Retrieved vehicle details from db`);
    return results;
};

const createVehicle = (vehicle) => {
    console.log(`Storing details of vehicle`, [vehicle]);
    return;
};

module.exports = {
  getVehicles,
  createVehicle,
};