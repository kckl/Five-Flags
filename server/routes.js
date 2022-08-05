const pool = require("./db");

const getStaff = async (req, res) => {
    const allStaff = await pool.query("SELECT * FROM Staff_ID");
    res.json(allStaff.rows);
};

const addStaff = async (req, res) => {
    const { name, role } = req.body;
    const addStaff = await pool.query("INSERT INTO Staff_ID(Name, Role) VALUES($1, $2)", [name, role]);
    res.json(addStaff.rows[0]);
};

const deleteStaff = async (req, res) => {
    const { id } = req.params;
    const staff = await pool.query("DELETE FROM Staff_ID WHERE id = $1", [id]);
    res.json(`Staff #${id} was deleted!`);
};

const getRides = async (req, res) => {
    const allRides = await pool.query("SELECT * FROM Ride_Info");
    res.json(allRides.rows);
};

const deleteRide = async (req, res) => {
    const { name, parkid } = req.params;
    const ride = await pool.query("DELETE FROM Ride_Info WHERE Name = $1 AND Park_ID = $2", [name, parkid]);
    res.json(`The ride ${name} at park #${parkid} was deleted!`);
};

module.exports = { getStaff, addStaff, deleteStaff, getRides, deleteRide };