-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-08-2019 a las 05:02:27
-- Versión del servidor: 10.1.33-MariaDB
-- Versión de PHP: 7.2.6
-- AUTOR: Greivin Rodriguez Atencio UNIVERSIDAD NACIONAL CR

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_news`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(128) COLLATE utf16_unicode_ci NOT NULL,
  `slug` varchar(128) COLLATE utf16_unicode_ci NOT NULL,
  `text` text COLLATE utf16_unicode_ci NOT NULL,
  `img` varchar(300) COLLATE utf16_unicode_ci DEFAULT 'noticia.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`id`, `title`, `slug`, `text`, `img`) VALUES
(7, 'Trenes', 'trenes', 'Emisión instantánea · Billete en el móvil · Últimas plazas · ¡Compra Ya! Los mejores precios. Precio Mínimo Garantizado. Pago Seguro. Billete electrónico .PDF. Reserva 100% Online. Reserva Online Fácil. Compra con antelación. Tipos: AVE, Talgo, Alvia, Avant, Euromed, Media Distancia, Cercanías.', 'noticia.png'),
(13, 'Vue CRUD', '', 'https://www.techiediaries.com › vue-axios-tutorial\r\n\r\nTraducir esta página\r\n13 jun. 2018 - In this Vue Axios tutorial we\'ll learn to use Axios (an http client) by example sending post, get, put and delete requests to a REST API. We\'ll see ...\r\n‎Consuming The RESTful ... · ‎Vue and Axios GET Example', 'noticia.png'),
(21, 'hfghfgh', '', 'gfhgfhfgh', 'noticia.png'),
(22, 'asss', '', '123asdasdsa', 'noticia.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `slug` (`slug`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
