const pool = require("./db");

const getStaff = async (req, res) => {
    const allStaff = await pool.query("SELECT * FROM Staff_ID");
    res.json(allStaff.rows);
};

const getRides = async (req, res) => {
    const allRides = await pool.query("SELECT * FROM Ride_Info ORDER BY Name ASC, Park_ID ASC");
    res.json(allRides.rows);
};

const getParks = async (req, res) => {
    const allParks = await pool.query("SELECT * FROM Park");
    res.json(allParks.rows);
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

const deleteRide = async (req, res) => {
    const parkid = parseInt(req.params.parkid);
    const name = req.params.name;
    const ride = await pool.query("DELETE FROM Ride_Info WHERE Park_ID = $1 AND Name = $2", [parkid, name]);
    res.json(`${name} at park #${parkid} was deleted!`);
};

const deletePark = async (req, res) => {
    const { id } = req.params;
    const park = await pool.query("DELETE FROM Park WHERE ID = $1", [id]);
    res.json(`Park #${id} was deleted!`);
};

const deleteFood = async (req, res) => {
    const name = req.params.name;
    const ride = await pool.query("DELETE FROM Dining_Offer WHERE Name = $1", [name]);
    res.json(`${name} was deleted!`);
};

module.exports = { getStaff, getRides, getParks, addStaff, deleteStaff, deleteRide, deletePark, deleteFood };