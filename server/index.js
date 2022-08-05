const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(cors());
app.use(express.json());

// GUEST VIEW
app.get("/guest", routes.getShop);

// STAFF VIEW
app.get("/staff", routes.getStaff);
app.get("/rides", routes.getRides);

app.post("/staff", routes.addStaff);

app.delete("/staff/:id", routes.deleteStaff);
app.delete("/rides/:ridename/:parkid", routes.deleteRide);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});