const pool = require("./db");

// GUEST VIEW
const getShop = async (req, res) => {
    const allShop = await pool.query("SELECT * FROM Shop_Category");
    res.json(allShop.rows);
};

// STAFF VIEW
// GET routes
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

const getFood = async (req, res) => {
    const allFood = await pool.query("SELECT * FROM Dining_Offer");
    res.json(allFood.rows);
};

const getLoyal = async (req, res) => {
    const { num } = req.params;
    const allLoyal = await pool.query("SELECT Guest_ID, Name, Count(Park_ID) AS Visits FROM Guest_Visit gv INNER JOIN Guest g ON gv.Guest_ID = g.ID GROUP BY Guest_ID, Name HAVING Count(Park_ID) >= 3 ORDER BY Count(Park_ID) DESC");
    res.json(allLoyal.rows);
};

// POST routes
const addStaff = async (req, res) => {
    const { name, role } = req.body;
    const addStaff = await pool.query("INSERT INTO Staff_ID(Name, Role) VALUES($1, $2)", [name, role]);
    res.json(addStaff.rows[0]);
};

const addRide = async (req, res) => {
    const { rideName, ridePark, thrillLevel, capacity } = req.body;
    const addRide = await pool.query("INSERT INTO Ride_Info VALUES($1, $2, $3, $4)", [rideName, ridePark, thrillLevel, capacity]);
    res.json(addRide.rows[0]);
};

const addFood = async (req, res) => {
    const { foodName, foodPark, price } = req.body;
    const addFood = await pool.query("INSERT INTO Dining_Offer VALUES($1, $3, $2)", [foodName, foodPark, price]);
    res.json(addFood.rows[0]);
};

// PUT routes
const updateFood = async (req, res) => {
    const name = req.params;

    // const name = req.body.name;
    const price = req.body.price;
    const park_id = req.body.park_id;

    const result = await pool.query("UPDATE Dining_Offer SET Price = $1, Park_ID = $2 WHERE Name = $3", [price, parkid, name]);
    res.json("Food establishment was updated!");
}

// DELETE routes
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

module.exports = { 
    getShop, 
    getStaff, 
    getRides, 
    getParks, 
    getFood, 
    getLoyal,
    addStaff, 
    addRide, 
    addFood, 
    updateFood, 
    deleteStaff, 
    deleteRide, 
    deletePark, 
    deleteFood 
};
