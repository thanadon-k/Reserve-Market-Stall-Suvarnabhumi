-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 22, 2024 at 08:16 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food`
--
CREATE DATABASE IF NOT EXISTS `food` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;;
USE `food`;
--
-- Database: `market`
--
CREATE DATABASE IF NOT EXISTS `market` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `market`;

-- --------------------------------------------------------

--
-- Table structure for table `market`
--

CREATE TABLE `market` (
  `id_lock` int(10) UNSIGNED NOT NULL,
  `lock_key` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `market`
--

INSERT INTO `market` (`id_lock`, `lock_key`, `num`, `status`) VALUES
(1, 'A', 1, 0),
(2, 'A', 2, 0),
(3, 'A', 3, 0),
(4, 'A', 4, 0),
(5, 'A', 5, 0),
(6, 'A', 6, 0),
(7, 'A', 7, 0),
(8, 'A', 8, 0),
(9, 'A', 9, 0),
(10, 'A', 10, 0),
(11, 'A', 11, 0),
(12, 'A', 12, 0),
(13, 'A', 13, 0),
(14, 'A', 14, 0),
(15, 'A', 15, 0),
(16, 'A', 16, 0),
(17, 'A', 17, 0),
(18, 'A', 18, 0),
(19, 'A', 19, 0),
(20, 'A', 20, 0),
(24, 'B', 1, 0),
(25, 'B', 2, 0),
(26, 'B', 3, 0),
(27, 'B', 4, 0),
(28, 'B', 5, 0),
(29, 'B', 6, 0),
(30, 'B', 7, 0),
(31, 'B', 8, 0),
(32, 'B', 9, 0),
(33, 'B', 10, 0),
(34, 'B', 11, 0),
(35, 'B', 12, 0),
(36, 'B', 13, 0),
(37, 'B', 14, 0),
(38, 'B', 15, 0),
(39, 'B', 16, 0),
(40, 'B', 17, 0),
(41, 'B', 18, 0),
(42, 'B', 19, 0),
(43, 'B', 20, 0),
(45, 'C', 1, 0),
(46, 'C', 2, 0),
(47, 'C', 3, 0),
(48, 'C', 4, 0),
(49, 'C', 5, 0),
(50, 'C', 6, 0),
(51, 'C', 7, 0),
(52, 'C', 8, 0),
(53, 'C', 9, 0),
(54, 'C', 10, 0),
(55, 'C', 11, 0),
(56, 'C', 12, 0),
(57, 'C', 13, 0),
(58, 'C', 14, 0),
(59, 'C', 15, 0),
(60, 'C', 16, 0),
(61, 'C', 17, 0),
(62, 'C', 18, 0),
(63, 'C', 19, 0),
(64, 'C', 20, 0),
(65, 'D', 1, 0),
(66, 'D', 2, 0),
(67, 'D', 3, 0),
(68, 'D', 4, 0),
(69, 'D', 5, 0),
(70, 'D', 6, 0),
(71, 'D', 7, 0),
(72, 'D', 8, 0),
(73, 'D', 9, 0),
(74, 'D', 10, 0),
(75, 'D', 11, 0),
(76, 'D', 12, 0),
(77, 'D', 13, 0),
(79, 'D', 14, 0),
(80, 'D', 15, 0),
(81, 'D', 16, 0),
(82, 'D', 17, 0),
(83, 'D', 18, 0),
(84, 'D', 19, 0),
(85, 'D', 20, 0),
(86, 'E', 1, 0),
(87, 'E', 2, 0),
(88, 'E', 3, 0),
(89, 'E', 4, 0),
(90, 'E', 5, 0),
(91, 'E', 6, 0),
(92, 'E', 7, 0),
(93, 'E', 8, 0),
(94, 'E', 9, 0),
(95, 'E', 10, 0),
(96, 'E', 11, 0),
(97, 'E', 12, 0),
(98, 'E', 13, 0),
(99, 'E', 14, 0),
(100, 'E', 15, 0),
(101, 'E', 16, 0),
(102, 'E', 17, 0),
(103, 'E', 18, 0),
(104, 'E', 19, 0),
(105, 'E', 20, 0),
(106, 'F', 1, 0),
(107, 'F', 2, 0),
(108, 'F', 3, 0),
(109, 'F', 4, 0),
(110, 'F', 5, 0),
(111, 'F', 6, 0),
(112, 'F', 7, 0),
(113, 'F', 8, 0),
(114, 'F', 9, 0),
(115, 'F', 10, 0),
(116, 'F', 11, 0),
(117, 'F', 12, 0),
(118, 'F', 13, 0),
(119, 'F', 14, 0),
(120, 'F', 15, 0),
(121, 'F', 16, 0),
(122, 'F', 17, 0),
(123, 'F', 18, 0),
(124, 'F', 19, 0),
(125, 'F', 20, 0),
(126, 'G', 1, 0),
(127, 'G', 2, 0),
(128, 'G', 3, 0),
(129, 'G', 4, 0),
(130, 'G', 5, 0),
(131, 'G', 6, 0),
(132, 'G', 7, 0),
(133, 'G', 8, 0),
(134, 'G', 9, 0),
(135, 'G', 10, 0),
(136, 'G', 11, 0),
(137, 'G', 12, 0),
(138, 'G', 13, 0),
(139, 'G', 14, 0),
(140, 'G', 15, 0),
(141, 'G', 16, 0),
(142, 'G', 17, 0),
(143, 'G', 18, 0),
(144, 'G', 19, 0),
(145, 'G', 20, 0),
(146, 'H', 1, 0),
(147, 'H', 2, 0),
(148, 'H', 3, 0),
(149, 'H', 4, 0),
(150, 'H', 5, 0),
(151, 'H', 6, 0),
(152, 'H', 7, 0),
(153, 'H', 8, 0),
(154, 'H', 9, 0),
(155, 'H', 10, 0),
(156, 'H', 11, 0),
(157, 'H', 12, 0),
(158, 'H', 13, 0),
(160, 'H', 14, 0),
(161, 'H', 15, 0),
(162, 'H', 16, 0),
(163, 'H', 17, 0),
(164, 'H', 18, 0),
(165, 'H', 19, 0),
(166, 'H', 20, 0),
(167, 'I', 1, 0),
(168, 'I', 2, 0),
(169, 'I', 3, 0),
(170, 'I', 4, 0),
(171, 'I', 5, 0),
(172, 'I', 6, 0),
(173, 'I', 7, 0),
(174, 'I', 8, 0),
(175, 'I', 9, 0),
(176, 'I', 10, 0),
(177, 'I', 11, 0),
(178, 'I', 12, 0),
(179, 'I', 13, 0),
(180, 'I', 14, 0),
(181, 'I', 15, 0),
(182, 'I', 16, 0),
(183, 'I', 17, 0),
(184, 'I', 18, 0),
(185, 'I', 19, 0),
(186, 'I', 20, 0),
(187, 'J', 1, 0),
(188, 'J', 2, 0),
(189, 'J', 3, 0),
(190, 'J', 4, 0),
(191, 'J', 5, 0),
(192, 'J', 6, 0),
(193, 'J', 7, 0),
(194, 'J', 8, 0),
(195, 'J', 9, 0),
(196, 'J', 10, 0),
(197, 'J', 11, 0),
(198, 'J', 12, 0),
(199, 'J', 13, 0),
(200, 'J', 14, 0),
(201, 'J', 15, 0),
(202, 'J', 16, 0),
(203, 'J', 17, 0),
(204, 'J', 18, 0),
(205, 'J', 19, 0),
(206, 'J', 20, 0),
(207, 'K', 1, 0),
(208, 'K', 2, 0),
(209, 'K', 3, 0),
(210, 'K', 4, 0),
(211, 'K', 5, 0),
(212, 'K', 6, 0),
(213, 'K', 7, 0),
(214, 'K', 8, 0),
(215, 'K', 9, 0),
(216, 'K', 10, 0),
(217, 'K', 11, 0),
(218, 'K', 12, 0),
(219, 'K', 13, 0),
(220, 'K', 14, 0),
(221, 'K', 15, 0),
(222, 'K', 16, 0),
(223, 'K', 17, 0),
(224, 'K', 18, 0),
(225, 'K', 19, 0),
(226, 'K', 20, 0),
(227, 'L', 1, 0),
(228, 'L', 2, 0),
(229, 'L', 3, 0),
(230, 'L', 4, 0),
(231, 'L', 5, 0),
(232, 'L', 6, 0),
(233, 'L', 7, 0),
(234, 'L', 8, 0),
(235, 'L', 9, 0),
(236, 'L', 10, 0),
(237, 'L', 11, 0),
(238, 'L', 12, 0),
(239, 'L', 13, 0),
(240, 'L', 14, 0),
(241, 'L', 15, 0),
(242, 'L', 16, 0),
(243, 'L', 17, 0),
(244, 'L', 18, 0),
(245, 'L', 19, 0),
(246, 'L', 20, 0),
(247, 'M', 1, 0),
(248, 'M', 2, 0),
(249, 'M', 3, 0),
(250, 'M', 4, 0),
(251, 'M', 5, 0),
(252, 'M', 6, 0),
(253, 'M', 7, 0),
(254, 'M', 8, 0),
(255, 'M', 9, 0),
(256, 'M', 10, 0),
(257, 'M', 11, 0),
(258, 'M', 12, 0),
(259, 'M', 13, 0),
(260, 'M', 14, 0),
(261, 'M', 15, 0),
(262, 'M', 16, 0),
(263, 'M', 17, 0),
(264, 'M', 18, 0),
(265, 'M', 19, 0),
(266, 'M', 20, 0),
(267, 'N', 1, 0),
(268, 'N', 2, 0),
(269, 'N', 3, 0),
(270, 'N', 4, 0),
(271, 'N', 5, 0),
(272, 'N', 6, 0),
(273, 'N', 7, 0),
(274, 'N', 8, 0),
(275, 'N', 9, 0),
(276, 'N', 10, 0),
(277, 'N', 11, 0),
(278, 'N', 12, 0),
(279, 'N', 13, 0),
(280, 'N', 14, 0),
(281, 'N', 15, 0),
(282, 'N', 16, 0),
(283, 'N', 17, 0),
(284, 'N', 18, 0),
(285, 'N', 19, 0),
(286, 'N', 20, 0),
(287, 'O', 1, 0),
(288, 'O', 2, 0),
(289, 'O', 3, 0),
(290, 'O', 4, 0),
(291, 'O', 5, 0),
(292, 'O', 6, 0),
(293, 'O', 7, 0),
(294, 'O', 8, 0),
(295, 'O', 9, 0),
(296, 'O', 10, 0),
(297, 'O', 11, 0),
(298, 'O', 12, 0),
(299, 'O', 13, 0),
(300, 'O', 14, 0),
(301, 'O', 15, 0),
(302, 'O', 16, 0),
(303, 'O', 17, 0),
(304, 'O', 18, 0),
(305, 'O', 19, 0),
(306, 'O', 20, 0),
(307, 'P', 1, 0),
(308, 'P', 2, 0),
(309, 'P', 3, 0),
(310, 'P', 4, 0),
(311, 'P', 5, 0),
(312, 'P', 6, 0),
(313, 'P', 7, 0),
(314, 'P', 8, 0),
(315, 'P', 9, 0),
(316, 'P', 10, 0),
(317, 'P', 11, 0),
(318, 'P', 12, 0),
(319, 'P', 13, 0),
(320, 'P', 14, 0),
(321, 'P', 15, 0),
(322, 'P', 16, 0),
(323, 'P', 17, 0),
(324, 'P', 18, 0),
(325, 'P', 19, 0),
(326, 'P', 20, 0),
(328, 'Q', 1, 0),
(329, 'Q', 2, 0),
(330, 'Q', 3, 0),
(331, 'Q', 4, 0),
(332, 'Q', 5, 0),
(333, 'Q', 6, 0),
(334, 'Q', 7, 0),
(335, 'Q', 8, 0),
(336, 'Q', 9, 0),
(337, 'Q', 10, 0),
(338, 'Q', 11, 0),
(339, 'Q', 12, 0),
(340, 'Q', 13, 0),
(341, 'Q', 14, 0),
(342, 'Q', 15, 0),
(343, 'Q', 16, 0),
(344, 'Q', 17, 0),
(345, 'Q', 18, 0),
(346, 'Q', 19, 0),
(347, 'Q', 20, 0),
(348, 'R', 1, 0),
(349, 'R', 2, 0),
(350, 'R', 3, 0),
(351, 'R', 4, 0),
(352, 'R', 5, 0),
(353, 'R', 6, 0),
(354, 'R', 7, 0),
(355, 'R', 8, 0),
(356, 'R', 9, 0),
(357, 'R', 10, 0),
(358, 'R', 11, 0),
(359, 'R', 12, 0),
(360, 'R', 13, 0),
(361, 'R', 14, 0),
(362, 'R', 15, 0),
(363, 'R', 16, 0),
(364, 'R', 17, 0),
(365, 'R', 18, 0),
(366, 'R', 19, 0),
(367, 'R', 20, 0),
(368, 'S', 1, 0),
(369, 'S', 2, 0),
(370, 'S', 3, 0),
(371, 'S', 4, 0),
(372, 'S', 5, 0),
(373, 'S', 6, 0),
(374, 'S', 7, 0),
(375, 'S', 8, 0),
(376, 'S', 9, 0),
(377, 'S', 10, 0),
(378, 'S', 11, 0),
(379, 'S', 12, 0),
(380, 'S', 13, 0),
(381, 'S', 14, 0),
(382, 'S', 15, 0),
(383, 'S', 16, 0),
(384, 'S', 17, 0),
(385, 'S', 18, 0),
(386, 'S', 19, 0),
(387, 'S', 20, 0),
(388, 'T', 1, 0),
(389, 'T', 2, 0),
(390, 'T', 3, 0),
(391, 'T', 4, 0),
(392, 'T', 5, 0),
(393, 'T', 6, 0),
(394, 'T', 7, 0),
(395, 'T', 8, 0),
(396, 'T', 9, 0),
(397, 'T', 10, 0),
(398, 'T', 11, 0),
(399, 'T', 12, 0),
(400, 'T', 13, 0),
(401, 'T', 14, 0),
(402, 'T', 15, 0),
(403, 'T', 16, 0),
(404, 'T', 17, 0),
(405, 'T', 18, 0),
(406, 'T', 19, 0),
(407, 'T', 20, 0);

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id_report` int(11) NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `report` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`id_report`, `location`, `report`) VALUES
(13, '', NULL),
(14, 'sdfsdf1111', NULL),
(15, 'หน้าตลาด', 'มีโจรอยู่หน้าตลาด'),
(16, 'หลังตลาด', 'มีงูอยู่ในรองเท้าบูท');

-- --------------------------------------------------------

--
-- Table structure for table `stall`
--

CREATE TABLE `stall` (
  `ID_stall` int(10) UNSIGNED NOT NULL,
  `ID_user` int(10) UNSIGNED DEFAULT NULL,
  `ID_lock` int(10) UNSIGNED DEFAULT NULL,
  `Name_shop` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `path_to_imag_slip` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID_user` int(10) UNSIGNED NOT NULL,
  `status` char(2) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Role` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Point` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Phone` char(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `market`
--
ALTER TABLE `market`
  ADD PRIMARY KEY (`id_lock`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id_report`);

--
-- Indexes for table `stall`
--
ALTER TABLE `stall`
  ADD PRIMARY KEY (`ID_stall`),
  ADD KEY `ID_user` (`ID_user`),
  ADD KEY `ID_lock` (`ID_lock`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `market`
--
ALTER TABLE `market`
  MODIFY `id_lock` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=408;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id_report` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `stall`
--
ALTER TABLE `stall`
  MODIFY `ID_stall` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `stall`
--
ALTER TABLE `stall`
  ADD CONSTRAINT `stall_ibfk_1` FOREIGN KEY (`ID_user`) REFERENCES `user` (`ID_user`),
  ADD CONSTRAINT `stall_ibfk_2` FOREIGN KEY (`ID_lock`) REFERENCES `market` (`id_lock`);
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
