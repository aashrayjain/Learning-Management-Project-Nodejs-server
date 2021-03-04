CREATE DATABASE  IF NOT EXISTS `learning_management_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `learning_management_db`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: learning_management_db
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `COURSE_ID` int(11) NOT NULL,
  `COURSE_CODE` int(11) NOT NULL,
  `COURSE_NAME` varchar(255) NOT NULL,
  `DOCUMENT_UPLOAD` blob,
  PRIMARY KEY (`COURSE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,101,'Node.js',_binary 'Hello @all,\nAs discussed on call, we are giving you a case study to work upon, so that we can gauge your ability to learn & implement your coding tasks.\n\nYou are required to work upon your assigned task (refer case study document), and come up with the end-product (an integrated, working web-application), having all the functionalities being implemented satisfactorily.\n\nYou have to work as a assigned team and collaborate with your team members.For integration you have to use github  and proper commit message are required to be used.Create a repository in your github and add your team member into it ,divide your work and work as a team.\n\nCase study has color code defined for the task so pick your color of task by having discussion with your team members and start working on it.\n\nThe timelines / deadlines associated with the above case-studies are given below :-\n\nBasic Html Prototype (designing of only Html pages & their linking) - 3rd March 2021 \n\nReview (db schema , diagramas , etc - refer document) - 4th March 2021 \n\nSubmission (fully working web application) 8th March 2021'),(2,102,'Javascript',_binary 'Hello @all,\nAs discussed on call, we are giving you a case study to work upon, so that we can gauge your ability to learn & implement your coding tasks.\n\nYou are required to work upon your assigned task (refer case study document), and come up with the end-product (an integrated, working web-application), having all the functionalities being implemented satisfactorily.\n\nYou have to work as a assigned team and collaborate with your team members.For integration you have to use github  and proper commit message are required to be used.Create a repository in your github and add your team member into it ,divide your work and work as a team.\n\nCase study has color code defined for the task so pick your color of task by having discussion with your team members and start working on it.\n\nThe timelines / deadlines associated with the above case-studies are given below :-\n\nBasic Html Prototype (designing of only Html pages & their linking) - 3rd March 2021 \n\nReview (db schema , diagramas , etc - refer document) - 4th March 2021 \n\nSubmission (fully working web application) 8th March 2021'),(3,103,'AngularJS',_binary 'Hello @all,\nAs discussed on call, we are giving you a case study to work upon, so that we can gauge your ability to learn & implement your coding tasks.\n\nYou are required to work upon your assigned task (refer case study document), and come up with the end-product (an integrated, working web-application), having all the functionalities being implemented satisfactorily.\n\nYou have to work as a assigned team and collaborate with your team members.For integration you have to use github  and proper commit message are required to be used.Create a repository in your github and add your team member into it ,divide your work and work as a team.\n\nCase study has color code defined for the task so pick your color of task by having discussion with your team members and start working on it.\n\nThe timelines / deadlines associated with the above case-studies are given below :-\n\nBasic Html Prototype (designing of only Html pages & their linking) - 3rd March 2021 \n\nReview (db schema , diagramas , etc - refer document) - 4th March 2021 \n\nSubmission (fully working web application) 8th March 2021'),(4,104,'Java',_binary 'Hello @all,\nAs discussed on call, we are giving you a case study to work upon, so that we can gauge your ability to learn & implement your coding tasks.\n\nYou are required to work upon your assigned task (refer case study document), and come up with the end-product (an integrated, working web-application), having all the functionalities being implemented satisfactorily.\n\nYou have to work as a assigned team and collaborate with your team members.For integration you have to use github  and proper commit message are required to be used.Create a repository in your github and add your team member into it ,divide your work and work as a team.\n\nCase study has color code defined for the task so pick your color of task by having discussion with your team members and start working on it.\n\nThe timelines / deadlines associated with the above case-studies are given below :-\n\nBasic Html Prototype (designing of only Html pages & their linking) - 3rd March 2021 \n\nReview (db schema , diagramas , etc - refer document) - 4th March 2021 \n\nSubmission (fully working web application) 8th March 2021'),(5,105,'Python',_binary 'Hello @all,\nAs discussed on call, we are giving you a case study to work upon, so that we can gauge your ability to learn & implement your coding tasks.\n\nYou are required to work upon your assigned task (refer case study document), and come up with the end-product (an integrated, working web-application), having all the functionalities being implemented satisfactorily.\n\nYou have to work as a assigned team and collaborate with your team members.For integration you have to use github  and proper commit message are required to be used.Create a repository in your github and add your team member into it ,divide your work and work as a team.\n\nCase study has color code defined for the task so pick your color of task by having discussion with your team members and start working on it.\n\nThe timelines / deadlines associated with the above case-studies are given below :-\n\nBasic Html Prototype (designing of only Html pages & their linking) - 3rd March 2021 \n\nReview (db schema , diagramas , etc - refer document) - 4th March 2021 \n\nSubmission (fully working web application) 8th March 2021'),(6,106,'C Language',NULL);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int(11) NOT NULL,
  `USERNAME` varchar(255) NOT NULL,
  `CREATION_DATE` date DEFAULT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `USER_TYPE` varchar(255) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Aashray Jain','2021-03-01','ABCD','ADMIN'),(2,'Rinkesh','2020-02-10','XYZ','USER'),(3,'Rachana','2021-03-15','WSD','USER'),(4,'Abhay','2021-03-26','ASAD','USER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usercourses`
--

DROP TABLE IF EXISTS `usercourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usercourses` (
  `ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `USERNAME` varchar(45) NOT NULL,
  `COURSE_ID` int(11) NOT NULL,
  `COURSE_CODE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_UserCourse` (`USER_ID`),
  KEY `FK_CourseUser_idx` (`COURSE_ID`),
  CONSTRAINT `FK_CourseUser` FOREIGN KEY (`COURSE_ID`) REFERENCES `course` (`COURSE_ID`),
  CONSTRAINT `FK_UserCourse` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercourses`
--

LOCK TABLES `usercourses` WRITE;
/*!40000 ALTER TABLE `usercourses` DISABLE KEYS */;
INSERT INTO `usercourses` VALUES (1,1,'Aashray Jain',1,101),(2,1,'Aashray Jain',2,102);
/*!40000 ALTER TABLE `usercourses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-04 13:33:42
