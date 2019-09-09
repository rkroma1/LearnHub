insert into course (courseName, semester, year) VALUES ( 
CONCAT("COSC" , (SELECT FLOOR(RAND() * 3000+500))), "Fall", 2019
);
