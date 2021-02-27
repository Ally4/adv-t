import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import userRoute from './authRouters';
import advertiseRoute from './advertiseRouters';
import swaggerOptions from '../utils/swagger';

const router = express();

const swaggerDoc = swaggerJsdoc(swaggerOptions);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to advertise',
  });
});

router.use('/api/v1/auth', userRoute);
router.use('/api/v1/advertise', advertiseRoute);

router.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'The url you are looking for is not in our system',
  });
});

export default router;
