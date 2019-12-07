<!-- Database Configuration -->
-- install mysql -- https://dev.mysql.com/downloads/installer/
-- install mysql server -- https://dev.mysql.com/downloads/mysql/
-- install mysql workbench -- https://dev.mysql.com/downloads/workbench/

-- cd C:\Program Files\MySQL\MySQL Server 8.0\bin\
-- mysql -u root -p
-- CREATE USER 'root'@'%' IDENTIFIED BY 'root';
-- GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

<!-- Database Creation -->
-- create database in mysql *with the same name in solution* 
-- create tables: file bartonSchedulerCreateTables.sql
-- create procedures: file barttonSchedulerProcedures.sql
-- populate tables: run BartonDB project -- need to find alternative if we cant use vs w/ client
	-- need to generate csv/excel from BartonDB project
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

<!-- IIS Configuration -->
-- turn on IIS in windows control panel
-- create/configure BartonScheduler site in IIS
-- create/configure BartonScheduler app pool in IIS
-- grant access to physical path of site
	-- IIS_IURS
	-- IIS APPPOOL\BARTONSCHEDULER
	-- give access to folder for read/write
-- install dot net core runtime & hosting bundle -- https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-3.0.0-windows-hosting-bundle-installer
-- use port 8888 for api
-- Set Access-Control-Allow-Origin to * in HTTP response Headers configuration
	-- After app is deployed
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

<!-- Firewall Configurations -->
-- if more than 1 user add Inbound rule for site port


<!-- App configuration -->
-- update connection string from new database w/ client
-- Need to add the new connection string manually to project so that it is not visible from the outside. 
	-- To do this Install Visual Studio. https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16
	-- Set the connection string in the file CreateDB.cs in \BartonApp\Barton1792DB for BSConnectionString => 'The New Connection String'.
	-- Republish the application to BartonApp\AppPublish
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

<!-- Extras/Maybes -->

-- install Microsoft Visual C++ libraries for allowing dot net to work
-- if more than 1-2 users configure permitted user accounts to use app - need IT and AD access
-- add Outbound rule for site port -- if needed
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->