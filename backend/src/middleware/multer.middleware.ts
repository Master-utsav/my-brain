import multer, { FileFilterCallback } from "multer";
import path from "path";
import { Request } from "express"; 
import dotenv from "dotenv"

dotenv.config();

// Storage for images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname, "../cloud/images"));
    cb(null, process.env.CLOUDINARY_IMAGE_PATH!);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});


const storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname, '../cloud/videos')); 
    cb(null, process.env.CLOUDINARY_VIDEO_PATH!);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});


const videoFileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const ext = path.extname(file.originalname).toLowerCase();

  if (ext === '.mp4' && file.mimetype === 'video/mp4') {
    cb(null, true); 
  } else {
    cb(new Error('Only MP4 videos are allowed!')); 
  }
};


export const uploadVideo = multer({
  storage: storageVideo,
  fileFilter: videoFileFilter,
});

export const upload = multer({ storage });
