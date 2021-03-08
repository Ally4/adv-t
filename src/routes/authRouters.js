import express from 'express';
import userController from '../controllers/userController';
import { registrationValidationError } from '../validators/signupValidation';
import { loginValidationError } from '../validators/loginValidation';
import middleware from '../middleware/protectRoutes';

const router = express();

/**
 * @swagger
 *
 * /api/v1/auth/register:
 *  post:
 *   summary: Sign up
 *   description: Register user
 *   tags:
 *   - User
 *   parameters:
 *   - in: body
 *     name: Bus
 *     description: Register new user
 *     schema:
 *       type: object
 *       properties:
 *        firstname:
 *         type: string
 *        lastname:
 *         type: string
 *        email:
 *         type: string
 *        dateofbirth:
 *         type: string
 *         format: date
 *        gender:
 *         type: string
 *   responses:
 *    201:
 *     description: registered Successfully
 *    400:
 *     description: Invalid inputs
 */
router.post('/register', registrationValidationError, userController.register);

/**
 * @swagger
 *
 * /api/v1/auth/login:
 *  post:
 *   summary: Log in
 *   description: Log in
 *   tags:
 *   - User
 *   parameters:
 *   - in: body
 *     name: Bus
 *     description: Enter your email and password
 *     schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *        password:
 *         type: string
 *   responses:
 *    201:
 *     description: Login Successfully
 *    401:
 *     description: Invalid email and password
 */
router.post('/login', loginValidationError, userController.login);

/**
 * @swagger
 *
 * /api/v1/auth/logout:
 *  post:
 *    summary: Logout
 *    description: Logs out an authenticated user
 *    tags:
 *    - User
 *    parameters:
 *    - in: header
 *      name: Authorization
 *      required: true
 *      type: string
 *      description: token to authorize
 *    responses:
 *     200:
 *      description:Logged out sucessfully
 */

router.post('/logout', middleware.protect, userController.logout);

export default router;
