
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;


\c reviews;

DROP TABLE IF EXISTS business, reviews, images;


CREATE TABLE business(
  b_id INTEGER UNIQUE NOT NULL,
  business_name varchar(20) PRIMARY KEY,
  claimed BOOLEAN DEFAULT 0,
  category varchar(20),
  start_date DATE NOT NULL,
  description TEXT
);


CREATE TABLE users(
  u_id INTEGER UNIQUE NOT NULL,
  user_name varchar(20) PRIMARY KEY,
  start_date DATE NOT NULL,
  friend_count SMALLINT DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  image_count INTEGER DEFAULT 0,
  location VARCHAR(30) NOT NULL,
  avatar_url VARCHAR(100) DEFAULT 'https://loremflickr.com/320/240',
)

CREATE TABLE reviews(
  r_id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  text TEXT NOT NULL,
  star_count SMALLINT NOT NULL,
  useful_count INTEGER DEFAULT 0,
  funny_count INTEGER DEFAULT 0,
  cool_count INTEGER DEFAULT 0,
  parent_id INTEGER REFERENCES reviews(r_id),
  child_id INTEGER REFERENCES reviews(r_id),
  business_id INTEGER REFERENCES business(b_id),
  user_id INTEGER REFERENCES users(u_id)
)

CREATE TABLE images(
  i_id SERIAL PRIMARY KEY,
  url VARCHAR(100) NOT NULL,
  caption VARCHAR(80) NOT NULL,
  reviews_id INTEGER REFERENCES reviews(r_id),
  user_id INTEGER REFERENCES users(u_id)
);