# Getting Started with Create React App

This is an authentication app built with React and a Node on Express server, using Material UI design.

## Requirements

Install PostgreSQL, create a database `createdb users` and create two tables:

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

### `psql 'users'`

This will start the database service.

### `npm run dev`

Runs the client and server in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
