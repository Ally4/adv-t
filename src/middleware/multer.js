import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './src/uploadedFile');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname + 'uploadedWell');
  },
});

const theUploads = multer({
  storage: storage,
});

const InUploads = theUploads.fields([{ name: 'theImage', maxCount: 2 } ]);

export default InUploads;