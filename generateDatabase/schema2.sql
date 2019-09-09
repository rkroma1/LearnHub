CREATE TABLE `user` (
  `userID` int UNIQUE NOT NULL AUTO_INCREMENT,
  `name` varchar(64),
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `usertype` varchar(16) DEFAULT 'user',
  PRIMARY KEY (`userID`)
);

CREATE TABLE `course` (
  `courseID` int NOT NULL AUTO_INCREMENT UNIQUE,
  `courseName` varchar(64) NOT NULL,
  `year` int,
  `semester` varchar(16),
  PRIMARY KEY (`courseID`)
);


CREATE TABLE `enrolled` (
	`enrollmentID` int PRIMARY KEY AUTO_INCREMENT,
	`userID` int,
	`courseID` int,
	FOREIGN KEY (`userID`) references user(`userID`),
	FOREIGN KEY(`courseID`) references course(`courseID`)
);

CREATE TABLE `grade` (
  `assignmentName` varchar(64) NOT NULL,
  `grade` int,
  `gradeID` int AUTO_INCREMENT,
  `courseID` int,
  PRIMARY KEY (`gradeID`),
  FOREIGN KEY (`courseID`) references enrolled(`courseID`)
);

