const faker = require('faker');


const dateGenerator = () => {
  const year = Math.floor(Math.random() * 2) + 2017;
  let month = Math.floor(Math.random() * 11) + 1;
  let day = Math.floor(Math.random() * 27) + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};

const stringPicker = () => {
  // label: string, one of 'food', 'drink', 'menu', 'inside', 'outside'
  const options = ['food', 'drink', 'menu', 'inside', 'outside'];
  const num = Math.floor(Math.random() * 4);
  return options[num];
};

const sampleData = {
  reviews: [],
  businesses: [],
  photos: [],
};

for (let i = 0; i < 5; i += 1) {
  const reviewId = faker.random.alphaNumeric(22);
  const businessId = faker.random.alphaNumeric(22);
  const review = {
    review_id: reviewId,
    business_id: businessId,
    user: faker.name.firstName(),
    stars: Math.floor(Math.random() * 4) + 1,
    date: dateGenerator(),
    text: faker.lorem.paragraphs(),
    useful: Math.floor(Math.random() * 5),
    funny: Math.floor(Math.random() * 5),
    cool: Math.floor(Math.random() * 5),
  };
  const photo = {
    photo_id: faker.random.alphaNumeric(22),
    review_id: reviewId,
    caption: faker.lorem.words(),
    label: stringPicker(),
    imageUrl: faker.image.food(),
  };
  const business = {
    business_id: businessId,
    name: faker.company.companyName(),
  };
  // push the object to sampleData
  sampleData.reviews.push(review);
  sampleData.businesses.push(business);
  sampleData.photos.push(photo);
}

const insertSampleData = () => {
  // do something
};
