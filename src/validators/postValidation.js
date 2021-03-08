import Joi from 'joi';
import ResponseUtil from '../utils/response.util';

export const advertise = Joi.object.keys({
  asset: Joi.string().required(),
  owner: Joi.string().required(),
  price: Joi.string().required(),
  mediaFile: Joi.string(),
}).options({ abortEarly: false });

export const advertiseValidationError = (req, res, next) => {
  const { error } = advertise.validate(req.body);
  // console.log(error);
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
