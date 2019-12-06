// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

const sampleData = {
  reviews: [],
  businesses: [],
  photos: [],
};

const photoList = [
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/2.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/650x350.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/DSC07278.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/Jammu-and-Kashmir.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/ctyp-nordic-state-fair-new.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/delish-190801-churro-chips.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/download.jpeg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/gettyimages-635912088-612x612.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/images+(1).jpeg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/images+(2).jpeg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/images+(3).jpeg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/images.jpeg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/o+(1).jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/o.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/oatmeal.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/pexels-photo-1624487.jpeg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/prawn_stir-fry_with_37431_16x9.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/shutterstock.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/starters.jpg',
  'https://yumnoms.s3-us-west-1.amazonaws.com/photos/thanksgiving-dinner.jpg',
];

for (let i = 0; i < 100; i += 1) {
  const businessId = faker.random.alphaNumeric(22);
  const business = {
    business_id: businessId,
    name: faker.company.companyName(),
  };
  sampleData.businesses.push(business);
  for (let j = 0; j < 10; j += 1) {
    const reviewId = faker.random.alphaNumeric(22);
    const review = {
      review_id: reviewId,
      business_id: businessId,
      user: faker.name.firstName(),
      stars: Math.floor(Math.random() * 4) + 1,
      date: faker.date.past(3),
      text: faker.lorem.paragraphs(),
      useful: Math.floor(Math.random() * 5),
      funny: Math.floor(Math.random() * 5),
      cool: Math.floor(Math.random() * 5),
    };
    sampleData.reviews.push(review);
    for (let k = 0; k < Math.floor(Math.random() * 4); k += 1) {
      const photo = {
        photo_id: faker.random.alphaNumeric(22),
        review_id: reviewId,
        caption: faker.lorem.words(),
        label: faker.random.arrayElement(['food', 'drink', 'menu', 'inside', 'outside']),
        imageUrl: photoList[Math.floor(Math.random() * (photoList.length - 1))],
      };
      sampleData.photos.push(photo);
    }
  }
}

module.exports = {
  sampleData,
};
