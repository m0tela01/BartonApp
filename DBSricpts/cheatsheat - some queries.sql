USE sazerac;
-- SET SQL_SAFE_UPDATES = 0;

update employee set shiftpref = 1 where clocknumber = 1232;

select
s1,
s2,
s3
FROM template
WHERE jobid = (SELECT jobid
		FROM `job` 
        WHERE job.jobname = "FORKLIFT OPER" );


select * from template;
select * from schedule_history;
call GetEmployeeById(1237);

call DeleteScheduleFromHistory("2019-11-11");

DELETE FROM schedule_history
	WHERE scheduledate = "2019-11-11";
        
-- DROP PROCEDURE IF EXISTS UpdateCurrentScheduleTemplate;

-- INSERT INTO schedule_history 
-- SELECT * 
-- FROM schedule; 

call GetCurrentSchedule();

select * from schedule where jobname = "labor";
insert into employee (clocknumber, restrictions)
values(9999, "bad back");

select * from employee where clocknumber = 1540;

-- DELETE from employee where clocknumber = 1235;
select * from template;
select * from department;

select * from job;

select count(jobid) as jobscount from job;
select * from schedule;
select * from schedule where jobname = "labor" and shift = 2;

select * from employee inner join job on employee.jobid = job.jobid where job.jobname like "Labor" 
order by shiftpref;
-- and shiftpref in (1,2,3);-- = 1;

	SELECT enote.clocknumber,
		sch.empname,
        sch.shift,
        enote.daterange,
        enote.eligible,
        enote.note
    FROM `sazerac`.`employeenote` AS enote
		INNER JOIN `sazerac`.`schedule` AS sch
        ON enote.clocknumber = sch.clocknumber;

select * from schedule where clocknumber = 1250;
select * from employeenote;

select * from employee where jobid = 22;
select * from template;
select * from employeenote;select * from schedule where jobname in ("Labor","LABOR");
insert into `template`
(
jobid, deptid, s1,s2,s3)
values
(5,2,9,8,8),		-- case feeders
(22,2,6,6,6),		-- fillers
(25,2,8,8,8),		-- labelers
(3,2,7,7,7),		-- packers
(17,6,4,5,4),	-- labor?
(8,2,8,7,4),		-- processors
-- (), -- utility operators -- 
(21, 4, 5,4,3), 	-- cdl operators
(14,4,3,4,3),		-- palletizers
(2,2,1,0,0)	-- should be main office is front office
-- (), -- office sanitation --
;

select * from department;


-- update employee set absence = "FMLA" where clocknumber= 1232;
-- update employee set absence = "Heart Break" where clocknumber= 1237;
-- update employee set restrictions = "Cannot lift more than 50lbs" where clocknumber= 1242;




select * from schedule_history where clocknumber = 1248;

select distinct scheduledate from schedule_history;

select * from schedule_history where scheduledate = "2019-10-14";

call GetScheduleHistoryByScheduleDate("2019-10-14");

call GetEmployeeById(1248);

SELECT DISTINCT scheduledate FROM schedule_history ORDER BY scheduledate ASC;

select * from employee where jobid in (10,3,5,22,25);

insert into `schedule_history` (
			senioritynumber,
			clocknumber,
			empname,
			jobname,
			departmentname,
            shift,
			shiftpref,
            scheduledate
		)
		VALUES 
		(
			'3',
			'1237',
			'Lindsay, Lohan3',
            'PACKER OPER',
			'BOTT',
			'1',
			'1',
            '2019-10-14 00:00:00'
		);

delete from `schedule_history` where scheduledate = "2019-10-14" and clocknumber = 1237;

-- truncate employee;

-- truncate template;

-- truncate department;

-- truncate job;

-- truncate schedule;

-- truncate schedule_history;