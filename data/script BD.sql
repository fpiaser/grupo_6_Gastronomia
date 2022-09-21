create DATABASE IF NOT EXISTS gastvegana;

USE gastvegana;

DROP TABLE IF EXISTS gastvegana.categoria;

CREATE TABLE gastvegana.categoria (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

ALTER TABLE gastvegana.categoria
  ADD PRIMARY KEY (`id`);

CREATE TABLE `unidad_medida` (
  id int(11) NOT NULL,
  nombre varchar(50) NOT NULL  
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

;

ALTER TABLE `unidad_medida`
  ADD PRIMARY KEY (`id`);

CREATE TABLE `users`(
	id int(11) NOT NULL,
	nombre varchar(50) NOT NULL,
	apellido varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	password varchar(100) NOT NULL,
	image varchar(100) NOT NULL,
	Admin tinyint(1) NOT NULL) 
	ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

ALTER TABLE `users`
	ADD PRIMARY KEY (`id`);

CREATE TABLE `products` (
  id int(11) NOT NULL,
  nombre varchar(100) NOT NULL,
  descripcion varchar(1000) NOT NULL,
  uom int(11) NOT NULL,
  id_categoria int(11) NOT NULL,
  precio int(11) NOT NULL,
  image varchar(100) NOT NULL
)  
  ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

CREATE TABLE `shopping_cart` (
  id int(11) NOT NULL,
  id_user int(11) NOT NULL,
  id_product int(11) NOT NULL,
  cantidad int(11) NOT NULL,
  fecha_compra date NOT NULL,
  valor_unitario int(11) NOT NULL,
  valor_tota int(11) NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`);

INSERT
	INTO
	gastvegana.categoria (`id`,
	`nombre`)
VALUES
(1,
'Harinas y Frutos Secos'),
(2,
'Vianda Saludable'),
(3,
'Congelados');

INSERT
	INTO
	unidad_medida(id,
	nombre)
VALUES(1,
'Unidad');

INSERT
	INTO
	products(id,
	nombre,
	descripcion,
	uom,
	id_categoria,
	precio,
	image)
VALUES(1,
'Galleta Raiz de Chocolate',
'Galleta vegana con sabor a cacao, con nueces, proteina y sin azucar',
1,
1,
20,
'galleta-chocolate.jpg'),
(2,
'Pan Artesanal',
'Pan con semillas de trigo',
1,
1,
5,
'pan_artesanal.jpg'),
(3,
'Queso de Soya',
'elaborado con frijol de soja de alta calidad, sal marina y cloruro de calcio, un compuesto natural que sirve para potencializar su sabor',
1,
1,
8,
'queso_soya.jpg'),
(4,
'Yogurt Vegano de Coco',
'yogurt con probi�ticos. Con frutas naturales. Sin l�cteos, sin az�car sin gluten y sin frutos secos. Elaborado a base de cocos y almid�n de ma�z.',
1,
2,
2,
'yogurt.jpg'),
(5,
'Perniles de gluten',
'Los Perniles de Gluten, est�n elaborados con s�mola de trigo, ajonjol�, achiote, especias naturales, laurel, tomillo y albahaca y sal marina. Vienen precocidos y adobados, listos para asar o fre�r.',
1,
3,
15,
'pernil.jpeg'),
(6,
'Albondigas de Quinua',
'Albondigas con Quinua, elaboradas con arvejas verdes, quinua, lentejas, mandioca, c�rcuma, achiote, apio, sal marina, cilantro y especias naturales. Pueden ser fre�das o calentar al horno. Sin gluten ni soya.',
1,
3,
10,
'albondigas.jpg'),
(7,
'Nuez Moscada Molida',
'La Nuez Moscada Molida, es la semilla de un fruto tipo nut finamente molida, esta nuez tiene su origen de la Indonesia. Usa solo una o dos pizcas en la preparaci�n de tus tortas, postres o recetas exclusivas de platos principales.',
1,
1,
3,
'nuez-moscada.jpg'),
(8,
'Albahaca Molida',
'La Albahaca Molida, son hojas secas de esta arom�tica planta, finamente molidas. Util�zala para tu digesti�n en arom�tica, tambi�n para darle un toque de sabor y un aroma delicioso a tus platos y recetas.',
1,
1,
4,
'albahaca.jpg');

INSERT
	INTO
	users(id,
	nombre,
	apellido,
	email,
	password,
	image,
	Admin)
VALUES (1,
'Admin',
's',
'admin@admin.com',
'$2b$10$G8x8O2DOSw6UMNNzKNaqCOzeE4Az29MBzOvw5/0qMAb6/F7MLX7LO',
'admin.png',
1)
