# BartonApp
Master Project for Barton Angular App. This project began as a combination of the intial repositories for BartonAPI and BartonWebApp.


# Contributors of this project
Michael Telahun
Jacob Wolf
Colin Kellogg


This was the capstone project for Fall 2019 Computer Science & Computer Engineering at the Univeristy of Louisville.
_____________________________________________________________________________
_____________________________________________________________________________

# Installation
For a full list of deployment details of this application see deploymentReadme.txt

_____________________________________________________________________________
## Before cloning
Install MySQL server. 

_____________________________________________________________________________
## Clone
```
git clone https://github.com/m0tela01/BartonApp.git
```
_____________________________________________________________________________
## After cloning

_____________________________________________________________________________
_____________________________________________________________________________

# Documentation of final product
### Home Tab
This tab is the landing page where the application opens. Redirects to `Scheduler Tab` tab by pressing `Start Scheduling` to start the scheduling process. In the inital design this was going to show histories of previous schedules for sponsor logging and record keeping.
![image](https://user-images.githubusercontent.com/43968309/70368826-c6973b80-187d-11ea-8ef1-e56d357d5650.png)

### Scheduler Tab
This tab gathers the components required for scheduling defined by Ryan Daigle. The table is editable so you can edit the number of employees for each shift. The table will save automatically before generating the schedule.
![image](https://user-images.githubusercontent.com/43968309/70368874-65239c80-187e-11ea-9b21-d4adb99f53df.png)

It also allows you to add/delete jobs for the schedule.
![image](https://user-images.githubusercontent.com/43968309/70368923-1e827200-187f-11ea-8929-10a869dfc1bd.png)
![image](https://user-images.githubusercontent.com/43968309/70368931-32c66f00-187f-11ea-8991-a3ca2dba1d14.png)

You can also add an absence such as a vacation for a specific clock number. You can specifiy the dates and the employee's eligibility  which will be included in the report. An absence employee which is not eligible will not be included in the workflow for generating next weeks schedule.
![image](https://user-images.githubusercontent.com/43968309/70368938-83d66300-187f-11ea-9f45-56436bf444e3.png)
![image](https://user-images.githubusercontent.com/43968309/70368944-a5cfe580-187f-11ea-98b3-da595269511a.png)
![image](https://user-images.githubusercontent.com/43968309/70368947-bc763c80-187f-11ea-88b1-39803cb20fe4.png)
![image](https://user-images.githubusercontent.com/43968309/70368967-05c68c00-1880-11ea-8885-a6ad6fc376df.png)

The `Run Scheduler` button will perform all the work for generating the following weeks schedule and when it is complete it will redirect you to the `History Tab`.
### Employee Tab
This tab displays all of the employees. The table is editable so you can edit any of the fields related to an employee except clock number. The employee can be edited by pressing the edit button in the edit column.
![image](https://user-images.githubusercontent.com/43968309/70369057-7ae69100-1881-11ea-97ba-a5b8ebd7297c.png)

To save the changes you can press the `Green` button in the edit column and to discard any changes press the `Red` button. ![image](https://user-images.githubusercontent.com/43968309/70369071-bb460f00-1881-11ea-9f94-a7e391337bea.png)

If an employee is removed or added the seniority numbers of all employees will be updated after the page has been refreshed. When adding a new employee the seniority number will be automatically populated.
You can add a new employee by pressing `Add New Employee`.
![image](https://user-images.githubusercontent.com/43968309/70369093-11b34d80-1882-11ea-9154-799d173653cf.png)
![image](https://user-images.githubusercontent.com/43968309/70369106-46bfa000-1882-11ea-87d7-d6f7c9bdaa81.png)
![image](https://user-images.githubusercontent.com/43968309/70369115-62c34180-1882-11ea-8ead-d3eb9e173796.png)

You can also add jobs on this page by pressing `Add New Job`. They will be included in the list of jobs on the `Scheduler Tab`.
![image](https://user-images.githubusercontent.com/43968309/70369126-78386b80-1882-11ea-8729-382abbf0f5f9.png)
![image](https://user-images.githubusercontent.com/43968309/70369134-97cf9400-1882-11ea-8b06-b3a64ecd48a1.png)

You can remove an employee by pressing `Delete Employee` and entering their clock number.
![image](https://user-images.githubusercontent.com/43968309/70369151-c77e9c00-1882-11ea-8c75-71a6c4f05ff2.png)
![image](https://user-images.githubusercontent.com/43968309/70369198-90f55100-1883-11ea-9fba-fa91a2e5f2e2.png)

You will need to press `Delete` to permanently remove this employee.
![image](https://user-images.githubusercontent.com/43968309/70369167-f3018680-1882-11ea-9acf-97704c274eb9.png)

### History Tab
This tab is for viewing the current weekday schedule for the following Monday. It is only generated when the `Run Scheduler` button is pressed on the `Scheduler Tab`. It will always display the most recently generated schedule. The schedule is seperated by each shift.
![image](https://user-images.githubusercontent.com/43968309/70369259-550ebb80-1884-11ea-8e4e-5855269d1499.png)
![image](https://user-images.githubusercontent.com/43968309/70369271-7b345b80-1884-11ea-8b0c-2e4aeb529fbf.png)
![image](https://user-images.githubusercontent.com/43968309/70369278-8ab3a480-1884-11ea-94ff-3ef645d9789c.png)

By default if there are no employee vacations or absences you will see a message like this: ![image](https://user-images.githubusercontent.com/43968309/70369228-ef223400-1883-11ea-8eff-84f01b0ef701.png)

If there are any employees on vacation or absent (employees who have been marked not eligible to work) they will appear in the footer of the shift of their shift preference.
![image](https://user-images.githubusercontent.com/43968309/70369292-d5cdb780-1884-11ea-8d7c-23fcf4cb70c1.png)

The schedule can be exported as an excel by pressing the `Exports All Shifts Into One Excel`. 
![image](https://user-images.githubusercontent.com/43968309/70369319-79b76300-1885-11ea-939e-4da0f760c820.png)

This will display each of the shifts in a different sheet, all of the people not scheduled will be put into a sheet called `Vacation #` where the hastag is the shift of their preference. A final sheet includes all of the people who were not scheduled.
![image](https://user-images.githubusercontent.com/43968309/70369349-e0d51780-1885-11ea-8225-a47bbadc3a47.png)
![image](https://user-images.githubusercontent.com/43968309/70369361-03ffc700-1886-11ea-82f7-a5e1fa34f13f.png)

_____________________________________________________________________________
Contact: michael.telahun1@gmail.com
