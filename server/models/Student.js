/** @format */

import { Schema, model } from 'mongoose';
import { genSaltSync, hashSync } from 'bcrypt';

const StudentSchema = new Schema(
	{
		role: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		hashedPassword: {
			type: String,
			required: 'Password is requie',
		},
	},
	{ timestamps: true }
);

StudentSchema.virtual('password')
	.set(function (password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashedPassword = this.encryptPass(password, this.salt);
	})
	.get(function () {
		return this._password;
	});

// Method
StudentSchema.methods = {
	makeSalt: function () {
		const saltRounds = 10;
		return genSaltSync(saltRounds);
	},
	encryptPass: function (password, salt) {
		if (!password) return '';
		try {
			return hashSync(password, salt);
		} catch (err) {
			return err;
		}
	},
};

export default model('Student', StudentSchema, 'students');
