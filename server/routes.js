const pool = require("./db");

// GUEST VIEW
const getShop = async (req, res) => {
    const allShop = await pool.query("SELECT name, category FROM Shop_Category ORDER BY name");
    res.json(allShop.rows);
};

const getRestaurant = async (req, res) => {
    const { id } = req.params;
    const allRestaurant = await pool.query("SELECT d.name, price, cuisine, park_id FROM Dining_offer d, Restaurant r WHERE d.name=r.name AND park_id =$1 ORDER BY Price", [id]);
    res.json(allRestaurant.rows);
};

const getFastfood = async (req, res) => {
    const { id } = req.params;
    const allFastfood = await pool.query("SELECT d.name, price, type, park_id FROM Dining_offer d, FastFood f WHERE d.name=f.name AND park_id =$1 ORDER BY Price", [id]);
    res.json(allFastfood.rows);
};

const getHours = async (req, res) => {
    const { id } = req.params;
    const allHour = await pool.query("SELECT p.id, p.city, p.country, ph.hours FROM Park p INNER JOIN Park_Hours ph ON p.id=ph.park_id WHERE p.id = $1", [id]);
    res.json(allHour.rows[0]);
};

const getTicketInfo = async (req, res) => {
    const allTicketInfo = await pool.query("SELECT * FROM Type_Price ORDER BY Price");
    res.json(allTicketInfo.rows);
};

const getHotel = async (req, res) => {
    const allHotel = await pool.query("SELECT address, brand, price, park_id FROM Hotel_LocatedNear ORDER BY Park_ID");
    res.json(allHotel.rows);
};

// STAFF VIEW
// GET routes
const getStaff = async (req, res) => {
    const allStaff = await pool.query("SELECT * FROM Staff_ID s LEFT JOIN Staff_Wage sw ON s.Role = sw.Role");
    res.json(allStaff.rows);
};

const getRides = async (req, res) => {
    const allRides = await pool.query("SELECT * FROM Ride_Info ORDER BY Park_ID ASC, Name ASC");
    res.json(allRides.rows);
};

const getParks = async (req, res) => {
    const allParks = await pool.query("SELECT * FROM Park");
    res.json(allParks.rows);
};

const getFood = async (req, res) => {
    const allFood = await pool.query("SELECT * FROM Dining_Offer ORDER BY Park_ID ASC, Name ASC");
    res.json(allFood.rows);
};

const getTicketSales = async (req, res) => {
    const allTicketSales = await pool.query("SELECT type, count(guest_id) FROM guest_visit GROUP BY type ORDER BY type");
    res.json(allTicketSales.rows);
};

const getLoyal = async (req, res) => {
    const allLoyal = await pool.query("SELECT Guest_ID, Name, Count(Park_ID) AS visits FROM Guest_Visit gv INNER JOIN Guest g ON gv.Guest_ID = g.ID GROUP BY Guest_ID, Name HAVING Count(Park_ID) >= 3 ORDER BY Count(Park_ID) DESC");
    res.json(allLoyal.rows);
};
    
const getGlobalist = async (req, res) => {
    const allGlobalist = await pool.query("SELECT * FROM Guest g WHERE NOT EXISTS ((SELECT p.ID FROM Park p) EXCEPT (SELECT gv.Park_ID FROM Guest_Visit gv WHERE g.ID = gv.Guest_ID)) ORDER BY g.ID");
    res.json(allGlobalist.rows);
};

const getThrillingRide = async (req, res) => {
    const thrillingRide = await pool.query("SELECT * FROM ride_info WHERE thrill_level > (SELECT AVG(thrill_level) FROM (SELECT COUNT(thrill_level), thrill_level FROM ride_info GROUP BY thrill_level) AS count) ORDER BY Park_ID ASC");
    res.json(thrillingRide.rows);
};

// POST routes
const addStaff = async (req, res) => {
    const { staffName, role } = req.body;
    const addStaff = await pool.query("INSERT INTO Staff_ID(Name, Role) VALUES($1, $2)", [staffName, role]);
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
    console.log(req.params);
    console.log(req.body);
    const result = await pool.query(
    "UPDATE dining_offer SET price = $3, park_ID = $2 where name = $1", 
    [req.params.name, req.body.park_id, req.body.price]);
    res.json("Food establishment was updated!");
}

const updateRide = async (req, res) => {
    const {name} = req.params.name;
    const {park_id} = req.params.park_id;
    const {thrill, capacity} = parseInt(req.body);

    const result = await pool.query(
        "UPDATE Ride_Info SET thrill_level = $1, capacity = $2 WHERE name = $3 AND park_id = $4",
        [thrill, capacity, name, park_id]);
    res.json("Ride was updated!") ;
}

// DELETE routes
// const deleteStaff = async (req, res) => {
//     const { id } = req.params;
//     const staff = await pool.query("DELETE FROM Staff_ID WHERE id = $1", [id]);
//     res.json(`Staff #${id} was deleted!`);
// };

const deletePark = async (req, res) => {
    const { id } = req.params;
    const park = await pool.query("DELETE FROM Park WHERE ID = $1", [id]);
    res.json(`Park #${id} was deleted!`);
};

// const deleteFood = async (req, res) => {
//     const name = req.params.name;
//     const ride = await pool.query("DELETE FROM Dining_Offer WHERE Name = $1", [name]);
//     res.json(`${name} was deleted!`);
// };

module.exports = { 
    getShop, 
    getRestaurant,
    getFastfood,
    getHours,
    getTicketInfo,
    getHotel,
    getStaff, 
    getRides, 
    getParks, 
    getFood, 
    getTicketSales,
    getThrillingRide,
    addStaff, 
    addRide, 
    addFood, 
    updateFood,
    updateRide, 
    // deleteStaff, 
    // deleteRide, 
    getLoyal,
    getGlobalist,
    addStaff, 
    addRide, 
    addFood, 
    updateFood, 
    // deleteStaff, 
    deletePark, 
    // deleteFood 
};