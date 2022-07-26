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


-- Chris: #6-10
CREATE TABLE Park (
    ID int,
    City varchar(20),
    Country varchar(20),
    PRIMARY KEY (ID)
);

CREATE TABLE Type_Price (
    Type varchar(10),
    Price decimal(10,2),
    PRIMARY KEY (Type)
);

CREATE TABLE Type_Ticket_Date_Park (
    Type varchar(10),
    TicketID int,
    Date date,
    Park_ID int NOT NULL,
    PRIMARY KEY (Type),
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
);

CREATE TABLE Type_Ticket_Date_Guest (
    Type varchar(10),
    TicketID int,
    Date DATE,
    Guest_ID int NOT NULL,
    PRIMARY KEY (Type),
    FOREIGN KEY (Guest_ID) REFERENCES Guest(ID)
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


-- Kirby: #11-17