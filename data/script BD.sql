CREATE DATABASE `GastVegana` ;

CREATE TABLE gastvegana.categoria (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ;


CREATE TABLE gastvegana.unidad_medida (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE gastvegana.users (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `Admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE gastvegana.products (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `uom` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `image` varchar(100) NOT NULL
) ;



CREATE TABLE gastvegana.shopping_cart (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha_compra` date NOT NULL,
  `valor_unitario` int(11) NOT NULL,
  `valor_tota` int(11) NOT NULL
) ;


ALTER TABLE gastvegana.products ADD CONSTRAINT products_FK FOREIGN KEY (id_categoria) REFERENCES gastvegana.categoria(id);
ALTER TABLE gastvegana.products ADD CONSTRAINT products_FK_1 FOREIGN KEY (uom) REFERENCES gastvegana.unidad_medida(id);




//Crear información en la BD:

INSERT INTO gastvegana.categoria(id, nombre)VALUES(1, 'Harinas y Frutos Secos');
INSERT INTO gastvegana.categoria(id, nombre)VALUES(2, 'Vianda Saludable');
INSERT INTO gastvegana.unidad_medida(id, nombre)VALUES(1, 'Unidad');



INSERT INTO gastvegana.products(id, nombre, descripcion, uom, id_categoria, precio, image)
VALUES(1, 'Galleta Raiz de Chocolate', 'Galleta vegana con sabor a cacao, con nueces, proteina y sin azucar',
1, 1, 20, '');