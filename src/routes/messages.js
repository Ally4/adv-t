import express from 'express';
import messagesController from '../controllers/messagesController';
import loggingMiddleware from '../middleware/protectRoutes';

const router = express();

router.post('/:receiver',
  loggingMiddleware.protect,
  messagesController.sendMessages);

router.get('/get/:id', messagesController.getMessage);

router.get('/gets',
  loggingMiddleware.protect,
  messagesController.getMessages);

router.put('/edit/:id', messagesController.editMessage);

router.delete('/delete/:id', messagesController.deleteMessage);

export default router;
