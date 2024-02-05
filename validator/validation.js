const Joi = require('joi');
const validate = {}

validate.validateParams = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
  
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
  
      next();
    };
  };
  
  validate.getVoteCount = Joi.object({
    topic: Joi.string().required()
  });

  validate.createTopic = Joi.object({
    topic: Joi.string().required(),
    options: Joi.array().items(joi.string()).required()
  });
  validate.castVote = Joi.object({
    topic: Joi.string().required(),
    options: Joi.string().required()
  });

  module.exports = validate;