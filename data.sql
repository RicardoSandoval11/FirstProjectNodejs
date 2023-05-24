CREATE DATABASE  IF NOT EXISTS `jobsdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `jobsdb`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: jobsdb
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT '2023-04-06 20:16:32',
  `updatedAt` datetime NOT NULL,
  `comment` text,
  `userFile` varchar(255) NOT NULL,
  `vacancyId` int DEFAULT NULL,
  `candidateId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vacancyId` (`vacancyId`),
  KEY `candidateId` (`candidateId`),
  CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`vacancyId`) REFERENCES `vacancies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`candidateId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (4,'2023-04-14 13:23:53','2023-04-14 13:38:32','hola','Wbx7AnIJI.pdf',6,16),(7,'2023-04-14 15:14:24','2023-04-14 15:16:38','hola','dJyeSNaP-.pdf',14,16),(8,'2023-04-14 15:14:24','2023-04-14 15:16:53','hola','bcU4T408I.pdf',7,16),(9,'2023-04-14 15:14:24','2023-04-14 15:17:05','hola','5RlFOTjLh.pdf',9,16),(10,'2023-04-14 15:14:24','2023-04-14 15:17:34','hola','FRWz977oW.pdf',8,16);
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `coverImg` varchar(255) NOT NULL DEFAULT 'default.jpg',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Technology','Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas ipsum dolores, tempore vitae quisquam fugit quam quibusdam perspiciatis quis, laudantium alias minus atque prueba laborum quos voluptatum. Quaerat, ipsam nam!','img1_cat1.jpg','2023-04-06 00:00:00','2023-04-06 00:00:00'),(2,'Engineering','Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas ipsum dolores, tempore vitae quisquam fugit quam quibusdam perspiciatis quis, laudantium alias minus atque laborum quos voluptatum. Quaerat, ipsam nam!','img2_cat2.jpg','2023-04-06 00:00:00','2023-04-06 00:00:00'),(3,'Science','Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas ipsum dolores, tempore vitae quisquam fugit quam quibusdam perspiciatis quis, laudantium alias minus atque laborum quos voluptatum. Quaerat, ipsam nam!','img3_cat3.jpg','2023-04-06 00:00:00','2023-04-06 00:00:00'),(4,'Business','Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas ipsum dolores, tempore vitae quisquam fugit quam quibusdam perspiciatis quis, laudantium alias minus atque laborum quos voluptatum. Quaerat, ipsam nam!','default.jpg','2023-04-06 00:00:00','2023-04-06 00:00:00'),(5,'Laws','Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas ipsum dolores, tempore vitae quisquam fugit quam quibusdam perspiciatis quis, laudantium alias minus atque laborum quos voluptatum. Quaerat, ipsam nam!','img4_cat4.png','2023-04-06 00:00:00','2023-04-06 00:00:00'),(6,'Agriculture','Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas ipsum dolores, tempore vitae quisquam fugit quam quibusdam perspiciatis quis, laudantium alias minus atque laborum quos voluptatum. Quaerat, ipsam nam!','agricultura.jpg','2023-04-06 00:00:00','2023-04-06 00:00:00'),(7,'Arts','Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas ipsum dolores, tempore vitae quisquam fugit quam quibusdam perspiciatis quis, laudantium alias minus atque laborum quos voluptatum. Quaerat, ipsam nam!','artes.png','2023-04-06 00:00:00','2023-04-06 00:00:00');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversations`
--

DROP TABLE IF EXISTS `conversations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user1` int DEFAULT NULL,
  `user2` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user1` (`user1`),
  KEY `user2` (`user2`),
  CONSTRAINT `conversations_ibfk_1` FOREIGN KEY (`user1`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `conversations_ibfk_2` FOREIGN KEY (`user2`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversations`
--

LOCK TABLES `conversations` WRITE;
/*!40000 ALTER TABLE `conversations` DISABLE KEYS */;
INSERT INTO `conversations` VALUES (3,'2023-04-15 12:32:48','2023-04-15 12:32:48',15,16);
/*!40000 ALTER TABLE `conversations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `senderId` int DEFAULT NULL,
  `receiverId` int DEFAULT NULL,
  `conversationId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `senderId` (`senderId`),
  KEY `receiverId` (`receiverId`),
  KEY `conversationId` (`conversationId`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiverId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `messages_ibfk_3` FOREIGN KEY (`conversationId`) REFERENCES `conversations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (2,'Hola, he visto tu aplicacion a la vacante y me gustaria tener una reunion contigo','2023-04-15 12:32:48','2023-04-15 12:32:48',15,16,3),(3,'Perdon, el mensaje anterior no era para ti.','2023-04-15 12:33:16','2023-04-15 12:33:16',15,16,3),(4,'Muy bien, esta interesado en la posicion?','2023-04-15 12:49:39','2023-04-15 12:49:39',15,16,3),(5,'Si, estoy interesado. Cuando podriamos tener esa reunion?','2023-04-15 12:50:46','2023-04-15 12:50:46',16,15,3),(6,'Perdon, el mensaje anterior no era para ti.','2023-04-15 14:08:41','2023-04-15 14:08:41',15,16,3),(7,'Mensaje enviado desde el front end','2023-04-15 14:56:39','2023-04-15 14:56:39',15,16,3),(8,'texto del mensaje','2023-04-15 00:00:00','2023-04-15 00:00:00',15,16,3),(9,'texto del mensaje','2023-04-15 00:00:00','2023-04-15 00:00:00',16,15,3),(10,'texto del mensaje','2023-04-15 00:00:00','2023-04-15 00:00:00',15,16,3),(11,'texto del mensaje','2023-04-15 00:00:00','2023-04-15 00:00:00',16,15,3),(12,'Ultimo mensaje enviado','2023-04-15 15:56:39','2023-04-15 15:56:39',16,15,3),(13,'Con mucho gusto, le quedaria bien este viernes?','2023-04-15 17:19:52','2023-04-15 17:19:52',15,16,3),(14,'De acuerdo, yo lo hago','2023-04-15 17:21:02','2023-04-15 17:21:02',15,16,3),(15,'Claro, con gusto','2023-04-15 17:25:25','2023-04-15 17:25:25',15,16,3),(16,'ricardosandoval344@gmail.com','2023-04-15 17:29:07','2023-04-15 17:29:07',15,16,3),(17,'holas','2023-04-15 17:31:51','2023-04-15 17:31:51',15,16,3),(18,'que tal, como estas?','2023-04-15 17:35:11','2023-04-15 17:35:11',15,16,3),(19,'Holassss','2023-04-15 17:45:47','2023-04-15 17:45:47',15,16,3),(20,'Si, estoy interesado. Cuando podriamos tener esa reunion?','2023-04-15 17:46:30','2023-04-15 17:46:30',15,16,3),(21,'hola nuevamente','2023-04-15 17:49:24','2023-04-15 17:49:24',15,16,3),(22,'hola nuevamente de nuevo','2023-04-15 17:50:36','2023-04-15 17:50:36',15,16,3),(23,'hola por millonesima vez','2023-04-15 17:51:59','2023-04-15 17:51:59',15,16,3),(24,'respuesta al mensaje','2023-04-15 17:58:15','2023-04-15 17:58:15',16,15,3),(25,'respuesta 2','2023-04-15 17:58:28','2023-04-15 17:58:28',16,15,3),(26,'mensaje nuevo','2023-04-22 17:14:31','2023-04-22 17:14:31',16,15,3);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salaries`
--

DROP TABLE IF EXISTS `salaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salaries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salaries`
--

LOCK TABLES `salaries` WRITE;
/*!40000 ALTER TABLE `salaries` DISABLE KEYS */;
INSERT INTO `salaries` VALUES (1,'$0.00 - $1,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(2,'$1,000.00 - $2,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(3,'$2,000.00 - $3,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(4,'$3,000.00 - $4,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(5,'$4,000.00 - $5,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(6,'$5,000.00 - $6,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(7,'$6,000.00 - $7,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(8,'$7,000.00 - $8,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(9,'$8,000.00 - $9,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(10,'$9,000.00 - $10,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00'),(11,'+$10,000.00','2023-04-06 00:00:00','2023-04-06 00:00:00');
/*!40000 ALTER TABLE `salaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'available','2023-04-06 00:00:00','2023-04-06 00:00:00'),(2,'not available','2023-04-06 00:00:00','2023-04-06 00:00:00');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmation_code` varchar(255) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` mediumtext,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (15,'Ricardo Sandoval','ricardosandoval344@gmail.com','$2b$10$pcPgxmmhn1oFctc5vOvoxuFjMgK.9L6lsQcpcVZ8SvWdhXkcvVJAi',NULL,1,'QHcdLvJ1H.jpg','<p>Hola Soy Ricardo Sandoval y soy <strong>ingeniero electronico</strong></p>','2023-04-06 16:50:57','2023-04-12 13:16:10'),(16,'Ricardo Sandoval','ricardosandoval345@gmail.com','$2b$10$pcPgxmmhn1oFctc5vOvoxuFjMgK.9L6lsQcpcVZ8SvWdhXkcvVJAi',NULL,1,'default.jpg','<p>Hola Soy Ricardo Sandoval y soy <b>ingeniero electronico</b></p>','2023-04-06 16:50:57','2023-04-11 13:49:17'),(17,'Ricardo Sandoval','admin@admin.com','$2b$10$pcPgxmmhn1oFctc5vOvoxuFjMgK.9L6lsQcpcVZ8SvWdhXkcvVJAi',NULL,1,'QHcdLvJ1H.jpg','<p>Hola Soy Ricardo Sandoval y soy <b>ingeniero electronico</b></p>','2023-04-06 16:50:57','2023-04-11 13:49:17');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacancies`
--

DROP TABLE IF EXISTS `vacancies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacancies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) DEFAULT 'default.jpg',
  `details` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `salaryId` int DEFAULT NULL,
  `statusId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `salaryId` (`salaryId`),
  KEY `statusId` (`statusId`),
  KEY `categoryId` (`categoryId`),
  KEY `createdBy` (`createdBy`),
  CONSTRAINT `vacancies_ibfk_1` FOREIGN KEY (`salaryId`) REFERENCES `salaries` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `vacancies_ibfk_2` FOREIGN KEY (`statusId`) REFERENCES `statuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `vacancies_ibfk_3` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vacancies_ibfk_4` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacancies`
--

LOCK TABLES `vacancies` WRITE;
/*!40000 ALTER TABLE `vacancies` DISABLE KEYS */;
INSERT INTO `vacancies` VALUES (6,'Electronics Enginner','We are looking for an engineer','mICDf_4Xn.png','<p><strong>Role Responsibilities</strong></p><ul><li>Classify, transcribe, sort, label, and annotate data</li></ul><p><strong>Job requirements:</strong></p><ul><li>Idiomatic fluency in <strong>English</strong></li><li>Eligible to work in Canada, must be located in: Quebec, Ontario, and British Columbia provinces.</li><li>Great reading and comprehension skills</li><li>Ability to meet daily KPI\'s</li><li>Excellent time management skills</li><li>Ability to work independently</li><li>Flexibility to respond and react to changing priorities, quickly and efficiently</li><li>Ability to track, analyze, and report issues</li><li>Detail-oriented and comfortable with repetitive tasks</li></ul><p><i>No previous experience or training in the field is required - we will provide training.</i></p>','2023-04-10 00:00:00','2023-04-13 12:32:00',1,1,1,15),(7,'Chemical Engineer','We are looking for you','default.jpg','<p>Details Here</p>','2023-04-10 00:00:00','2023-04-10 00:00:00',2,1,2,15),(8,'Mechanical Electrical Engineer','We are looking for you','default.jpg','<p>Details Here</p>','2023-04-10 00:00:00','2023-04-10 00:00:00',2,1,3,15),(9,'Designer','We are looking for you','default.jpg','<p>Details Here</p>','2023-04-10 00:00:00','2023-04-10 00:00:00',2,1,4,15),(10,'Vacancy title','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-10 00:00:00','2023-04-10 00:00:00',2,1,5,15),(11,'Vacancy title','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-10 00:00:00','2023-04-10 00:00:00',2,1,5,15),(14,'Vacancy title (updated)','Vacancy description (updated)','CEj1N92vk.png','<p><strong>Requirements:</strong></p><ul><li>2 years of laboral experience.</li><li>Bachelon degree in computer science</li></ul>','2023-04-10 00:00:00','2023-04-12 12:31:45',3,1,1,15),(15,'Vacancy title','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-14 00:00:00','2023-04-14 00:00:00',4,1,5,15),(16,'Vacancy title 1','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-14 00:00:00','2023-04-14 00:00:00',4,1,4,15),(17,'Vacancy title 2','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-14 00:00:00','2023-04-14 00:00:00',4,1,4,15),(18,'Vacancy title 3','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-14 00:00:00','2023-04-14 00:00:00',4,1,3,15),(19,'Vacancy title 4','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-14 00:00:00','2023-04-14 00:00:00',4,1,1,15),(20,'Vacancy title 5','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-14 00:00:00','2023-04-14 00:00:00',4,1,2,15),(21,'Vacancy title 6','Vacancy description','default.jpg','<p>Details Here</p>','2023-04-14 00:00:00','2023-04-14 00:00:00',4,1,3,15);
/*!40000 ALTER TABLE `vacancies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-24 11:38:02
