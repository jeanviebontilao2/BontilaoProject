-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: personal_task_organizer
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,1,NULL,'Write weekly project','Summarize weekly accomplishments and pending tasks.','2026-04-04 01:00:00',1,'completed','2026-04-04 01:40:00'),(2,1,NULL,'Clean workspace','Organize desk, remove clutter, wipe surfaces.','2026-04-06 00:00:00',1,'pending','2026-04-06 02:00:00'),(3,1,NULL,'Grocery shopping','Buy essentials for the week.','2026-04-06 08:00:00',1,'pending','2026-04-06 10:00:00'),(4,1,NULL,'Exercise (cardio)','45-minute jog and stretching.','2026-04-06 22:30:00',1,'completed','2026-04-06 23:30:00'),(5,1,NULL,'Reply to emails','Clear inbox and respond to pending messages.','2026-04-07 02:00:00',1,'pending','2026-04-07 04:00:00'),(6,1,NULL,'Study new skill','Learn basics of a new topic.','2026-04-08 06:00:00',1,'pending','2026-04-08 08:00:00'),(7,1,NULL,'Call family member','Catch up and check in.','2026-04-08 11:00:00',1,'pending','2026-04-08 12:00:00'),(8,1,NULL,'Update resume','Add recent experience and skills.','2026-04-09 05:00:00',1,'pending','2026-04-09 08:00:00'),(9,1,NULL,'Read a book chapter','Read and take notes.','2026-04-09 12:00:00',1,'pending','2026-04-09 13:30:00'),(10,1,NULL,'Prepare presentation','Create slides and outline.','2026-04-10 02:00:00',1,'pending','2026-04-10 07:00:00'),(11,1,NULL,'Laundry','Wash, dry, and fold clothes.','2026-04-10 09:00:00',1,'pending','2026-04-10 11:00:00'),(12,1,NULL,'Meal prep','Cook meals for upcoming days.','2026-04-11 01:00:00',1,'pending','2026-04-11 04:00:00'),(13,1,NULL,'Team meeting','Discuss progress and blockers.','2026-04-11 06:00:00',1,'pending','2026-04-11 07:00:00'),(14,1,NULL,'Fix minor bugs','Address small technical issues.','2026-04-12 02:00:00',1,'pending','2026-04-12 05:00:00'),(15,1,NULL,'Water plants','Hydrate indoor/outdoor plants.','2026-04-12 10:00:00',1,'pending','2026-04-12 10:30:00'),(16,1,NULL,'Plan weekend trip','Research and finalize itinerary.','2026-04-13 07:00:00',1,'pending','2026-04-13 10:00:00'),(17,1,NULL,'Backup files','Save important data to cloud/external drive.','2026-04-13 12:00:00',1,'pending','2026-04-13 13:00:00'),(18,1,NULL,'Doctor appointment','Routine check-up.','2026-04-14 01:00:00',1,'pending','2026-04-14 02:30:00'),(19,1,NULL,'Pay bills','Settle monthly expenses.','2026-04-14 05:00:00',1,'pending','2026-04-14 06:00:00'),(20,1,NULL,'Write blog post','Draft and edit article.','2026-04-15 03:00:00',1,'pending','2026-04-15 08:00:00'),(21,1,NULL,'Practice hobby','Spend time improving a skill.','2026-04-15 11:00:00',1,'pending','2026-04-15 13:00:00'),(22,1,NULL,'Organize files','Sort digital documents.','2026-04-16 02:00:00',1,'pending','2026-04-16 04:00:00'),(23,1,NULL,'Car maintenance check','Inspect vehicle condition.','2026-04-16 07:00:00',1,'pending','2026-04-16 09:00:00'),(24,1,NULL,'Meditation session','Mindfulness practice.','2026-04-16 22:00:00',1,'pending','2026-04-16 22:30:00'),(25,1,NULL,'Declutter closet','Sort clothes for donation or disposal.','2026-04-17 08:00:00',1,'pending','2026-04-17 11:00:00'),(26,1,NULL,'Review project plan','','2026-04-17 17:00:00',1,'pending','2026-04-17 19:00:00'),(27,1,NULL,'Update calendar','','2026-04-17 21:00:00',1,'pending','2026-04-17 22:00:00'),(28,1,NULL,'Walk 5,000 steps','','2026-04-18 01:00:00',1,'pending','2026-04-18 02:30:00'),(29,1,NULL,'Watch tutorial','','2026-04-18 18:00:00',1,'pending','2026-04-18 20:00:00'),(30,1,NULL,'Brainstorm ideas','','2026-04-18 22:00:00',1,'pending','2026-04-19 00:00:00'),(31,1,NULL,'Clean kitchen','','2026-04-19 02:00:00',1,'pending','2026-04-19 04:00:00'),(32,1,NULL,'Practice typing','','2026-04-19 17:00:00',1,'pending','2026-04-19 18:00:00'),(33,1,NULL,'Draft email proposal','','2026-04-19 19:00:00',1,'pending','2026-04-19 21:00:00'),(34,1,NULL,'Review notes','','2026-04-19 23:00:00',1,'pending','2026-04-20 01:00:00'),(35,1,NULL,'Stretching routine','','2026-04-20 03:00:00',1,'pending','2026-04-20 04:00:00'),(36,1,NULL,'Budget tracking','','2026-04-20 18:00:00',1,'pending','2026-04-20 19:30:00'),(37,1,NULL,'Watch documentary','','2026-04-20 21:00:00',1,'pending','2026-04-20 23:00:00'),(38,1,NULL,'Clean bathroom','','2026-04-21 00:00:00',1,'pending','2026-04-21 02:00:00'),(39,1,NULL,'Plan meals','','2026-04-21 17:00:00',1,'pending','2026-04-21 18:30:00'),(40,1,NULL,'Read articles','','2026-04-21 19:00:00',1,'pending','2026-04-21 21:00:00'),(41,1,NULL,'Practice presentation','','2026-04-21 22:00:00',1,'pending','2026-04-22 00:00:00'),(42,1,NULL,'Evening walk','','2026-04-22 02:00:00',1,'pending','2026-04-22 03:00:00'),(43,1,NULL,'Learn new app','','2026-04-22 18:00:00',1,'pending','2026-04-22 20:00:00'),(44,1,NULL,'Sort emails','','2026-04-22 21:00:00',1,'pending','2026-04-22 23:00:00'),(45,1,NULL,'Call client','','2026-04-23 00:00:00',1,'pending','2026-04-23 01:00:00'),(46,1,NULL,'Fix schedule conflicts','','2026-04-23 17:00:00',1,'pending','2026-04-23 19:00:00'),(47,1,NULL,'Practice writing','','2026-04-23 21:00:00',1,'pending','2026-04-23 23:00:00'),(48,1,NULL,'Review finances','','2026-04-24 00:00:00',1,'pending','2026-04-24 02:00:00'),(49,1,NULL,'Clean desktop files','','2026-04-24 18:00:00',1,'pending','2026-04-24 20:00:00'),(50,1,NULL,'Reflect & plan next week','','2026-04-25 03:00:00',1,'pending','2026-04-25 04:30:00');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-05 17:09:40
