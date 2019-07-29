INSERT INTO produce (image_url, name, description, food_type)
values ('https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2010/11/cuddlingcarrots.jpg',
 'Cuddling carrots', 'Two carrots embracing', 'Vegetable'),
( 'https://static.boredpanda.com/blog/wp-content/uploads/2017/01/fruit-vegetables-in-unusual-shapes-8-587380aab7e49__700.jpg','Soup Bath Carrot',
'Carrot in a bowl of soup.', 'Vegetable');
INSERT INTO comments (produce_id, description, rating)
values (1,'This is so cute!',4), (2, 'Not so cute, kind of gross.', 1);

