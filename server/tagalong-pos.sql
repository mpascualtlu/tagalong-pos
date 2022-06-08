-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2022 at 07:29 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `tagalong-pos` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tagalong-pos`;

-- --------------------------------------------------------

--
-- Table structure for table `Cafe_orders`
--

CREATE TABLE `Cafe_orders` (
  `Order_id` int(11) NOT NULL,
  `Menu_item_id` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `Notes` varchar(50) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `hasBeenPaid` tinyint(1) DEFAULT NULL,
  `creator_id` int(11) DEFAULT NULL,
  `updator_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_no` int(11) NOT NULL,
  `is_currently_staying` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Hostel_instance`
--

CREATE TABLE `Hostel_instance` (
  `hostel_id` int(11) NOT NULL,
  `room_id` int(11) DEFAULT NULL,
  `hostel_name` varchar(50) DEFAULT NULL,
  `hotel_address` varchar(50) DEFAULT NULL,
  `hostel_phone` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Menu_Item`
--

CREATE TABLE `Menu_Item` (
  `Menu_item_id` int(11) NOT NULL,
  `Item_Name` varchar(50) DEFAULT NULL,
  `Item_Type` varchar(50) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Image` varchar(100) DEFAULT NULL,
  `Field` int(11) DEFAULT NULL,
  `sortOrderNo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Room_instance`
--

CREATE TABLE `Room_instance` (
  `room_id` int(11) NOT NULL,
  `Room_type` varchar(50) DEFAULT NULL,
  `Number_of_beds` int(11) DEFAULT NULL,
  `is_booked` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Trip_option`
--

CREATE TABLE `Trip_option` (
  `Trip_ID` int(11) NOT NULL,
  `Trip_Name` varchar(50) DEFAULT NULL,
  `Trip_Description` varchar(200) DEFAULT NULL,
  `Trip_Type` varchar(50) DEFAULT NULL,
  `Images` varchar(100) DEFAULT NULL,
  `Duration` int(11) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Itinerary` varchar(1000) DEFAULT NULL,
  `Maximum_occupancy` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Trip_Reservation`
--

CREATE TABLE `Trip_Reservation` (
  `Trip_Booking_ID` int(11) NOT NULL,
  `Trip_ID` int(11) DEFAULT NULL,
  `Customer_ID` int(11) DEFAULT NULL,
  `Number_of_Guests` int(11) DEFAULT NULL,
  `Booking_Date` date DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Total_Price` int(11) DEFAULT NULL,
  `hasBeenPaid` tinyint(1) DEFAULT NULL,
  `creator_id` int(11) DEFAULT NULL,
  `updator_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `email` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cafe_orders`
--
ALTER TABLE `Cafe_orders`
  ADD PRIMARY KEY (`Order_id`);

--
-- Indexes for table `Hostel_instance`
--
ALTER TABLE `Hostel_instance`
  ADD PRIMARY KEY (`hostel_id`);

--
-- Indexes for table `Menu_Item`
--
ALTER TABLE `Menu_Item`
  ADD PRIMARY KEY (`Menu_item_id`),
  ADD KEY `Key` (`Field`);

--
-- Indexes for table `Room_instance`
--
ALTER TABLE `Room_instance`
  ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `Trip_option`
--
ALTER TABLE `Trip_option`
  ADD PRIMARY KEY (`Trip_ID`);

--
-- Indexes for table `Trip_Reservation`
--
ALTER TABLE `Trip_Reservation`
  ADD PRIMARY KEY (`Trip_Booking_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
