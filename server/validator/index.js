import { body, validationResult } from 'express-validator';

const registerRules = () => {
	return [
		body('name', 'Name is required').not().isEmpty(),
		body('email', 'Email valid email address').isEmail(),
		body('password', 'Minimum 6 Characters are required')
			.isLength({ min: 6 })
			.custom((value, { req }) => {
				if (value !== req.body.password2) {
					// throw error if passwords do not match
					throw new Error("Passwords don't match");
				} else {
					return value;
				}
			}),
	];
};

const loginRules = () => {
	return [
		body('email', 'Email valid email address').isEmail(),
		body('password', 'Password is required').not().isEmpty(),
	];
};
const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map((err) =>
		extractedErrors.push({
			[err.param]: err.msg,
		})
	);
	return res.json({
		errors: extractedErrors,
	});
};

export { registerRules, loginRules, validate };
