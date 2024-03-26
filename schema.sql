-- Drop existing tables if they exist
DROP TABLE IF EXISTS RunSheets;
DROP TABLE IF EXISTS Projects;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS TitleRecords;

-- Create Users Table
CREATE TABLE Users (
  UserID INTEGER PRIMARY KEY,
  Email TEXT NOT NULL,
  Password TEXT NOT NULL,
  Username TEXT NOT NULL,
  FirstName TEXT NOT NULL,
  LastName TEXT NOT NULL,
  Projects INTEGER,
  Phone TEXT,
  Role TEXT
);

-- Create Projects Table
CREATE TABLE Projects (
  ProjectID INTEGER PRIMARY KEY,
  ProjectName TEXT NOT NULL,
  Users TEXT, -- This will represent a way to associate all users working on the project
  Description TEXT
);

-- Create RunSheets Table
CREATE TABLE RunSheets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tractId TEXT NOT NULL,
  titleExaminer TEXT,
  county TEXT,
  description TEXT,
  titleRecords TEXT,
  project TEXT,
  location TEXT NOT NULL,
  grossAcres INTEGER,
  coversTo DATE,
  coversFrom DATE,
  deleted BOOLEAN,
  status TEXT,
  created_at DATE,
  updated_at DATE
);

-- Create Title-Records table
CREATE TABLE TitleRecords (
  TitleRecordID INTEGER PRIMARY KEY,
  EffectiveDate DATE,
  Recorded_Date DATE,
  Doc TEXT,
  Grantee TEXT,
  TractID TEXT,
  Grantor TEXT,
  Vol_Type TEXT,
  Page TEXT,
  AckDate DATE,
  Instrument_Type TEXT,
  Instrument_Date DATE,
  Description TEXT,
  Remarks TEXT,
  FileDate DATE,
  SortOrder TEXT,
  lawyer_comments TEXT,
  DocNum TEXT,
  Volume TEXT,
  County TEXT,
  Created DATE,
  Updated DATE
);

-- Insert statements for array items
INSERT INTO RunSheets (id, tractId, titleExaminer, county, description, titleRecords, project, location, grossAcres, coversTo, coversFrom, deleted, status, created_at, updated_at)
VALUES (0, '22-18S-25E-1 NW4 and SE4', '', '', 'Northwest Quarter and Southeast Quarter of Section 22, Township 18S, Range 25E, Eddy County, New Mexico', '', 'NM Drill Site Title', 'Eddy', 320, '2024-05-01', '1900-01-01', 0, '', '2024-02-11', '2024-02-11');

INSERT INTO RunSheets (id, tractId, titleExaminer, county, description, titleRecords, project, location, grossAcres, coversTo, coversFrom, deleted, status, created_at, updated_at)
VALUES (1, '22-18S-25E-1', '', '', 'Southwest Quarter and Northwest Quarter', '', 'NM Drill Site Title', 'Eddy', 320, '2024-03-01', '1900-01-01', 0, '', '2024-02-10', '2024-02-11');

INSERT INTO RunSheets (id, tractId, titleExaminer, county, description, titleRecords, project, location)
VALUES (2, 'GR-120-01', '', '', 'Stuff In a Place', '', 'AC East', 'Grimes');

INSERT INTO RunSheets (id, tractId, titleExaminer, county, description, titleRecords, project, location, grossAcres, coversTo, coversFrom, deleted, status, created_at, updated_at)
VALUES (3, 'GR-420-69', '', '', '', '', 'AC East', 'Grimes', 101.69, '2023-11-16', '2023-11-16', 0, '', '2023-11-16', '2024-01-30');

INSERT INTO RunSheets (id, tractId, titleExaminer, county, description, titleRecords, project, location, grossAcres, coversTo, coversFrom, deleted, status, created_at, updated_at)
VALUES (4, 'GR-069-069', '', '', '', '', 'AC East', 'Grimes', 320, '1900-01-01', '2023-01-01', 0, '', '2023-10-10', '2023-12-19');