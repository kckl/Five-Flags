DROP TABLE Works_For;
-- DROP TABLE Visit;
DROP TABLE Dines;
DROP TABLE Enjoy;
DROP TABLE Shop;
DROP TABLE Stay;
DROP TABLE Ride_Info;
DROP TABLE Ride_Restriction;
DROP TABLE FastFood;
DROP TABLE Restaurant;
DROP TABLE Dining_Offer;
DROP TABLE Guest_Visit;
DROP TABLE Type_Price;
DROP TABLE Shop_Category;
DROP TABLE Park_Hours;
DROP TABLE Guest;
DROP TABLE Hotel_LocatedNear;
DROP TABLE Park;
DROP TABLE Staff_ID;
DROP TABLE Staff_Wage;

CREATE TABLE Staff_Wage (
    Role varchar(20),
    Wage int,
    PRIMARY KEY (Role)
);

CREATE TABLE Staff_ID (
    ID SERIAL,
    Name varchar(30),
    Role varchar(20),
    PRIMARY KEY (ID)
);

CREATE TABLE Park (
    ID int,
    City varchar(20),
    Country varchar(20),
    PRIMARY KEY (ID)
);

CREATE TABLE Hotel_LocatedNear (
    Address varchar(30),
    Brand varchar(20),
    Price varchar(10),
    Proximity int,
    Park_ID int,
    PRIMARY KEY (Address),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
);

CREATE TABLE Guest (
    ID int,
    Name varchar(20),
    Age int,
    Address varchar(30),
    Email varchar(50),
    Credit_Card BIGINT,
    PRIMARY KEY (ID)
);

CREATE TABLE Park_Hours (
    Park_ID int,
    Hours varchar(20),
    PRIMARY KEY (Park_ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
);

CREATE TABLE Shop_Category (
    Name varchar(20),
    Category varchar(20),
    Park_ID int NOT NULL,
    PRIMARY KEY (Name),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
);

CREATE TABLE Type_Price (
    Type varchar(20),
    Price decimal(10,2),
    PRIMARY KEY (Type)
);

CREATE TABLE Guest_Visit (
    TicketID SERIAL,
    Type varchar(20),
    Date date,
    Guest_ID int NOT NULL,
    Park_ID int NOT NULL,
    UNIQUE (Date, Guest_ID, Park_ID),
    PRIMARY KEY (TicketID),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID) ON DELETE CASCADE,
    FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
);

CREATE TABLE Dining_Offer (
    Name varchar(30),
    Price varchar(10),
    Park_ID int NOT NULL,
    PRIMARY KEY (Name),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
);

CREATE TABLE Restaurant (
    Name varchar(30),
    Seats int, 
    Cuisine varchar(20),
    PRIMARY KEY (Name),
    FOREIGN KEY (Name) REFERENCES Dining_Offer(Name) ON DELETE CASCADE
);

CREATE TABLE FastFood (
    Name varchar(30),
    Type varchar(20),
    PRIMARY KEY (Name),
    FOREIGN KEY (Name) REFERENCES Dining_Offer(Name) ON DELETE CASCADE
);

CREATE TABLE Ride_Restriction (
    Thrill_Level int,
    Capacity int,
    Restrictions varchar(50),
    PRIMARY KEY (Thrill_Level, Capacity)
);

CREATE TABLE Ride_Info (
    Name varchar(20),
    Park_ID int,
    Thrill_Level int,
    Capacity int,
    PRIMARY KEY (Name, Park_ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
);

CREATE TABLE Stay (
    Guest_ID int,
    Hotel_Address varchar(30),
    StartDate date,
    EndDate date,
    PRIMARY KEY (Guest_ID, Hotel_Address),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID) ON DELETE CASCADE,
    FOREIGN KEY (Hotel_Address) REFERENCES Hotel_LocatedNear(Address) ON DELETE CASCADE
);

CREATE TABLE Shop (
    Guest_ID int,
    Shop_Name varchar(20),
    PRIMARY KEY (Guest_ID, Shop_Name),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID) ON DELETE CASCADE,
    FOREIGN KEY (Shop_Name) REFERENCES Shop_Category(Name) ON DELETE CASCADE
);

CREATE TABLE Enjoy (
    Guest_ID int,
    Ride_Name varchar(20),
    Park_ID int,
    PRIMARY KEY (Guest_ID, Ride_Name, Park_ID),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID) ON DELETE CASCADE,
    FOREIGN KEY (Ride_Name, Park_ID) REFERENCES Ride_Info(Name, Park_ID) ON DELETE CASCADE
);

CREATE TABLE Dines (
    Guest_ID int,
    Dining_Name varchar(20),
    PRIMARY KEY (Guest_ID, Dining_Name),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID) ON DELETE CASCADE,
    FOREIGN KEY (Dining_Name) REFERENCES Dining_Offer(Name) ON DELETE CASCADE
);

-- CREATE TABLE Visit (
--     Guest_ID int,
--     Park_ID int,
--     PRIMARY KEY (Guest_ID, Park_ID),
--     FOREIGN KEY (Guest_ID) REFERENCES Guest(ID) ON DELETE CASCADE,
--     FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
-- );

CREATE TABLE Works_For (
    Staff_ID int,
    Park_ID int,
    PRIMARY KEY (Staff_ID, Park_ID),
    FOREIGN KEY (Staff_ID) REFERENCES Staff_ID(ID) ON DELETE CASCADE,
    FOREIGN KEY (Park_ID) REFERENCES Park(ID) ON DELETE CASCADE
);

-- EXAMPLE TUPLES
INSERT INTO Staff_Wage VALUES('Janitor', 20);
INSERT INTO Staff_Wage VALUES('Concessions', 25);
INSERT INTO Staff_Wage VALUES('Manager', 50);
INSERT INTO Staff_Wage VALUES('Intern', 15);
INSERT INTO Staff_Wage VALUES('CEO', 100);

INSERT INTO Staff_ID(Name, Role) VALUES('John McDonald', 'CEO'); 
INSERT INTO Staff_ID(Name, Role) VALUES('Betty Capinski', 'Manager'); 
INSERT INTO Staff_ID(Name, Role) VALUES('Martjin Miller', 'Concessions'); 
INSERT INTO Staff_ID(Name, Role) VALUES('Tij Ingrosso', 'Janitor'); 
INSERT INTO Staff_ID(Name, Role) VALUES('Joe Schmoe', 'Intern'); 

INSERT INTO Park VALUES(1, 'Las Vegas', 'USA');
INSERT INTO Park VALUES(2, 'Dubai', 'UAE');
INSERT INTO Park VALUES(3, 'Vancouver', 'Canada');
INSERT INTO Park VALUES(4, 'Lima', 'Peru');
INSERT INTO Park VALUES(5, 'Berlin', 'Germany');

INSERT INTO Hotel_LocatedNear VALUES('123 Dubai Street', 'Marriott', '$$$', 2, 2); 
INSERT INTO Hotel_LocatedNear VALUES('456 Las Vegas Road', 'Hilton', '$$$', 2, 3); 
INSERT INTO Hotel_LocatedNear VALUES('789 Vancouver Street', 'Hyatt', '$$$$', 4, 1); 
INSERT INTO Hotel_LocatedNear VALUES('30 Berlin Road', 'Wyndham', '$$', 3, 5); 
INSERT INTO Hotel_LocatedNear VALUES('322 Peru Avenue', 'Choice', '$', 4, 4); 

INSERT INTO Guest VALUES(11111, 'Splinter', 65, 'Sewers, NY', 'Splinter@gmail.com', 3742454554001265); 
INSERT INTO Guest VALUES(22222, 'Leonardo', 17, 'Sewers, NY', 'Leonardo@gmail.com', NULL); 
INSERT INTO Guest VALUES(33333, 'Raphael', 17, 'Sewers, NY', 'Raphael@gmail.com', NULL); 
INSERT INTO Guest VALUES(44444, 'Donatello', 17, 'Sewers, NY', 'Donatello@gmail.com', NULL); 
INSERT INTO Guest VALUES(55555, 'Michelangelo', 17, 'Sewers, NY', 'Michelangelo@gmail.com', NULL);
INSERT INTO Guest VALUES(66666, 'Ken', 26, 'Vancouver, BC', 'bozo@gmail.com', NULL); 
INSERT INTO Guest VALUES(88888, 'Allon', 23, 'Richmond, VA', 'leg@gmail.com', 3792421555486251); 
INSERT INTO Guest VALUES(99999, 'Jirby', 24, 'Banff, AB', 'garrix@gmail.com', 3888420420540154); 
INSERT INTO Guest VALUES(15121, 'Trung', 57, 'Ho Chi Minh, Vietnam', 'egg@gmail.com', NULL); 

INSERT INTO Park_Hours VALUES(1, '6:00AM - 10:00PM');
INSERT INTO Park_Hours VALUES(2, '6:30AM - 10:00PM');
INSERT INTO Park_Hours VALUES(3, '7:00AM - 10:00PM');
INSERT INTO Park_Hours VALUES(4, '7:30AM - 10:00PM');
INSERT INTO Park_Hours VALUES(5, '8:00AM - 10:00PM');

INSERT INTO Shop_Category VALUES('ACME Group', 'Clothing', 1);
INSERT INTO Shop_Category VALUES('Umbrella Corp.', 'Umbrellas', 2);
INSERT INTO Shop_Category VALUES('Gringotts','Bank', 3);
INSERT INTO Shop_Category VALUES('Wonka Industries', 'Chocolates', 4);
INSERT INTO Shop_Category VALUES('Walmart','General',5);
INSERT INTO Shop_Category VALUES('Mickey Machine','Toys',2);
INSERT INTO Shop_Category VALUES('Princess Adventure','Clothing',4);
INSERT INTO Shop_Category VALUES('Disney Dive','Swimwear',3);
INSERT INTO Shop_Category VALUES('Mickey Trips','Souvenirs',1);
INSERT INTO Shop_Category VALUES('Neverland Store','General',5);

INSERT INTO Type_Price VALUES('Annual-Unlimited', 1399.99);
INSERT INTO Type_Price VALUES('Annual-Limited', 949.99);
INSERT INTO Type_Price VALUES('1-Month Pass', 249.99);
INSERT INTO Type_Price VALUES('1-Week Pass', 179.99);
INSERT INTO Type_Price VALUES('1-Day Pass', 119.99);

INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Day Pass', '2022-01-31', 11111, 1);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-07-25', 55555, 2);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Month Pass', '2022-01-01', 44444, 2);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Week Pass', '2022-09-30', 22222, 3);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-05-20', 55555, 4);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Day Pass', '2022-01-20', 88888, 1);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Week Pass', '2022-05-15', 66666, 2);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Month Pass', '2022-04-20', 15121, 3);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-06-02', 99999, 4);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-07-20', 33333, 5);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-21', 88888, 3);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-22', 88888, 2);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-23', 88888, 1);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-24', 88888, 4);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-25', 88888, 5);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-26', 88888, 3);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-27', 88888, 3);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('Annual-Unlimited', '2022-01-28', 88888, 3);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Month Pass', '2022-05-16', 66666, 1);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Month Pass', '2022-05-17', 66666, 3);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Month Pass', '2022-05-18', 66666, 4);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Month Pass', '2022-05-19', 66666, 5);
INSERT INTO Guest_Visit(Type, Date, Guest_ID, Park_ID) VALUES('1-Month Pass', '2022-05-20', 66666, 2);

INSERT INTO Dining_Offer VALUES('The Keg', '$$$$', 1);
INSERT INTO Dining_Offer VALUES('Trader Flags Lounge', '$$', 2);
INSERT INTO Dining_Offer VALUES('Din Tai Fung', '$$$', 4);
INSERT INTO Dining_Offer VALUES('Munchu Picchu', '$$$', 5);
INSERT INTO Dining_Offer VALUES('Deutsches Haus', '$$$$', 3);
INSERT INTO Dining_Offer VALUES('Corn Dog Castle', '$', 2);
INSERT INTO Dining_Offer VALUES('Popcorn Kitchen', '$', 2);
INSERT INTO Dining_Offer VALUES('5 Flags Express', '$$', 1);
INSERT INTO Dining_Offer VALUES('The Confectionary', '$$', 3);
INSERT INTO Dining_Offer VALUES('Burger Queen', '$', 4);

INSERT INTO Restaurant VALUES('The Keg', 100, 'American');
INSERT INTO Restaurant VALUES('Trader Flags Lounge', 250, 'Hawaiian');
INSERT INTO Restaurant VALUES('Din Tai Fung', 150, 'Chinese');
INSERT INTO Restaurant VALUES('Munchu Picchu', 50, 'Peruvian');
INSERT INTO Restaurant VALUES('Deutsches Haus', 150, 'German');

INSERT INTO FastFood VALUES('Corn Dog Castle', 'Snacks');
INSERT INTO FastFood VALUES('Popcorn Kitchen', 'Snacks');
INSERT INTO FastFood VALUES('5 Flags Express', 'Dessert');
INSERT INTO FastFood VALUES('The Confectionary', 'Ice Cream');
INSERT INTO FastFood VALUES('Burger Queen', 'Burgers');

INSERT INTO Ride_Restriction VALUES(8, 50, 'Must be 44 inches');
INSERT INTO Ride_Restriction VALUES(8, 30, 'Must be 44 inches');
INSERT INTO Ride_Restriction VALUES(1, 20, 'Adult supervision required');
INSERT INTO Ride_Restriction VALUES(6, 10, 'Must be 40 inches');
INSERT INTO Ride_Restriction VALUES(2, 15, 'Adult supervision required');

INSERT INTO Ride_Info VALUES('Splash Mountain', 1, 8, 50);
INSERT INTO Ride_Info VALUES('Matterhorn Bobsleds', 2, 8, 30);
INSERT INTO Ride_Info VALUES('Jungle Cruise', 3, 1, 20);
INSERT INTO Ride_Info VALUES('Radiator Springs', 4, 6, 10);
INSERT INTO Ride_Info VALUES('Peter Pan`s Flight', 5, 2, 15);
INSERT INTO Ride_Info VALUES('Peter Pan`s Flight', 1, 2, 15);

INSERT INTO Stay VALUES(11111, '123 Dubai Street', '1997-01-01', '1998-01-01');
INSERT INTO Stay VALUES(22222, '456 Las Vegas Road', '2030-03-03', '2030-03-12');
INSERT INTO Stay VALUES(33333, '789 Vancouver Street', '2010-11-11', '2010-11-12');
INSERT INTO Stay VALUES(44444, '30 Berlin Road', '2022-02-01', '2022-02-11');
INSERT INTO Stay VALUES(55555, '322 Peru Avenue', '2015-09-23', '2015-09-30');

INSERT INTO Shop VALUES(11111, 'Mickey Machine');
INSERT INTO Shop VALUES(22222, 'Princess Adventure');
INSERT INTO Shop VALUES(33333, 'Disney Dive');
INSERT INTO Shop VALUES(44444, 'Mickey Trips');
INSERT INTO Shop VALUES(55555, 'Neverland Store');

INSERT INTO Enjoy VALUES(11111, 'Splash Mountain', 1);
INSERT INTO Enjoy VALUES(22222, 'Matterhorn Bobsleds', 2);
INSERT INTO Enjoy VALUES(33333, 'Jungle Cruise', 3);
INSERT INTO Enjoy VALUES(44444, 'Radiator Springs', 4);
INSERT INTO Enjoy VALUES(55555, 'Peter Pan`s Flight', 5);
INSERT INTO Enjoy VALUES(22222, 'Peter Pan`s Flight', 1);

INSERT INTO Dines VALUES(11111, 'Corn Dog Castle');
INSERT INTO Dines VALUES(22222, 'Popcorn Kitchen');
INSERT INTO Dines VALUES(33333, '5 Flags Express');
INSERT INTO Dines VALUES(44444, 'The Keg');
INSERT INTO Dines VALUES(55555, 'Trader Flags Lounge');

-- INSERT INTO Visit VALUES(11111, 1);
-- INSERT INTO Visit VALUES(22222, 2);
-- INSERT INTO Visit VALUES(33333, 3);
-- INSERT INTO Visit VALUES(44444, 4);
-- INSERT INTO Visit VALUES(55555, 5);

INSERT INTO Works_For VALUES(00001, 1);
INSERT INTO Works_For VALUES(00002, 2);
INSERT INTO Works_For VALUES(00003, 3);
INSERT INTO Works_For VALUES(00004, 4);
INSERT INTO Works_For VALUES(00005, 5);