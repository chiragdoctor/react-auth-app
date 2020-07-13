/** @format */

const config = {
	port: process.env.PORT || 8085,
	mongoURI: 'mongodb://127.0.0.1:27017/multi-user-app',
	JWTKey: 'THIS_IS_FROM_ME',
	CRYPTOKey: 'I_AM_THE_KEY_TO_CODE',
};
export default config;
