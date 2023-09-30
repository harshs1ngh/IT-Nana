const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use("/", express.static(__dirname + "/"));
app.listen(port, () => `Server running on port ${port}`);
