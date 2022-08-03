const pool = require("./db");

const getStaff = async (req, res) => {
    const allStaff = await pool.query("SELECT * FROM Staff_ID");
    res.json(allStaff.rows);
};

module.exports = { getStaff };