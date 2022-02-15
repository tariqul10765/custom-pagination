/**
 * NODEJS API
 * DATABASE MYSQL
 * VERSION 1.0.0
 */
const express = require("express");

// Cross Unblocked File..
const cors = require('cors');

/**
 *  Router File Import
 */
const userRoutes = require('./routes/user');


/**
 * MAIN APP CONFIG
 */

const app = express();
app.use(express.json());
app.use(cors())


/**
 * MAIN BASE ROUTER WITH IMPORTED ROUTES
 */
app.use('/api/user', userRoutes);

/**
 * MAIN BASE GET PATH
 */
app.get('/', (req, res) => {
    res.send('<div style="width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center"><h1 style="color: blueviolet">API RUNNING...</h1></div>')
})


// server listen

app.listen(process.env.PORT || 4000, () => {
    console.log('Server has started on PORT 3000');
});
