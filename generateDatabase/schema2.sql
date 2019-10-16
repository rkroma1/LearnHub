CREATE TABLE `user` (
  `userID` int UNIQUE NOT NULL AUTO_INCREMENT,
  `name` varchar(64),
  `email` varchar(64) UNIQUE NOT NULL,
  `password` varchar(64) NOT NULL,
  `usertype` varchar(16) DEFAULT 'user',
  PRIMARY KEY (`userID`)
);

CREATE TABLE `course` (
  `courseID` int NOT NULL AUTO_INCREMENT UNIQUE,
  `courseName` varchar(64) NOT NULL,
  `year` int,
  `semester` varchar(16),
  `instructorID` int,
  `assignmentID` int,
  PRIMARY KEY (`courseID`),
  FOREIGN KEY(`instructorID`) references user(`userID`)
);


CREATE TABLE `enrolled` (
	`enrollmentID` int PRIMARY KEY AUTO_INCREMENT,
	`userID` int,
	`courseID` int,
	FOREIGN KEY (`userID`) references user(`userID`),
	FOREIGN KEY(`courseID`) references course(`courseID`)
);

CREATE TABLE `grade` (
  `grade` int,
  `gradeID` int AUTO_INCREMENT,
  `enrolledID` int,
  PRIMARY KEY (`gradeID`),
  FOREIGN KEY (`enrolledID`) references enrolled(`enrollmentID`)
);


CREATE TABLE `assignment` (
  `assignmentName` varchar(64) NOT NULL,
  `courseID` int,
  `assignmentID` int AUTO_INCREMENT,
  PRIMARY KEY (`assignmentID`),
  FOREIGN KEY (`courseID`) references course(`courseID`)
);

