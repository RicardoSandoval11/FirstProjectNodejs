import multer from "multer";
import path from 'path';
import shortid from 'shortid';

const filesFilter = function (request, file, callback) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif',  'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.mimetype)) {
      const error = new Error('Invalid file type. Only JPEG, PNG, GIF, PDF and DOCX are allowed.');
      error.code = 'INVALID_FILE_TYPE';
      return callback(error);
    }
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif','.pdf', '.docx'];
    const extension = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      const error = new Error(`Invalid file extension. Only ${allowedExtensions.join(', ')} are allowed.`);
      error.code = 'INVALID_FILE_EXTENSION';
      return callback(error);
    }
    callback(null, true);
  };

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        // la siguiente linea se ejecuta si el archivo fue subido correctamente
        callback(null ,'./public/uploads/');
    },
    filename: function(request, file, callback){
        callback(null, shortid.generate() + path.extname(file.originalname));
    },
    fileFilter: filesFilter
});

// sirve para quese usen las configuraciones que se acaban de realizar
const upload = multer({ storage });

export default upload;