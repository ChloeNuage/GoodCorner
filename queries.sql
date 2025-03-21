PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS ad;
DROP TABLE IF EXISTS ad_tag;
DROP TABLE IF EXISTS category_tag;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS tag;


CREATE TABLE category
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL
);

INSERT INTO category (name) VALUES
('Objet'),
('Vehicule'),
('Électronique');

CREATE TABLE ad
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT,
	description TEXT,
	owner TEXT,
	price INT,
	createdAt DATE,
  image TEXT,
  city TEXT,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id)
);


INSERT INTO AD ( title, description , owner, price, createdAt, image, city, category_id) VALUES
    ('Vélo à vendre', 'Vélo en bon état, peu servi', 'john.doe@gmail.com', 150, '2024-03-19', NULL, 'Paris', 2),
    ('Voiture d''occasion', 'Voiture très bien entretenue', 'jane.smith@gmail.com', 5000, '2024-03-18', 'https://example.com/image1.jpg', 'Lyon', 2),
    ('Stylo plume', 'Stylo plume Parker, encre bleue', 'writer.seller@gmail.com', 15, '2024-09-01', NULL, 'Bordeaux', 1),
    ('Chaise pliante', 'Chaise pliante pratique pour camping', 'camping.seller@gmail.com', 30, '2024-09-01', NULL, 'Paris', 1),
    ('Lampe de chevet', 'Lampe LED moderne, plusieurs couleurs', 'home.seller@gmail.com', 35, '2024-09-01', NULL, 'Lyon', 1),
    ('Table en bois massif', 'Table en chêne, très solide', 'woodworker@gmail.com', 200, '2024-03-14', NULL, 'Bordeaux', 1),
    ('Smartphone Android', 'Samsung Galaxy S21, très bon état', 'phone.seller@gmail.com', 500, '2024-03-13', 'https://example.com/image3.jpg', 'Paris', 3),
    ('Montre connectée', 'Apple Watch Series 7, fonctionne parfaitement', 'watch.seller@gmail.com', 250, '2024-03-12', NULL, 'Lyon', 3),
    ('Console de jeux', 'PlayStation 5, avec deux manettes', 'gamer@gmail.com', 450, '2024-03-11', 'https://example.com/image4.jpg', 'Bordeaux', 3),
    ('Paquet de stylos', 'Lot de 10 stylos Bic', 'office.seller@gmail.com', 5, '2024-02-10', NULL, 'Paris', 1),
    ('Câble USB-C', 'Chargeur rapide USB-C 2m', 'tech.seller@gmail.com', 12, '2024-02-15', NULL, 'Lyon', 3),
    ('Sac à dos', 'Sac à dos 20L, idéal pour la randonnée', 'sport.seller@gmail.com', 35, '2024-02-20', NULL, 'Bordeaux', 1),
    ('Aspirateur robot', 'Roomba i7, fonctionne très bien', 'clean.seller@gmail.com', 300, '2024-03-08', NULL, 'Bordeaux', 3),
    ('Machine à café', 'Nespresso Vertuo, avec capsules offertes', 'coffee.seller@gmail.com', 120, '2024-03-06', NULL, 'Lyon', 3),
    ('VTT tout terrain', 'Vélo de montagne avec suspensions', 'bike.seller@gmail.com', 400, '2024-03-05', NULL, 'Bordeaux', 2),
    ('Clé USB 64Go', 'Clé USB Kingston 64Go neuve', 'data.seller@gmail.com', 20, '2024-09-02', NULL, 'Paris', 3),
    ('Cahier de notes', 'Cahier A4 200 pages, lignage classique', 'student.seller@gmail.com', 10, '2024-09-03', NULL, 'Lyon', 1),
    ('Tapis de course', 'Tapis pliable, idéal pour la maison', 'fitness.seller@gmail.com', 600, '2024-03-01', NULL, 'Paris', 1),
    ('Barbecue à gaz', 'Barbecue Weber, idéal pour l''été', 'bbq.seller@gmail.com', 250, '2024-02-28', 'https://example.com/image7.jpg', 'Lyon', 1),
    ('Trousse scolaire', 'Trousse avec 5 stylos et règle', 'school.seller@gmail.com', 8, '2024-09-02', NULL, 'Bordeaux', 1);



CREATE TABLE tag
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT
);

INSERT INTO tag (name) VALUES
('Neuf'),
('Soldé');


CREATE TABLE ad_tag (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ad_id INTEGER NOT NULL,
    tag_id INTEGER,
    PRIMARY KEY (ad_id, tag_id),
    FOREIGN KEY (ad_id) REFERENCES ad(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
);

/*
SELECT * FROM ad;

SELECT * FROM ad WHERE city = 'Bordeaux';

DELETE FROM ad WHERE price > 40;

UPDATE ad SET price = 0 WHERE createdAt = 2024-09-01;

SELECT AVG(price) FROM ad WHERE city = 'Paris';

SELECT city, AVG(price) AS average_price FROM ad GROUP BY city;
 */
