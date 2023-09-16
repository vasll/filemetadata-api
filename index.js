const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const frontendRoutes = require('./routes/frontend');
require('dotenv').config()

const app = express();

// Middleware
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// Routes
app.use('/api', apiRoutes)
app.use('/', frontendRoutes)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
