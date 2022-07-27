const multer= require('multer');
const path= require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req, file, cb) => {
        let nameFile = Date.now() + path.extname(file.originalname);
        cb(null, nameFile);
    }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;