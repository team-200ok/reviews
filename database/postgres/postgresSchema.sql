
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;


\c reviews;

DROP TABLE IF EXISTS business, users, reviews, comments, images;


CREATE TABLE business (
  id SERIAL PRIMARY KEY,
  business_name VARCHAR(20) NOT NULL,
  claimed BOOLEAN DEFAULT 'f',
  category VARCHAR(20),
  business_date DATE NOT NULL,
 user_id INTEGER REFERENCES users(id),
  description TEXT
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(20),
  email VARCHAR(50) NOT NULL,
  user_date DATE NOT NULL,
  friend_count SMALLINT DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  image_count INTEGER DEFAULT 0,
  region VARCHAR(30),
  city VARCHAR(30) NOT NULL,
  avatar_url VARCHAR(100) DEFAULT 'https://loremflickr.com/320/240'
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review_date DATE NOT NULL,
  review_text TEXT NOT NULL,
  star_count SMALLINT NOT NULL,
  useful_count INTEGER DEFAULT 0,
  funny_count INTEGER DEFAULT 0,
  cool_count INTEGER DEFAULT 0,
  business_id INTEGER REFERENCES business(id),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE comments (
id SERIAL PRIMARY KEY,
comment_date DATE NOT NULL,
comment_text TEXT NOT NULL,
parent_id INTEGER REFERENCES reviews(id),
user_id INTEGER REFERENCES users(id)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url VARCHAR(100) NOT NULL,
  image_date DATE NOT NULL,
  caption VARCHAR(80) NOT NULL,
  reviews_id INTEGER REFERENCES reviews(id),
  user_id INTEGER REFERENCES users(id)
);