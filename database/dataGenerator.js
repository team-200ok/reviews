// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

const sampleData = {
  reviews: [],
  businesses: [],
  photos: [],
};

for (let i = 0; i < 100; i += 1) {
  const reviewId = faker.random.alphaNumeric(22);
  const businessId = faker.random.alphaNumeric(22);
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
  const photo = {
    photo_id: faker.random.alphaNumeric(22),
    review_id: reviewId,
    caption: faker.lorem.words(),
    label: faker.random.arrayElement(['food', 'drink', 'menu', 'inside', 'outside']),
    imageUrl: faker.image.food(),
  };
  const business = {
    business_id: businessId,
    name: faker.company.companyName(),
  };
  sampleData.reviews.push(review);
  sampleData.businesses.push(business);
  sampleData.photos.push(photo);
}

module.exports = {
  sampleData,
};
