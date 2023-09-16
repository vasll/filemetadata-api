const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Define a multer storage for uploading files
const storage = multer.diskStorage({
    destination: (req, file, callback) => { callback(null, 'uploads/'); },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// Upload files route
router.post("/fileanalyse", upload.single('file'), (req, res) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).json({error: 'No file was uploaded'});
    }

    res.send('File uploaded!')
})

module.exports = router;
