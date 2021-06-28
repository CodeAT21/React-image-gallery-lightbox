-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2021 at 04:11 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codeat21`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `image`) VALUES
(1, 'React js Slider ', 'https://miro.medium.com/max/7654/1*UIIieqRXQxV65VfKSbVtNg.jpeg'),
(2, 'React js Slider Two', 'https://sites.google.com/site/beautyofnature98/_/rsrc/1482911355882/config/customLogo.gif?revision=1'),
(3, 'React js Slider Three', 'https://cdn.fstoppers.com/styles/full/s3/photos/130327/04/03/629308b2ccab5546097139d1768b8a4e.jpg'),
(4, 'React js Slider four', 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'),
(5, 'React js Slider five', 'https://i.pinimg.com/originals/64/61/e9/6461e91104acce65bc93c8c93626725b.jpg'),
(6, 'React js Slider six', 'https://c4.wallpaperflare.com/wallpaper/192/926/428/sunset-beach-rocks-porth-nanven-wallpaper-preview.jpg'),
(7, 'React js Slider seven', 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Nice-nature-desktop-background-hd-1920x1080.jpg'),
(8, 'React js Slider eight', 'https://images.unsplash.com/photo-1493713838217-28e23b41b798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'),
(9, 'React js Slider nine', 'https://images7.alphacoders.com/337/337218.jpg'),
(10, 'React js Slider ten', 'https://wallpaperaccess.com/full/30100.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
