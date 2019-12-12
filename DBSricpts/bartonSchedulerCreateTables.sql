-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------
-- Select - Get proceedures
-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Selects current schedule from most recent scheuling run.
-- Used in GetSchedules(). 
CREATE PROCEDURE `GetCurrentSchedule` ()
BEGIN
	SELECT clocknumber, empname, jobname, shift, restrictions 
		FROM schedule;
        
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Used in GetEmployeeById()
CREATE PROCEDURE `GetEmployeeById` (IN clockNumber INT)
BEGIN
	SELECT
		emp.clocknumber,
		emp.senioritynumber,
		emp.shiftpref,
		emp.empname,
		emp.senioritydate,
		-- emp.prebuilthours,
		-- emp.weekendothours,
		-- emp.totalhours,
		-- emp.totalhours,
		job.jobname,
		emp.absence,
		emp.restrictions
			FROM `sazerac`.`employee` AS emp 
			INNER JOIN `sazerac`.`job` AS job 
			ON emp.jobid = job.jobid
			WHERE emp.clocknumber = clockNumber;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Selects data for employee table in app. 
-- Used in GetEmployees(). 
CREATE PROCEDURE `GetEmployeeData` ()
BEGIN
	SELECT
		emp.clocknumber,
		emp.senioritynumber,
		emp.shiftpref,
		emp.empname,
		-- emp.senioritydate,
		-- emp.prebuilthours,
		-- emp.weekendothours,
		-- emp.totalhours,
		job.jobname,
        emp.jobid,
		emp.absence,
		emp.restrictions
			FROM `sazerac`.`employee` AS emp 
			INNER JOIN `sazerac`.`job` AS job 
			ON emp.jobid = job.jobid
			ORDER BY emp.senioritynumber, job.jobname, emp.shiftpref;
END$$

DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `GetEmployeeNotes` ()
BEGIN
	SELECT enote.clocknumber,
		emp.empname,
        emp.shiftpref,
        enote.daterange,
        enote.eligible,
        enote.note
    FROM `sazerac`.`employeenote` AS enote
		INNER JOIN `sazerac`.`employee` AS emp
        ON enote.clocknumber = emp.clocknumber;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `GetJobCount` ()
BEGIN
	select count(jobid) as jobscount
		from job;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `GetJobs` ()
BEGIN
	SELECT jobid, jobname
		FROM job;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Selects data for employee table in app. 
-- Used in GetScheduleHistoryByScheduleDate(). 
CREATE PROCEDURE `GetScheduleHistoryByScheduleDate` (IN wscheduleDate VARCHAR(50) )
BEGIN
	SELECT * FROM schedule_history 
		WHERE scheduledate = wscheduleDate;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Selects data for employee table in app. 
-- Used in GetScheduleHistoryDates(). 
CREATE PROCEDURE `GetScheduleHistoryDates` ()
BEGIN
	SELECT DISTINCT scheduledate 
		FROM schedule_history
			ORDER BY scheduledate ASC;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE DEFINER=`sazerac_user`@`%` PROCEDURE `GetTemplate`()
BEGIN
	SELECT
		job.jobid,
		job.jobname,
		tplate.s1,
		tplate.s2,
		tplate.s3		
			FROM template AS tplate
			INNER JOIN `sazerac`.`job` AS job
			ON tplate.jobid = job.jobid
            ORDER BY job.jobname ASC;
END$$

DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------


-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------
-- Truncate - Clear/Delete proceedures
-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `ClearEmployeeNotes` ()
BEGIN
	TRUNCATE employeenote;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Used in GenerateCurrentSchedule()
CREATE PROCEDURE `ClearScheduleBeforeInsertCurrentSchedule` ()
BEGIN
	TRUNCATE `schedule`;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Used to clear the History table in ClearHistory()
CREATE PROCEDURE `ClearScheduleHistory` ()
BEGIN
	TRUNCATE schedule_history;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Used in UpdateSchedule()
CREATE PROCEDURE `ClearScheduleTemplateBeforeInsertCurrentTemplate` ()
BEGIN
	TRUNCATE `template`;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------
-- Delete 
-- ----------------------------------------------------------------------------------------------------------
DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `DeleteEmployeeById` (IN employeeId INT)
BEGIN
	DELETE FROM employee 
		WHERE clocknumber = employeeId;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `DeleteJobFromSchedulerTemplateById` (IN 
					rjobId INT)
BEGIN
DELETE FROM template
	WHERE jobid = rjobId;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------


-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------
-- Insert proceedures
-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Updates schedule table with current schedule from most recent scheuling run.
-- Used in InsertCurrentSchedule(). 
CREATE PROCEDURE `InsertCurrentSchedule` (IN senioritynumber INT,
			clocknumber INT,
			empname VARCHAR(50),
			jobname VARCHAR(50),
            shift INT,
			shiftpref INT SIGNED,
            scheduledate DATETIME,
            restrictions VARCHAR(50))
BEGIN
	INSERT INTO `schedule` 
    (
		senioritynumber,
		clocknumber,
		empname,
		jobname,
		shift,
		shiftpref,
		scheduledate,
        restrictions
    )
    VALUES 
    (
		`senioritynumber`,
		`clocknumber`,
		`empname`,
		`jobname`,
		`shift`,
		`shiftpref`,
		`scheduledate`,
        `restrictions`
    );
        
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `InsertEmployee` (IN
                    clockNumber INT, 
					seniorityNumber INT, 
					shiftPref INT,
					empName VARCHAR(50),
					-- senorityDate DATE,
					-- prebuiltHours INT,
					-- weekendOtHours INT,
					-- totalHours INT,
                    absent VARCHAR(50),
                    restricted VARCHAR(50),
					jobId INT
                    )
BEGIN
	INSERT INTO `employee`(
		clocknumber, 
		senioritynumber, 
		shiftpref,
		empname,
		-- senorityDate,
		-- prebuiltHours,
		-- weekendOtHours,
		-- totalHours,
		absence,
		restrictions,
		jobId
	)
    VALUES (
		clockNumber,
        seniorityNumber,
        shiftPref,
        empName,
        -- `senioritydate`,
        -- `prebuilthours`,
        -- `weekendothours`,
        -- `totalhours`,
        absent,
        restricted,
        jobId
    );
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `InsertEmployeeNote` (IN empId INT,
			dates VARCHAR(50),
			eligibility BOOLEAN,
            enotes VARCHAR(255))
BEGIN
	INSERT INTO employeenote (
		clocknumber,
        daterange,
        eligible,
        note
    )
    VALUES (
		empId,
        dates,
        eligibility,
        enotes
    );
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `InsertJob` (IN jobID INT,
				jobName VARCHAR(50))
BEGIN
	INSERT INTO `job` (
		jobid,
		jobname
	)
	VALUES (
		`jobID`,
		`jobName`
	);
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Updates schedule table with current schedule from most recent scheuling run.
-- Used in InsertOldScheduleToHistory(). 
CREATE PROCEDURE `InsertOldScheduleToHistory` (IN senioritynumber INT,
			clocknumber INT,
			empname VARCHAR(50),
			jobname VARCHAR(50),
			departmentname VARCHAR(50),
            shift INT,
			shiftpref INT SIGNED,
            scheduledate DATETIME,
            restrictions VARCHAR(50))
BEGIN
	INSERT INTO `schedule_history` 
    (
		senioritynumber,
		clocknumber,
		empname,
		jobname,
		departmentname,
		shift,
		shiftpref,
		scheduledate,
        restrictions
    )
    VALUES 
    (
		`senioritynumber`,
		`clocknumber`,
		`empname`,
		`jobname`,
		`departmentname`,
		`shift`,
		`shiftpref`,
		`scheduledate`,
        `restrictions`
    );
        
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
-- Used in GenerateSchedule()
CREATE PROCEDURE `InsertPreviousScheduleToScheduleHistory` ()
BEGIN
	INSERT INTO `schedule_history` 
		SELECT * 
		FROM `schedule`; 
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac`$$
CREATE PROCEDURE `InsertScheduleTemplate`(IN
						uJobID INT,
						uDeptID INT,
						Shift1 INT,
						Shift2 INT,
						Shift3 INT
                    )
BEGIN
	INSERT INTO `template`(
			jobid,
            deptid,
			s1,
			s2,
			s3
		)
        VALUES(
			uJobID,
			uDeptID,
			Shift1,
			Shift2,
			Shift3
        );
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------


-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------
-- Update proceedures
-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------


DELIMITER $$
USE `sazerac` $$
CREATE PROCEDURE `UpdateEmployeeById`(IN
                    empclockNumber INT, 
					seniorityNumber INT, 
					shiftPref INT,
					empName VARCHAR(50),
					-- senorityDate DATE,
					-- prebuiltHours INT,
					-- weekendOtHours INT,
					-- totalHours INT,
                    absent VARCHAR(50),
                    restricted VARCHAR(50),
					jobId INT
                    )
BEGIN
	UPDATE `employee` 
    SET
	senioritynumber = seniorityNumber,
	shiftpref = shiftPref,
	empname = empName,
	-- senioritydate = senorityDate,
	-- prebuilthours = prebuiltHours,
	-- weekendothours = weekendOtHours,
	-- totalhours = totalHours,
    absence = absent,
    restrictions = restricted,
	jobid = jobId
    where clocknumber = empclockNumber;
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------

DELIMITER $$
USE `sazerac` $$
-- Used in UpdateTemplateByJobId()
CREATE PROCEDURE `UpdateTemplateByJobId` (IN 
						jobId INT,
						jobName VARCHAR(50),
						Shift1 INT,
						Shift2 INT,
						Shift3 INT
					)
BEGIN
UPDATE `template`
		SET 
		s1 = Shift1,
		s2 = Shift2,
		s3 = Shift3
        WHERE jobid = jobId;
		-- WHERE jobid = (SELECT jobid
						-- FROM `job` 
						-- WHERE job.jobname = jobName);
END$$
DELIMITER ;
-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------