const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//Directory static default.
app.use(express.static(path.join(__dirname + "/public")));




app.listen(port, () => {
    console.log("Server running on port 3000");
})