const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(cors());
app.use(express.json());


app.get("/staff", routes.getStaff);
app.get("/rides", routes.getRides);
app.get("/parks", routes.getParks);

app.post("/staff", routes.addStaff);

app.delete("/staff/:id", routes.deleteStaff);
app.delete("/rides/:parkid/:name", routes.deleteRide);
app.delete("/parks/:id", routes.deletePark);
app.delete("/dining/:name", routes.deleteFood);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});