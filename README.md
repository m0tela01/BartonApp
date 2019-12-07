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
This tab displays all of the employees. The table is editable so you can edit any of the fields related to an employee. The employee can be edited by pressing the edit button in the edit column.
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
You will need to press `Delete` to permanently remove this employee.
![image](https://user-images.githubusercontent.com/43968309/70369167-f3018680-1882-11ea-9acf-97704c274eb9.png)

### History Tab
_____________________________________________________________________________
Contact: michael.telahun1@gmail.com
