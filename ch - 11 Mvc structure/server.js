const express = require('express');
require('./config/db.config');

const app = express();
const PORT = 8780;

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use('/', require('./routes/'));

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server is failed... Not started...😭😭", err);
        return;
    }

    console.log("Server is started successfully...😊😊 Bahut Badhiya...");
});