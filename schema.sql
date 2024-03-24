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

-- Create Run-Sheets Table
CREATE TABLE RunSheets (
  RunSheetID INTEGER PRIMARY KEY,
  TractID TEXT,
  Title TEXT,
  Description TEXT,
  ProjectID INTEGER REFERENCES Projects(ProjectID),
  UserID INTEGER REFERENCES Users(UserID),
  TitleRecordID INTEGER REFERENCES TitleRecords(TitleRecordID),
  CoversFrom DATE,
  CoversTo DATE,
  Status TEXT,
  CreatedBy TEXT,
  GrossAcres INTEGER
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

