import Joi from '@hapi/joi';
import ResponseUtil from '../utils/response.util';

export const advertise = Joi.object().keys({
  owner: Joi.string().min(5).max(15).required()
    .messages({
      'any.required': 'Owner is required',
      'string.empty': 'Owner is not allowed to be empty',
    }),
  type: Joi.string().min(5).max(15).required(),
  nameofproduct: Joi.string().email().required(),
  price: Joi.string().min(3).max(15).required(),
}).options({ abortEarly: false });

export const advertiseValidationError = (req, res, next) => {
  const { error } = advertise.validate(req.body);
  console.log(error);
  if (error) {
    const errors = error.details.map((err) => err.message);
    ResponseUtil.setError(400, errors);
    return ResponseUtil.send(res);
    // return res.status(400).json({
    //   status: 400,
    //   message: errors,
    // });
  }
  next();
};
