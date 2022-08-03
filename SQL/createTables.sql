CREATE DATABASE fiveflags;

CREATE TABLE Staff_Wage (
    Role varchar(20),
    Wage int,
    PRIMARY KEY (Role)
);

CREATE TABLE Staff_ID (
    ID SERIAL,
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
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
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
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Shop_Category (
    Name varchar(20),
    Category varchar(20),
    Park_ID int NOT NULL,
    PRIMARY KEY (Name),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Type_Price (
    Type varchar(20),
    Price decimal(10,2),
    PRIMARY KEY (Type)
);

CREATE TABLE Guest_Visit (
    TicketID int,
    Type varchar(20),
    Date date,
    Guest_ID int NOT NULL,
    Park_ID int NOT NULL,
    PRIMARY KEY (TicketID),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Dining_Offer (
    Name varchar(30),
    Price varchar(10),
    Park_ID int NOT NULL,
    PRIMARY KEY (Name),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Restaurant (
    Name varchar(30),
    Seats int, 
    Cuisine varchar(20),
    PRIMARY KEY (Name),
    FOREIGN KEY (Name) REFERENCES Dining_Offer(Name)
);

CREATE TABLE FastFood (
    Name varchar(30),
    Type varchar(20),
    PRIMARY KEY (Name),
    FOREIGN KEY (Name) REFERENCES Dining_Offer(Name)
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
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Stay (
    Guest_ID int,
    Hotel_Address varchar(30),
    StartDate date,
    EndDate date,
    PRIMARY KEY (Guest_ID, Hotel_Address),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Hotel_Address) REFERENCES Hotel_LocatedNear(Address)
);

CREATE TABLE Shop (
    Guest_ID int,
    Shop_Name varchar(20),
    PRIMARY KEY (Guest_ID, Shop_Name),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Shop_Name) REFERENCES Shop_Category(Name)
);

CREATE TABLE Enjoy (
    Guest_ID int,
    Ride_Name varchar(20),
    Park_ID int,
    PRIMARY KEY (Guest_ID, Ride_Name, Park_ID),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Ride_Name, Park_ID) REFERENCES Ride_Info(Name, Park_ID)
);

CREATE TABLE Dines (
    Guest_ID int,
    Dining_Name varchar(20),
    PRIMARY KEY (Guest_ID, Dining_Name),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Dining_Name) REFERENCES Dining_Offer(Name)
);

CREATE TABLE Visit (
    Guest_ID int,
    Park_ID int,
    PRIMARY KEY (Guest_ID, Park_ID),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Works_For (
    Staff_ID int,
    Park_ID int,
    PRIMARY KEY (Staff_ID, Park_ID),
    FOREIGN KEY (Staff_ID) REFERENCES Staff_ID(ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);