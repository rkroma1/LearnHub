DROP DATABASE IF EXISTS learnHub;
CREATE DATABASE learnHub;
DROP USER IF EXISTS 'userTemp';
CREATE USER IF NOT EXISTS 'userTemp'@'localhost' IDENTIFIED BY 'iR34llyD0NotC4r3';
ALTER USER 'userTemp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'iR34llyD0NotC4r3';
GRANT ALL PRIVILEGES ON learnHub.* TO 'userTemp'@'localhost';
FLUSH PRIVILEGES;
USE learnHub;
source schema2.sql
