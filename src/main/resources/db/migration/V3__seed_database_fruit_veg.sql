INSERT INTO produce (image_url, name, description, food_type)
values ('https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2010/11/cuddlingcarrots.jpg',
 'Cuddling carrots', 'Two carrots embracing', 'Vegetable'),
( 'https://static.boredpanda.com/blog/wp-content/uploads/2017/01/fruit-vegetables-in-unusual-shapes-8-587380aab7e49__700.jpg','Soup Bath Carrot',
'Carrot in a bowl of soup.', 'Vegetable'), ('http://earthporm.com/wp-content/uploads/2015/07/unusual-shape-fruit-vegetables-3__605.jpg', 'Gangsta Carrot'
, 'A.K.A 50 Cents a pound', 'Vegetable'), ('https://i1.wp.com/pulptastic.com/wp-content/uploads/2014/03/DXamZhK.jpg?w=662', 'Petrified Pepper Pals', 'They just watched season 8 of Game of Thrones', 'Vegetable')
, ('https://i.pinimg.com/736x/7b/7c/dc/7b7cdc6b3b5a1fbc575cb27ca6d838e4.jpg', 'The Toenip', 'Veggie by the foot', 'Vegetable'), ('https://www.wowamazing.com/wp-content/uploads/2015/05/odd5.jpg', 'Sour Granny', 'Grandma got into the warheads again.', 'Fruit'),
('https://i.smalljoys.me/2018/12/_20-funny-fruits-and-vegetables-looking-exactly-like-something-else-12-628x1024.jpg?resize=650%2C1060&ssl=1&strip=all', 'Happy Tater Boy', 'Poor guy thinks that pot of boiling water is a hot tub.', 'Vegetable'),
('https://www.askideas.com/media/17/Radish-In-Bathtub-Funny-Vegetable-Picture.jpg', 'Soup Bath Radish', 'Cousin to Soup Bath Carrot', 'Vegetable');
INSERT INTO comments (produce_id, description, rating)
values (2,'This is so cute!',4), (2, 'Not so cute, kind of gross.', 1), (1, 'This is a test for the produce id.', 5);

