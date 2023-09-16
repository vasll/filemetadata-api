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
router.post("/fileanalyse", upload.single('upfile'), (req, res) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).json({error: 'No file was uploaded'});
    }

    res.json({
		name: uploadedFile.originalname, 
		type: uploadedFile.mimetype, 
		size: uploadedFile.size}
	)
})

module.exports = router;
