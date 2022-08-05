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

app.post("/staff", routes.addStaff);  // insert operation

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});