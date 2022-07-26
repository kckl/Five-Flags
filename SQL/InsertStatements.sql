INSERT INTO Staff_Wage VALUES(20, 'Janitor')
INSERT INTO Staff_Wage VALUES(25, 'Concessions')
INSERT INTO Staff_Wage VALUES(50, 'Manager')
INSERT INTO Staff_Wage VALUES(15, 'Intern')
INSERT INTO Staff_Wage VALUES(100, 'CEO')

INSERT INTO Staff_ID VALUES(00004, 'Janitor')
INSERT INTO Staff_ID VALUES(00003, 'Concessions')
INSERT INTO Staff_ID VALUES(00002, 'Manager')
INSERT INTO Staff_ID VALUES(00005, 'Intern')
INSERT INTO Staff_ID VALUES(00001, 'CEO')

INSERT INTO Hotel_Price VALUES('placeholder_for_park_address', 'Marriott', 2)
INSERT INTO Hotel_Price VALUES('placeholder_for_park_address', 'Hilton', 2)
INSERT INTO Hotel_Price VALUES('placeholder_for_park_address', 'Hyatt', 4)
INSERT INTO Hotel_Price VALUES('placeholder_for_park_address', 'Wyndham', 3)
INSERT INTO Hotel_Price VALUES('placeholder_for_park_address', 'Choice', 4)

INSERT INTO Hotel_Address VALUES('placeholder_for_park_address', 'Marriott', 2, 1)
INSERT INTO Hotel_Address VALUES('placeholder_for_park_address', 'Hilton', 2, 2)
INSERT INTO Hotel_Address VALUES('placeholder_for_park_address', 'Hyatt', 4, 3)
INSERT INTO Hotel_Address VALUES('placeholder_for_park_address', 'Wyndham', 3, 4)
INSERT INTO Hotel_Address VALUES('placeholder_for_park_address', 'Choice', 4, 5)

INSERT INTO Guest VALUES(11111, 'Splinter', 65, 'Sewers, NYC', 'Splinter@gmail.com', 374245455400126)
INSERT INTO Guest VALUES(22222, 'Leonardo', 17, 'Sewers, NYC', 'Leonardo@gmail.com', NULL)
INSERT INTO Guest VALUES(33333, 'Raphael', 17, 'Sewers, NYC', 'Raphael@gmail.com', NULL)
INSERT INTO Guest VALUES(44444, 'Donatello', 17, 'Sewers, NYC', 'Donatello@gmail.com', NULL)
INSERT INTO Guest VALUES(55555, 'Michelangelo', 17, 'Sewers, NYC', 'Michelangelo@gmail.com', NULL)

INSERT INTO Park_Hours VALUES(1, '6:00AM - 10:00PM')
INSERT INTO Park_Hours VALUES(2, '6:30AM - 10:00PM')
INSERT INTO Park_Hours VALUES(3, '7:00AM - 10:00PM')
INSERT INTO Park_Hours VALUES(4, '7:30AM - 10:00PM')
INSERT INTO Park_Hours VALUES(5, '8:00AM - 10:00PM')

INSERT INTO Park_Category_Name VALUES(1, 'Clothing', 'ACME Group')
INSERT INTO Park_Category_Name VALUES(2, 'Umbrellas', 'Umbrella Corp.')
INSERT INTO Park_Category_Name VALUES(3, 'Bank', 'Gringotts')
INSERT INTO Park_Category_Name VALUES(4, 'Chocolates', 'Wonka Industries')
INSERT INTO Park_Category_Name VALUES(5, 'General', 'Walmart')

-- #11-17
INSERT INTO Stay VALUES(11111, "123 Dubai Street", "1997-01-01", "1998-01-01");
INSERT INTO Stay VALUES(22222, "456 Las Vegas Road", "2030-03-03", "2030-03-12");
INSERT INTO Stay VALUES(33333, "789 Vancouver Street", "2010-11-11", "2010-11-12");
INSERT INTO Stay VALUES(44444, "30 Berlin Road", "2022-02-01", "2022-02-11");
INSERT INTO Stay VALUES(55555, "322 Peru Avenue", "2015-09-23", "2015-09-30");

INSERT INTO Shop VALUES(11111, "Mickey Machine");
INSERT INTO Shop VALUES(22222, "Princess Adventure");
INSERT INTO Shop VALUES(33333, "Disney Dive");
INSERT INTO Shop VALUES(44444, "Mickey Trips");
INSERT INTO Shop VALUES(55555, "Neverland Store");

INSERT INTO Enjoy VALUES(11111, "Splash Mountain", 1);
INSERT INTO Enjoy VALUES(22222, "Matterhorn Bobsleds", 2);
INSERT INTO Enjoy VALUES(33333, "Jungle Cruise", 3);
INSERT INTO Enjoy VALUES(44444, "Radiator Springs", 4);
INSERT INTO Enjoy VALUES(55555, "Peter Pan's Flight", 5);

INSERT INTO Dines VALUES(11111, "Corn Dog Castle");
INSERT INTO Dines VALUES(22222, "Popcorn Kitchen");
INSERT INTO Dines VALUES(33333, "5 Flags Express");
INSERT INTO Dines VALUES(44444, "The Keg");
INSERT INTO Dines VALUES(55555, "Trader Flags Lounge");

INSERT INTO Visit VALUES(11111, 1);
INSERT INTO Visit VALUES(22222, 2);
INSERT INTO Visit VALUES(33333, 3);
INSERT INTO Visit VALUES(44444, 4);
INSERT INTO Visit VALUES(55555, 5);

INSERT INTO Works_For VALUES(00001, 1);
INSERT INTO Works_For VALUES(00002, 2);
INSERT INTO Works_For VALUES(00003, 3);
INSERT INTO Works_For VALUES(00004, 4);
INSERT INTO Works_For VALUES(00005, 5);

INSERT INTO Ride_Restriction VALUES(8, 50, "Must be 44 inches");
INSERT INTO Ride_Restriction VALUES(8, 30, "Must be 44 inches");
INSERT INTO Ride_Restriction VALUES(1, 20, "Adult supervision required");
INSERT INTO Ride_Restriction VALUES(6, 10, "Must be 40 inches");
INSERT INTO Ride_Restriction VALUES(2, 15, "Adult supervision required");

INSERT INTO Ride_Info(8, 50, "Splash Mountain", 1);
INSERT INTO Ride_Info(8, 30, "Matterhorn Bobsleds", 2);
INSERT INTO Ride_Info(1, 20, "Jungle Cruise", 3);
INSERT INTO Ride_Info(6, 10, "Radiator Springs", 4);
INSERT INTO Ride_Info(2, 15, "Peter Pan's Flight", 5);

INSERT INTO Park VALUES(1, 'Las Vegas', 'USA');
INSERT INTO Park VALUES(2, 'Dubai', 'UAE');
INSERT INTO Park VALUES(3, 'Vancouver', 'Canada');
INSERT INTO Park VALUES(4, 'Lima', 'Peru');
INSERT INTO Park VALUES(5, 'Berlin', 'Germany');

INSERT INTO Type_Price VALUES('Annual-Unlimited', 1399.99);
INSERT INTO Type_Price VALUES('Annual-Limited', 949.99);
INSERT INTO Type_Price VALUES('1-Month Pass', 249.99);
INSERT INTO Type_Price VALUES('1-Week Pass', 179.99);
INSERT INTO Type_Price VALUES('1-Day Pass', 119.99);

INSERT INTO Type_Ticket_Date_Park VALUES();
INSERT INTO Type_Ticket_Date_Park VALUES();
INSERT INTO Type_Ticket_Date_Park VALUES();
INSERT INTO Type_Ticket_Date_Park VALUES();
INSERT INTO Type_Ticket_Date_Park VALUES();
