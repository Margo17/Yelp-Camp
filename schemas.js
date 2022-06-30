const Joi = require('joi');

// Not a mongoose schema, this validates data before saving with mongoose
module.exports.campgroundSchema = Joi.object({
	campground: Joi.object({
		title: Joi.string().required(),
		price: Joi.string().required().min(0),
		// image: Joi.string().required(),
		location: Joi.string().required(),
		description: Joi.string().required(),
	}).required(),
});

module.exports.reviewSchema = Joi.object({
	review: Joi.object({
		rating: Joi.number().min(1).max(5).required(),
		body: Joi.string().required(),
	}).required(),
});
