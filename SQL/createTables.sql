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
    Price int
    Brand varchar(20)
    Proximity int
    PRIMARY KEY (brand, Proximity)
)

CREATE TABLE Hotel_Address (
    Address varchar(30)
    Brand varchar(20)
    Proximity int
    Park_ID int
    PRIMARY KEY (Address)
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
)

CREATE TABLE GUEST (
    ID int
    Name varchar(20)
    Age int
    Address varchar(30)
    Email varchar(20)
    Credit_Card BIGINT
    PRIMARY KEY (ID)
)

CREATE TABLE Park_Hours (
    Park_ID int
    Hours varchar(20)
    PRIMARY KEY (Park_ID)
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
)

CREATE TABLE Park_Category_Name (
    Park_ID int
    Category varchar(20)
    Name varchar(20)
    PRIMARY KEY (Park_ID)
    FOREIGN KEY (Park_ID) REFERENCES Park(ID)
)

-- Chris: #5-10

-- Kirby: #11-17