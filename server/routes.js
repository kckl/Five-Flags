const pool = require("./db");

// GUEST VIEW
const getShop = async (req, res) => {
    const allShop = await pool.query("SELECT * FROM Shop_Category");
    res.json(allShop.rows);
};

// STAFF VIEW
const getStaff = async (req, res) => {
    const allStaff = await pool.query("SELECT * FROM Staff_ID");
    res.json(allStaff.rows);
};

const addStaff = async (req, res) => {
    const { name, role } = req.body;
    const addStaff = await pool.query("INSERT INTO Staff_ID(Name, Role) VALUES($1, $2)", [name, role]);
    res.json(addStaff.rows[0]);
};

module.exports = { getShop, getStaff, addStaff };