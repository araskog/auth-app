# Auth App

This is an authentication app built with [React](https://reactjs.org/) and a [Node on Express server](https://expressjs.com/), using [Material UI design](https://mui.com/). With the app you can register, log in and see the your most recent logins.

## Requirements

Install requirements by running `npm install` in the project and /client directory.

Install PostgreSQL, create a database by running `createdb users` and create two tables:

```
create table login(
    id serial primary key,
    hash varchar(100) not null,
    email text unique not null
);
```

```
create table users (
    id serial primary key,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    email text unique not null,
    logins timestamp[],
    joined date
);
```

## Available Scripts

In the project directory, run:

### `psql users`

This will start the database service.

### `npm run dev`

Runs the client and server in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.
