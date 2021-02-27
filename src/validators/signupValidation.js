import Joi from 'joi';

export const signup = Joi.object().keys({
  firstname: Joi.string().min(5).max(15).required(),
  lastname: Joi.string().min(5).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(15).required(),
  dateofbirth: Joi.string().min(5).max(15).required(),
  gender: Joi.string().min(3).max(15).required(),
}).options({ abortEarly: false });

export const registrationValidationError = (req, res, next) => {
  const { error } = signup.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};
