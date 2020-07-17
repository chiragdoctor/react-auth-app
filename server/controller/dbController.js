import { connect } from 'mongoose';
import config from '../config/default';

export default async () => {
	try {
		const URI = config.mongoURI;
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		};
		await connect(URI, options);
		console.log(`Database is connected with the app 🔥🔥🔥`);
	} catch (err) {
		console.log('MongoErr :>> ', err);
	}
};
