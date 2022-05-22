# StartX Assignement

This repository is an answer to the take home assignement for StartX 

## 1. Overview of the features

I have implemented the following features

- A basic authentification system (not secure)
- Ability for judges toenter notes and ratings relatedto each rubric(PC, TD, EX andID)
- A Schedule for interviews of the day
- Ability tosee other judges notes and ratings in realtime.
- Ability to export a synthesis of those notes and ratings in an understandable way (the intent being to give feedback to founders on their interviews) through a downloadable pdf file.


## 2. Choice for the Database and its structure

-I chose Sqlite3 for my database and an ORM called TypeOPM which makes it just as easy as modifying a few lines of codes to switch to other databases such as Mysql or others 
-The structure of the database is described in the following picture 

## 3. Instructions to run the app

### 1.  Install npm dependencies:

In order to run the up, u'll need to have node and sqlite3 installed

Install dependencies for the backend. Open a terminal window and install the `backend`'s dependencies

```bash
cd server
npm install
```

Open a separate terminal window and navigate to the frontend directory and install its dependencies

```bash
cd client
npm install
```

### 2. Start the server (backend)

On the same terminal used in step 2, run the following command to start the server:

```bash
npm run dev
```

The server is now running at [`http://localhost:8000/`](http://localhost:8000/).

### 3. Start the app (frontend)

On the terminal window used to install frontend npm dependencies, run the following command to start the app:

```bash
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## 4. Ideas for features that you would have implemented if you had more time, and yourstrategy for implementing them.

### 1. Chat functionality

  Judges should be able to chat about their impressions in order to have a global understanding of the future founders.
To implement it:
-I would create a new table in the backend
-Then I would add the front components na dthe view 
### 1. Authentication
  A robust authentication system is needed for this POC :
-Implement a secure connection using JWT tokens
### 1. Schedule
  Monthly/Yearly schedule
-back already done
-need to do front
  Host an iframe for in solution meetings which would make the app a one stop shop
  



