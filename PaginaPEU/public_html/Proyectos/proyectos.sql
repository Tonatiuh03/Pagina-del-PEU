-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-01-2020 a las 19:21:44
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colaboradores`
--

DROP TABLE IF EXISTS `colaboradores`;
CREATE TABLE IF NOT EXISTS `colaboradores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_proyecto` int(11) NOT NULL DEFAULT '0',
  `asociados` text,
  `licenciatura` int(11) DEFAULT '0',
  `maestria` int(11) DEFAULT '0',
  `doctorado` int(11) DEFAULT '0',
  KEY `id` (`id`),
  KEY `id_proyecto3` (`id_proyecto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entidades_academicas`
--

DROP TABLE IF EXISTS `entidades_academicas`;
CREATE TABLE IF NOT EXISTS `entidades_academicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `participantes` varchar(50) DEFAULT '0',
  `colaboran` varchar(50) DEFAULT '0',
  `id_proyecto` int(11) NOT NULL DEFAULT '0',
  `financiadoras` text,
  KEY `id` (`id`),
  KEY `id_proyecto1` (`id_proyecto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE IF NOT EXISTS `preguntas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_proyecto` int(11) NOT NULL DEFAULT '0',
  `sigEtapa` varchar(50) DEFAULT '0',
  `nuevoProyecto` varchar(50) DEFAULT '0',
  `desarrolloTecno` text,
  `empresas` text,
  `normativa` text,
  `otroProyecto` text,
  KEY `id` (`id`),
  KEY `id_proyecto4` (`id_proyecto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
CREATE TABLE IF NOT EXISTS `proyecto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT '0',
  `fecha_inicio` date DEFAULT NULL,
  `resumen` text,
  `tipo` varchar(50) DEFAULT '',
  `etapa` varchar(50) DEFAULT '',
  `producto_esperado` text,
  `web` varchar(50) DEFAULT '',
  `logros` text,
  `monto` bigint(20) DEFAULT '0',
  `fecha_termino` date DEFAULT NULL,
  `area` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responsable`
--

DROP TABLE IF EXISTS `responsable`;
CREATE TABLE IF NOT EXISTS `responsable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_proyecto` int(11) NOT NULL DEFAULT '0',
  `nombre` varchar(50) DEFAULT '0',
  `correo` varchar(50) DEFAULT '0',
  `tel` varchar(50) DEFAULT '0',
  `adscripcion` varchar(50) DEFAULT '0',
  KEY `id` (`id`),
  KEY `id_proyecto2` (`id_proyecto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
