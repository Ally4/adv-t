import bcrypt from 'bcryptjs';
import bcrypts from 'bcrypt';

import Model from '../database/models';
import { cryptionToken, decryptionToken } from '../utils/jsonwebtoken';
import emails from '../utils/sendEmail';
import pwd from '../utils/randomPassword';
import theRole from '../utils/defaultRole';
import messages from '../mocks/mockMessages';

const { User } = Model;

class userController {
  static async register(req, res) {
    try {
      const rawPassword = pwd.generatePassword();
      const hashed = await bcrypts.hash(rawPassword, 12);
      const role = await theRole.generateDefault();
      const theUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashed,
        role,
        dateofbirth: req.body.dateofbirth,
        gender: req.body.gender,
      };

      const { email } = req.body;
      const doesExist = await User.findOne({
        where: { email },
      });
      if (doesExist) {
        res.status(409).json({
          status: 409,
          message: 'User with the provided email is already registered.',
        });
        return false;
      }
      const user = await User.create(theUser);
      const newUser = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        dateofbirth: user.dateofbirth,
        gender: user.gender,
      };
      const toSend = {
        userEmail: `${email}`,
        subject: 'Registration at advertise',
        message: messages.signupEmail(email, rawPassword),
      };
      emails.sendEmail(toSend);
      return res.status(201).json({
        status: 201,
        message: 'Inserted in the system successfully, checkin your email for the password on login',
        newUser,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({
        status: 401,
        message: 'Your email or must password must be wrong',
      });
    }
    const token = cryptionToken({ id: user.id });

    await User.update(
      { isLoggedIn: true },
      { where: { email: req.body.email } },
    );

    user.password = undefined;
    return res.status(200).json({
      status: 200,
      message: 'Logged in successfully',
      Token: token,
    });
  }

  static async logout(req, res) {
    try {
      if (req.user.isLoggedIn == true) {
        await User.update(
          { isLoggedIn: false },
          { where: { email: req.user.email } },
        );
        const user = await User.findOne({
          where: {
            email: req.user.email,
          },
        });

        const { isLoggedIn } = user;
        return res.status(200).json({
          message: 'Logout successfully',
          isLoggedIn,
        });
      }
      return res.status(200).json({
        message: "You're not logged in",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
}

export default userController;
