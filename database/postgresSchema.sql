
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;


\c reviews;

DROP TABLE IF EXISTS business, reviews, images;


CREATE TABLE business(
  b_id INTEGER UNIQUE NOT NULL,
  business_name varchar(20) PRIMARY KEY,
  claimed BOOLEAN DEFAULT 0,
  category varchar(20),
  business_date DATE NOT NULL,
  description TEXT
);


CREATE TABLE users(
  u_id INTEGER UNIQUE NOT NULL,
  user_name varchar(20) PRIMARY KEY,
  user_date DATE NOT NULL,
  friend_count SMALLINT DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  image_count INTEGER DEFAULT 0,
  location VARCHAR(30) NOT NULL,
  avatar_url VARCHAR(100) DEFAULT 'https://loremflickr.com/320/240',
)

CREATE TABLE reviews(
  r_id SERIAL PRIMARY KEY,
  review_date DATE NOT NULL,
  review_text TEXT NOT NULL,
  star_count SMALLINT NOT NULL,
  useful_count INTEGER DEFAULT 0,
  funny_count INTEGER DEFAULT 0,
  cool_count INTEGER DEFAULT 0,
  business_id INTEGER REFERENCES business(b_id),
  user_id INTEGER REFERENCES users(u_id)
)

CREATE TABLE comments(
c_id SERIAL PRIMARY KEY,
comment_date DATE NOT NULL,
comment_text TEXT NOT NULL,
parent_id INTEGER REFERENCES reviews(r_id),
user_id INTEGER REFERENCES users(u_id)
)

CREATE TABLE images(
  i_id SERIAL PRIMARY KEY,
  image_url VARCHAR(100) NOT NULL,
  caption VARCHAR(80) NOT NULL,
  reviews_id INTEGER REFERENCES reviews(r_id),
  user_id INTEGER REFERENCES users(u_id)
);