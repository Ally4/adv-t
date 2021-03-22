import Joi from 'joi';

export const advertise = Joi.object().keys({
  assetName: Joi.string().required(),
  owner: Joi.string().required(),
  price: Joi.string().required(),
  mediaFile: Joi.string().required(),
}).options({ abortEarly: false });

export const advertiseValidationError = (req, res, next) => {
  const { error } = advertise.validate(req.body);
  // console.log(error);
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({
      status: 400,
      message: errors,
    });
  }
  next();
};
