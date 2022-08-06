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
app.get("/parks", routes.getParks);
app.get("/food", routes.getFood);

// complex queries
app.get("/loyalty", routes.getLoyal);

app.post("/staff", routes.addStaff);
app.post("/rides", routes.addRide);
app.post("/food", routes.addFood);

app.put("/food/:name", routes.updateFood);

app.delete("/staff/:id", routes.deleteStaff);
app.delete("/rides/:parkid/:name", routes.deleteRide);
app.delete("/parks/:id", routes.deletePark);
app.delete("/dining/:name", routes.deleteFood);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});