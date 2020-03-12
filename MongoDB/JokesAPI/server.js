const express = require('express'),
    app = express(),
    port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/config/db.config");
require("./server/routes/jokes.routes")(app);