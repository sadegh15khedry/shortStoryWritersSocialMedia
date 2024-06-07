-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2021 at 11:43 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nevisande`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `story_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `story_id`, `user_id`, `content`) VALUES
(1, 4, 15, 'fsfdsvffs'),
(2, 4, 15, 'fsfdsvffs'),
(3, 4, 15, 'fsfdsvffs'),
(4, 4, 15, 'fsfdsvffs'),
(5, 4, 15, 'sdfsaf'),
(6, 4, 15, 'grgrgrgrgr'),
(7, 4, 15, 'argadsargera'),
(8, 4, 15, 'argadsargera'),
(9, 4, 15, 'afweawefawefawfe'),
(10, 4, 15, 'afweawefawefawfe'),
(11, 4, 15, 'fdbszde'),
(12, 4, 15, 'khfytfry'),
(13, 4, 15, 'khfytfry'),
(14, 4, 15, 'khfytfry'),
(15, 4, 16, 'sdfasdfas'),
(16, 4, 16, 'sdfasdfas'),
(17, 4, 15, 'uuyguyg'),
(18, 4, 15, 'uuyguyg'),
(19, 4, 15, 'kaka'),
(20, 4, 15, 'kaka'),
(21, 11, 1, 'kjhkuhug'),
(22, 11, 1, 'kjhkuhug'),
(23, 5, 1, 'jdskjdhufhaoud'),
(24, 5, 1, 'jdskjdhufhaoud');

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `story_id` int(15) NOT NULL,
  `story_writer_id` varchar(15) NOT NULL,
  `story_genre` varchar(15) NOT NULL,
  `story_title` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `story_content` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`story_id`, `story_writer_id`, `story_genre`, `story_title`, `story_content`) VALUES
(3, '15', '4', 'rq4t34t43t', 'q43t34tq43tq3t'),
(4, '15', '7', 'wtegreegetrh', 'etrhrtehrehthttrehertrherth'),
(5, '16', '9', 'sadfasdfa', 'asdfasdfasdfasd'),
(6, '15', '8', 'jyrdtdytdtjdtyjetjrj', 'اینئشییحسشبئسنبببببببببببشسننشیسنبشمنسیبمنبمنش'),
(7, '15', '5', 'fsdgsdg', 'oifjdsigsjdgosdjiogiosdj'),
(8, '15', '3', 'sdfgsfdgsdfgsd', 'noooooooo'),
(9, '15', '8', 'gsfsfgsdf', 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'),
(10, '1', '9', 'asssssssssssssssssssssssssdsfs', 'hjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'),
(11, '1', '1', 'fa', 'khlhyutfiyfl,yfiiiiiiiiiiiiiiiiiiiiiiiii'),
(12, '1', '4', 'abc', 'kajdflsjjjjjjjjjjjjjlkajsflksadlkfjalskjflkasljflkjasd');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(15) NOT NULL,
  `user_fname` varchar(15) NOT NULL,
  `user_lname` varchar(15) NOT NULL,
  `user_uname` varchar(15) NOT NULL,
  `user_email` varchar(40) NOT NULL,
  `user_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_fname`, `user_lname`, `user_uname`, `user_email`, `user_password`) VALUES
(1, 'ljn', 'sd', 'sd', '123', '123'),
(2, 'ljn', 'f', 'gh', 'hg', 'gh'),
(3, 'fg', 'gfg', 'gfd', 'dfg', 'gfdgfs'),
(4, 'fds', 'fsgfg', 'gsf', 'sfg', 'fg'),
(7, 'sad', 'asd', 'asff', 'dsfdsg', '222'),
(8, 'fd', 'ss', 'fh', 'hhhhhj', 'gj'),
(10, 'iokj', 'ljhl', 'xdtdtxt', 'zetdzdt', '123'),
(11, 'dsfsfg', 'sfgh', 'gfhdgd', 'dgjyy', '123'),
(12, '5yw5', '5w464', 'gfhdgjdkyh', 'yjdyjtdjtd', '123'),
(13, '5t5ert', 'thdrthdtr', 'thdrhrdg', 'tdhrhggdh', '12'),
(14, 'gf', 'gdhdfhgd', 'gfhdhhdfg', 'hdfghhdgf', '1'),
(15, 'sdfg', 'hhhh', 'sadegh', '4', '4'),
(16, 'ali', 'ali', 'ali', 'ali', 'ali');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `st_id` (`story_id`),
  ADD KEY `w_id` (`user_id`);

--
-- Indexes for table `story`
--
ALTER TABLE `story`
  ADD PRIMARY KEY (`story_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`),
  ADD UNIQUE KEY `user_uname` (`user_uname`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user_id_2` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `story`
--
ALTER TABLE `story`
  MODIFY `story_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `st_id` FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`),
  ADD CONSTRAINT `w_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
