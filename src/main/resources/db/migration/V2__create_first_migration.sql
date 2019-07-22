CREATE TABLE produce(
id SERIAL PRIMARY KEY,
image_url TEXT NOT NULL,
name VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
type VARCHAR(255) NOT NULL,
user_id INTEGER REFERENCES users(id)
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
produce_id INTEGER REFERENCES produce(id),
description TEXT,
rating INTEGER NOT NULL
);