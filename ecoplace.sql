-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2022 a las 00:00:12
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecoplace`
--
CREATE DATABASE IF NOT EXISTS `ecoplace` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ecoplace`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `cart_name` varchar(30) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `cart_name`, `user_id`) VALUES
(1, 'cart-804-2QM', 1),
(2, 'cart-471-MMF', 2),
(3, 'cart-126-3PK', 3),
(4, 'cart-433-VFR', 4),
(5, 'cart-467-M08', 5),
(6, 'cart-347-ZUO', 6),
(7, 'cart-576-HT5', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(30) NOT NULL,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `created_at`, `updated_at`) VALUES
(1, 'floraYJardin', NULL, NULL),
(2, 'organicos', NULL, NULL),
(3, 'cuidadoPersonal', NULL, NULL),
(4, 'hogar', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `order`
--

INSERT INTO `order` (`id`, `product_id`, `cart_id`, `product_quantity`) VALUES
(1, 1, 7, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_description` varchar(30) NOT NULL,
  `product_technical_description` varchar(120) DEFAULT NULL,
  `product_other_description` varchar(120) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `product_price` float NOT NULL,
  `product_image` varchar(120) NOT NULL,
  `deleted_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_description`, `product_technical_description`, `product_other_description`, `category_id`, `product_price`, `product_image`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'PAN INTEGRAL', 'PAN INTEGRAL', 'PAN INTEGRAL', 'PAN INTEGRAL', 2, 22.89, 'product_image_productimg_1647902435506.jpg', NULL, NULL, NULL),
(33, 'SHAMPOO ECOLOGICO', 'SHAMPOO ECOLOGICO', 'SHAMPOO ECOLOGICO', 'SHAMPOO ECOLOGICO', 3, 123.5, 'product_image_productimg_1647903323075.jpg', NULL, NULL, NULL),
(34, 'JABON LIQUIDO ECOLOGICO', 'JABON LIQUIDO ECOLOGICO', 'JABON LIQUIDO ECOLOGICO', 'JABON LIQUIDO ECOLOGICO', 3, 56.91, 'product_image_productimg_1647903489305.jpg', NULL, NULL, NULL),
(35, 'CEPILLO DE CABELLO ECOLOGICO', 'CEPILLO DE CABELLO ECOLOGICO', 'CEPILLO DE CABELLO ECOLOGICO', 'CEPILLO DE CABELLO ECOLOGICO', 3, 13.52, 'product_image_productimg_1647903584581.jpg', NULL, NULL, NULL),
(36, 'PITILLOS ECOLOGICOS', 'PITILLOS ECOLOGICOS', 'PITILLOS ECOLOGICOS', 'PITILLOS ECOLOGICOS', 4, 15.99, 'product_image_productimg_1647903656759.jpg', NULL, NULL, NULL),
(37, 'BOLSAS DE SUPERMERCADO ECOLOGI', 'BOLSAS DE SUPERMERCADO ECOLOGI', 'BOLSAS DE SUPERMERCADO ECOLOGICAS', 'BOLSAS DE SUPERMERCADO ECOLOGICAS', 4, 6.45, 'product_image_productimg_1647903685432.jpg', NULL, NULL, NULL),
(38, 'BOLSAS DE BASURA REUTILIZABLES', 'BOLSAS DE BASURA REUTILIZABLES', 'BOLSAS DE BASURA REUTILIZABLES', 'BOLSAS DE BASURA REUTILIZABLES', 4, 3.78, 'product_image_productimg_1647903719821.jpg', NULL, NULL, NULL),
(39, 'HAMACA ECOLOGICA', 'HAMACA ECOLOGICA', 'HAMACA ECOLOGICA', 'HAMACA ECOLOGICA', 4, 83.1, 'product_image_productimg_1647903753425.jpg', NULL, NULL, NULL),
(40, 'NARANJAS', 'NARANJAS', 'NARANJAS', 'NARANJAS', 2, 3.59, 'product_image_productimg_1647903777950.jpg', NULL, NULL, NULL),
(41, 'TOMATES', 'TOMATES', 'TOMATES', 'TOMATES', 2, 5.5, 'product_image_productimg_1647903802018.jpg', NULL, NULL, NULL),
(42, 'QUINUA', 'QUINUA', 'QUINUA', 'QUINUA', 2, 4.75, 'product_image_productimg_1647903821894.jpg', NULL, NULL, NULL),
(43, 'FERTILIZANTE', 'FERTILIZANTE', 'FERTILIZANTE', 'FERTILIZANTE', 1, 33.67, 'product_image_productimg_1647903846330.jpg', NULL, NULL, NULL),
(44, 'MASETAS ECOLOGICAS', 'MASETAS ECOLOGICAS', 'MASETAS ECOLOGICAS', 'MASETAS ECOLOGICAS', 1, 55.4, 'product_image_productimg_1647903875489.jpg', NULL, NULL, NULL),
(45, 'REGADERA', 'REGADERA', 'REGADERA', 'REGADERA', 1, 37.4, 'product_image_productimg_1647903914218.jpg', NULL, NULL, NULL),
(46, 'PIMIENTO ROJO', 'PIMIENTO ROJO', 'PIMIENTO ROJO', 'PIMIENTO ROJO', 2, 8.7, 'product_image_productimg_1647903995207.jpg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(120) NOT NULL,
  `user_image` varchar(120) NOT NULL,
  `createdAt` varchar(30) NOT NULL,
  `updatedAt` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_email`, `user_password`, `user_image`, `createdAt`, `updatedAt`) VALUES
(1, 'Taylor12', 'taylorswift@gmail.com', '$2a$10$cK9S3szPwNLsgqzomk8j3uH8AhSYHsPgPvxCINGg00yKzVNl.XSc.', 'avatar-1647766329180.jpg', '2022-03-20 08:52:09', '2022-03-20 08:52:09'),
(2, 'adamsandler12', 'adamsan12@gmail.com', '$2a$10$xltEPwARHTZXWBdXCOxOJeK05YAsR8/vPr.mcZIErpejV15UrAWQm', 'avatar-1647766374050.jpg', '2022-03-20 08:52:54', '2022-03-20 08:52:54'),
(3, 'liomessi30', 'lio30messi@gmail.com', '$2a$10$CXRVGPzDeOr0TH4z0XoAx.cCDIiKFM/yd0dOUW1gJabJVGw4Aa3Km', 'avatar-1647766402317.jpg', '2022-03-20 08:53:22', '2022-03-20 08:53:22'),
(4, 'elonmusk2022', 'elon20musk22@gmail.com', '$2a$10$EN5I5xHQtKxBaJtXCoymNe.dfA.XBwWtwrsI5A6IG3Fvj.Vtps1dy', 'avatar-1647766448817.jpg', '2022-03-20 08:54:08', '2022-03-20 08:54:08'),
(5, 'jenniferanis', 'jenniferfriends@gmail.com', '$2a$10$lrpBY.HRIcHesfRFh9gSmea9EeXDvusMkQ796PGJ8tx5TNjdjrQiW', 'avatar-1647766503123.jpg', '2022-03-20 08:55:03', '2022-03-20 08:55:03'),
(6, 'charlizeRF', 'charlizeRF@gmail.com', '$2a$10$r4wrFswdZEBGuJvar0Y5quScFK87hoFUiVB2leXCJiYIy2S10a65i', 'avatar-1647766570321.jpg', '2022-03-20 08:56:10', '2022-03-20 08:56:10'),
(7, 'arturovid', 'arturito12@gmail.com', '$2a$10$pfwU1kvJVnkNz8Bx.DvQ2.p7z6GASl4NX0b7UQty6HdbYfp38vURu', 'avatar-1647766595779.jpg', '2022-03-20 08:56:35', '2022-03-20 08:56:35'),
(8, 'cristronal', 'cristianopenaldo@gmail.com', '$2a$10$FCyosQcfU3e6QSGdEH.tCuqnOQQrxMmg3C/Sg2dJCVgRWGPJN20KK', 'avatar-1647766623486.jpg', '2022-03-20 08:57:03', '2022-03-20 08:57:03'),
(9, 'natalieport', 'natyport@gmail.com', '$2a$10$MbSV3dK3e.Jonb/95Zqqd.P1PvJmfEk0L.4MmFDbggAAsND0G/.6i', 'avatar-1647766652584.jpg', '2022-03-20 08:57:32', '2022-03-20 08:57:32'),
(10, 'connorMc', 'connorboxe@gmail.com', '$2a$10$Cid8iZ/zDFu1P8vTqHWJAuCAu2Ner1ehRaC/H/MLPpzGPGeSueGHC', 'avatar-1647766687264.jpg', '2022-03-20 08:58:07', '2022-03-20 08:58:07'),
(11, 'justinb', 'justinbaby@gmail.com', '$2a$10$HPpoW2KyDX/t.yn29RCMreZriT14N10CB8T2SjU8Oj8AWRx7RXekS', 'avatar-1647766713089.jpg', '2022-03-20 08:58:33', '2022-03-20 08:58:33'),
(12, 'adamlavi', 'adamsuggar@gmail.com', '$2a$10$trOdGD.dCL./un4ZBZykpuNgP7h3av54/.7d3yFoZMR415LHguapm', 'avatar-1647766739134.jpg', '2022-03-20 08:58:59', '2022-03-20 08:58:59'),
(13, 'jaimesRodri', 'jaimitorod@gmail.com', '$2a$10$YZ6f72k3R21g.ZfuzN2p6eztp0JUQ4k0h3zK0l3LTTHihwxAprJTK', 'avatar-1647766794282.jpg', '2022-03-20 08:59:54', '2022-03-20 08:59:54'),
(14, 'lavanega', 'julivanegas@gmail.com', '$2a$10$61R2yWIFsnFxDMq78SgoAeFZCu4iYPZ83F63sSqKjBEYMlCqP3Tl2', 'avatar-1647766823604.jpg', '2022-03-20 09:00:23', '2022-03-20 09:00:23'),
(15, 'davidbeck', 'davidsecret@gmail.com', '$2a$10$tY1PXafoOVFyYknutmFJhO/CEychNXZevfSt2WlGDRVi2xJzEMubu', 'avatar-1647766862557.jpg', '2022-03-20 09:01:02', '2022-03-20 09:01:02'),
(16, 'shakiraaa', 'shakirapique@gmail.com', '$2a$10$HtWk.3BaUA9KwyZcRn0EoeKlzUGSTBZGxTxm2rf0gUTb5Z4P6obIW', 'avatar-1647767125944.jpg', '2022-03-20 09:05:26', '2022-03-20 09:05:26'),
(17, 'eldinhooo', 'ronhaldino@gmail.com', '$2a$10$kk7NRkL0jZralx6FY/Pt9el20kXhyP0oYPz.yG2L5Z63Pd8ZoJSQu', 'avatar-1647767149329.jpg', '2022-03-20 09:05:49', '2022-03-20 09:05:49'),
(18, 'hammilf1', 'lewishamm@gmail.com', '$2a$10$7DuvKzMxtV1EvW.U9QjtKe6I6VtDDxfhoX4v3/xlwmLQSl0NGUKfi', 'avatar-1647767174346.jpg', '2022-03-20 09:06:14', '2022-03-20 09:06:14'),
(19, 'michaelPhel', 'michaelswim@gmail.com', '$2a$10$6rU0Mu.HmnpyAFZajgMsse3fQ4POZRDUMW7Ss93LHhGOj2L42xIJy', 'avatar-1647767202623.jpg', '2022-03-20 09:06:42', '2022-03-20 09:06:42'),
(20, 'tigerGolf', 'woodsGolf19@gmail.com', '$2a$10$sPwmLtaLugWazo9raHmSReAh2BZFxjYddDJ0bgB2XDxQ5bkHeENiW', 'avatar-1647767243949.jpg', '2022-03-20 09:07:24', '2022-03-20 09:07:24'),
(21, 'carlitosbox', 'carlitosbox@gmail.com', '$2a$10$GD8LaTwh/nWWHJyzTLsamumWmxN8eThGruD1g64SG6IlMVVaiW5Gi', 'avatar-1647767890681.jpg', '2022-03-20 09:18:10', '2022-03-20 09:18:10'),
(22, 'billpuertas', 'billpuertas@gmail.com', '$2a$10$jQQ7h2jTqfnhttOvxBC64uE7AEcrsSTQJO18rXftFN1Q/osP5A5QK', 'avatar-1647767916409.jpg', '2022-03-20 09:18:36', '2022-03-20 09:18:36'),
(23, 'billieSad', 'billieSad@gmail.com', '$2a$10$ycJSTaAL4HM7gUWLlJIpL.IuXCzLGBbF6R/Rq1U0gsZ1/.EsEilYi', 'avatar-1647767944052.jpg', '2022-03-20 09:19:04', '2022-03-20 09:19:04'),
(24, 'itsbritney', 'britneyBit@gmail.com', '$2a$10$p/LDqaotiVlg3odfD9R0wezf8C1UzrrKvIhQFczIWOVrpslIgNdh.', 'avatar-1647767970311.jpg', '2022-03-20 09:19:30', '2022-03-20 09:19:30'),
(25, 'AndrewSpider', 'bestspiderman@gmail.com', '$2a$10$6qY4lVU7QAChQQiuTXaGbOfmigCBLG3gs2PydN2tgkfRMCT7ENTia', 'avatar-1647768000409.jpg', '2022-03-20 09:20:00', '2022-03-20 09:20:00'),
(26, 'princesswife', 'meghanprincess@gmail.com', '$2a$10$KnETOGoLVEe6hzxHrilxJe2H7pU9oxzimUSKhS6phF64XXmBHp9Xm', 'avatar-1647768033785.jpg', '2022-03-20 09:20:33', '2022-03-20 09:20:33'),
(27, 'badConejo', 'malobunny@gmail.com', '$2a$10$l8G7K0MeUY1N4ajtGHtVDuBsXC77Wnl/loihtjKBAUdqXIrY9QMsu', 'avatar-1647768066944.jpg', '2022-03-20 09:21:07', '2022-03-20 09:21:07'),
(28, 'scarletteher', 'scarlette@gmail.com', '$2a$10$i3pkCPHABSFB/nXft6m3/OYaPKIwiibHirizTYxt58SFavHQYZ39O', 'avatar-1647768104106.jpg', '2022-03-20 09:21:44', '2022-03-20 09:21:44'),
(29, 'jassonpai', 'jasson22@gmail.com', '$2a$10$8MYWTrGYeZRq8Xg7/5h.pOjE7wt2xXH3S7mVlw.iplf4VWNZnL5qG', 'avatar-1647768124480.jpg', '2022-03-20 09:22:04', '2022-03-20 09:22:04'),
(30, 'Franciahilton', 'parishilton@gmail.com', '$2a$10$dtGfIXA3dc7iN2OI8A8WheFuRBk13Ar3mUtZLy378YVmr7RbuyZBS', 'avatar-1647768159816.jpg', '2022-03-20 09:22:39', '2022-03-20 09:22:39'),
(46, 'guille123', 'guille123@gmail.com', '$2a$10$TC.SAIlVrnhKGeDpNoHn3ekWg2ndSseDTFFBe8sUV6zKOuUjWYMrS', 'avatar-1650945629241.jpg', '2022-04-26 04:00:29', '2022-04-26 04:00:29'),
(47, 'guille123', 'guille1234@gmail.com', '$2a$10$XAgbGJ5KpObf1O2RXnIZJOAlZbKEGvC9i5/cNeWNH1pu.0vQBeApa', 'avatar-1650945838692.jpg', '2022-04-26 04:03:58', '2022-04-26 04:03:58');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `cart_id` (`cart_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `category_id_2` (`category_id`),
  ADD KEY `category_id_3` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
