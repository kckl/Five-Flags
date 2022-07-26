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


-- Chris: #5-10

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