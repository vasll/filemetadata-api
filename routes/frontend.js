// Contains the routes on the '/' path
const express = require('express');
const router = express.Router();

// Serve the index.html file
router.get("/", (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
})

module.exports = router;