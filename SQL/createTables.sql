-- Charlie: #1-5

CREATE TABLE Staff_Wage (
    Wage int,
    Role varchar(20),
    PRIMARY KEY (Role)
);

CREATE TABLE Staff_ID (
    ID int,
    Role varchar(20),
    PRIMARY KEY (ID)
);

CREATE TABLE Hotel_Price (
    Price int,
    Brand varchar(20),
    Proximity int,
    PRIMARY KEY (brand, Proximity)
);

CREATE TABLE Hotel_Address (
    Address varchar(30),
    Brand varchar(20),
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
    Email varchar(20),
    Credit_Card BIGINT,
    PRIMARY KEY (ID)
);

CREATE TABLE Park_Hours (
    Park_ID int,
    Hours varchar(20),
    PRIMARY KEY (Park_ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Park_Category_Name (
    Park_ID int,
    Category varchar(20),
    Name varchar(20),
    PRIMARY KEY (Park_ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

-- Chris: #6-10
CREATE TABLE Park (
    ID int,
    City varchar(20),
    Country varchar(20),
    PRIMARY KEY (ID)
);

CREATE TABLE Type_Price (
    Type varchar(20),
    Price decimal(10,2),
    PRIMARY KEY (Type)
);

CREATE TABLE GuestVisit (
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
    Price decimal(10,2),
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

-- Kirby: #11-17
CREATE TABLE Stay (
    Guest_ID int,
    Hotel_Address varchar(30),
    StartDate date,
    EndDate date,
    PRIMARY KEY (Guest_ID, Hotel_Address),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Hotel_Address) REFERENCES Hotel(Address)
);

CREATE TABLE Shop (
    Guest_ID int,
    Shop_Name varchar(20),
    PRIMARY KEY (Guest_ID, Shop_Name),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Shop_Name) REFERENCES Park_Category_Name (Name)
);

CREATE TABLE Enjoy (
    Guest_ID int,
    Ride_Name varchar(20),
    Park_ID int,
    PRIMARY KEY (Guest_ID, Ride_Name, Park_ID),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID),
    FOREIGN KEY (Ride_Name) REFERENCES Ride_In(Name),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
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

CREATE TABLE Ride_Restriction (
    Thrill_Level int,
    Capacity int,
    Restrictions varchar(50),
    PRIMARY KEY (Thrill_Level, Capacity)
);

CREATE TABLE Ride_Info (
    Thrill_Level int,
    Capacity int,
    Name varchar(20),
    Park_ID int,
    PRIMARY KEY (Name, Park_ID),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);