# se-01-team-24
SE Sprint 01, Team 24

We chose a clean, minimal look for the design of the game. Keeping things simple and 
easy to find. In this first sprint we made a working homepage with a navigation menu 
that takes you to login and register pages. From the login page you can select your role 
as an Instructor or as Player. We made separate login pages for each role. 
All pages were linked using Django, created using HTML and styled with CSS and JavaScript.

Forms Folder - Html forms
Static Folder - images and Css file

Order: Index.html
       stylesheet.css
       Role.html
       instructorlogin.html
       studentlogin.html
       signup.html
       
       
# se-02-team-24 (Aabishkar and Aoge)

Architechture Notes
------------------
* The backend is written in Python and uses the Flask server
* For the Database we have used Sqlite for local testing as CLAMV was not being connected to the website
* The frontend is written REACT JS and has been served using a node.js server.
* The frontend communicates with the backend using REST architecture.

Steps to setup & start the backend server
---------------------------------------------
* Make sure you have python virtual env installed. Create a virtual env in the root directory of the backend: `virtualenv venv`
* Switch to the venv: `source venv/bin/activate`
* Install all the python requirements: `pip3 install -r requirements.txt`
* Run the inital db migration from the root backend directory `yoyo apply`
* From the root backend directory run `python3 main.py`


Steps to setup & start the frontend server
------------------------------------------
* Make sure you have `node.js` installed. 
* In /frontend/web install all the required packages using `npm install`.
* Run `npm start` to run in the development mode. 

Steps to run the unittests
--------------------------
* From the backend root directory run `python3 connection_test.py`

Steps to see the data in database file
--------------------------------------
* From the backend root directory run `python3 view_table_data.py`


Progress report:
- [x] Setup Flask Server
- [x] Setup SQL in db_migrations/createtables.sql
- [x] Setup database in SQLITE3 for testing purposes
- [x] Setup database in CLAMV using SQL
- [ ] Connect CLAMV database to website -> CLAMV did not connect to website because it says the user is not authorized
- [x] Converted old html pages to REACT JS and did more styling to make the page look better
- [x] Added some new pages (Home page, game page after succesfull login) to frontend
- [x] Connect frontend to flask and flask to database such that the frontend and databases are connected and ready
- [x] Did some backend testing for creation of Player and Instructor using unittests
- [x] Used password hash instead of plaintext password for safety in frontend
- [x] Did user authentication in login page such that only verified Players and Instructors can login

Folder and File Descriptions: (only the important files are listed)

    frontend
    ├── forms (from old sprint)
    ├── login (from old sprint)
    ├── static (from old sprint)
    ├── web (This is the frontend we created with REACT)
        ├── src
           ├──components
              ├── pages
                 ├──index
                    ├── Interact.js (it helps in changing between the login and signup form through user interaction/clicks)
                    ├── login.js (the login form code)
                    ├── SignUp.js (the signup form code)
                 ├── Home.js (the home page)
                 ├── Instruction.js (the instruction page)
                 ├── Instructor.js (the Instructor page that contains login and signup for player)
                 ├── Player.js (the player page that contains the login and signup for player)
                 ├── Navbar.js (the navbar code that is seen in every page)
           ├── App.js (main file for the REACT App)

    backend
    ├── db_migrations (sql file with the tables for database)
    ├── src
       ├── connection.py  (contains main connection file that connects server to database)
    ├── beer_game.db (the database file where all the datas are stored)
    ├── connection_test.py (backend testing)
    ├── main.py (main file to run the flask server and also contains function for registering and authenticating user)
    ├── view_table_data.py (file to see the datas of Person and Instructor table of the database)
    ├── yoyo.ini (initialization code for the sqlite database)
  
