import express from 'express';

// import uploading from '../middleware/multer';

import advertiseController from '../controllers/advertiseController';
// import { advertiseValidationError } from '../validators/advertiseValidation';
import advertiseMiddleware from '../middleware/protectRoutes';
import { advertiseValidationError } from '../validators/advertiseValidation';

const router = express();

router.post('/post',
  // advertiseValidationError,
  // uploading,
  advertiseMiddleware.protect,
  advertiseValidationError,
  advertiseController.postAdvert);

export default router;
