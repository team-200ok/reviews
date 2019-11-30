var faker = require('faker');

dateGenerator = () => {
  var year = Math.floor(Math.random() * 2) + 2017;
  var month = Math.floor(Math.random() * 11) + 1;
  var day = Math.floor(Math.random() * 27) + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};

stringPicker = () => {
  // label: string, one of 'food', 'drink', 'menu', 'inside', 'outside'
  var options = ['food', 'drink', 'menu', 'inside', 'outside'];
  var num = Math.floor(Math.random() * 4);
  return options[num];
};

var sampleData = {
  reviews: [],
  businesses: [],
  photos: []
};

for (i = 0; i < 5; i++) {
  var reviewId = faker.random.alphaNumeric(22);
  var businessId = faker.random.alphaNumeric(22);
  var review = {
    review_id: reviewId,
    business_id: businessId,
    user: faker.name.firstName(),
    stars: Math.floor(Math.random() * 4) + 1,
    date: dateGenerator(),
    text: faker.lorem.paragraphs(),
    useful: Math.floor(Math.random() * 5),
    funny: Math.floor(Math.random() * 5),
    cool: Math.floor(Math.random() * 5)
  };
  var photo = {
    photo_id: faker.random.alphaNumeric(22),
    review_id: reviewId,
    caption: faker.lorem.words(),
    label: stringPicker(),
    imageUrl: faker.image.food()
  };
  var business = {
    business_id: businessId,
    name: faker.company.companyName()
  }
  // push the object to sampleData
  sampleData.reviews.push(review);
  sampleData.businesses.push(business);
  sampleData.photos.push(photo);
}
