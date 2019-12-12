-- creates tables for sazerac - barton 1792 database
-- clocknumber is like empid and senioritynumber is just a 1-300
DROP TABLE IF EXISTS sazerac.employee;
CREATE TABLE `sazerac`.`employee` (
	clocknumber INT SIGNED,
    senioritynumber INT SIGNED,
    shiftpref INT SIGNED, 
    empname varchar(50), 
    senioritydate DATE,
    prebuilthours INT,
    weekendothours INT,
    totalhours INT,
    absence VARCHAR(255),
    restrictions VARCHAR(255),
    jobid INT,
		  PRIMARY KEY (clocknumber), 
        FOREIGN KEY (jobid) REFERENCES jobid
);


DROP TABLE IF EXISTS sazerac.job;
CREATE TABLE `sazerac`.`job` (
	jobid INT SIGNED,
    jobname varchar(50), 
    deptid INT SIGNED,
		  PRIMARY KEY (jobid), 
          FOREIGN KEY (deptid) REFERENCES deptid
);


DROP TABLE IF EXISTS sazerac.department;
CREATE TABLE `sazerac`.`department` (
  deptid INT SIGNED,
    departmentname varchar(50), 
		  PRIMARY KEY (deptid), 
        FOREIGN KEY (deptid) REFERENCES deptid
);


-- data generated from UI - was shift 
DROP TABLE IF EXISTS sazerac.template;
CREATE TABLE `sazerac`.`template` (
	jobid INT SIGNED,
    deptid INT SIGNED,
    s1 INT SIGNED,
    s2 INT SIGNED,
    s3 INT SIGNED,
		  PRIMARY KEY (jobid)
);


DROP TABLE IF EXISTS sazerac.schedule;
CREATE TABLE `sazerac`.`schedule`(
  senioritynumber INT SIGNED,
    clocknumber INT SIGNED,
    empname varchar(50),
    jobname varchar(50), 
    departmentname varchar(50),
    shift INT,
    shiftpref INT SIGNED,
    restrictions VARCHAR(255),
    scheduledate DATETIME,
      PRIMARY KEY (clocknumber),
        FOREIGN KEY (clocknumber) REFERENCES clocknumber
);

DROP TABLE IF EXISTS sazerac.schedule_history;
CREATE TABLE `sazerac`.`schedule_history`(
  senioritynumber INT SIGNED,
    clocknumber INT SIGNED,
    empname varchar(50),
    jobname varchar(50), 
    departmentname varchar(50),
    shift INT,
    shiftpref INT SIGNED,
    scheduledate DATETIME,
    restrictions VARCHAR(255),
      PRIMARY KEY ( `clocknumber`, `scheduledate`),
        FOREIGN KEY (clocknumber) REFERENCES clocknumber
);


DROP TABLE IF EXISTS sazerac.employeenote;
CREATE TABLE `sazerac`.`employeenote` (
  clocknumber INT SIGNED,
  empname VARCHAR(50),
  shift INT SIGNED,
  daterange VARCHAR(50),
  eligible BOOLEAN,
  note VARCHAR(255),
    PRIMARY KEY (`clocknumber`),
    FOREIGN KEY (clocknumber) REFERENCES clocknumber
);