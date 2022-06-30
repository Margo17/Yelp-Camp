const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10;
		const camp = new Campground({
			author: '62b99ccf7d0a7ae216d09208',
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quia quod excepturi at magnam, ut repellat corrupti, exercitationem natus ratione porro obcaecati aperiam, neque sit nesciunt. Voluptates totam alias magnam?',
			price,
			images: [
				{
					url: 'https://res.cloudinary.com/cloudisimus/image/upload/v1656609801/YelpCamp/mhndbk7kntln9gr83mhj.jpg',
					filename: 'YelpCamp/mhndbk7kntln9gr83mhj',
				},
				{
					url: 'https://res.cloudinary.com/cloudisimus/image/upload/v1656609801/YelpCamp/dtct13aunztegnjearpx.jpg',
					filename: 'YelpCamp/dtct13aunztegnjearpx',
				},
			],
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
