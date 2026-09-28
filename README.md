# Wp1ProjectZH
#SCROLL TO BOTTOM TO VIEW OVERVIEW CREATED BY ME



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# wp1-project-2026-Zac-Herrity


# Comic Character Finder

Comic Character Finder is a web application that allows users to search for comic book characters, view information about them and save their favourite characters.

The application was created as part of my Software Development studies and gave me experience working with Angular, TypeScript, Node.js, Express, APIs and MongoDB.

## Features

- Search for comic book characters
- View character information and images
- View details such as real name, aliases and publisher
- Browse search results using pagination
- Save characters to a favourites list
- Remove characters from favourites
- Add personal notes to favourite characters
- Update saved notes
- View detailed information about individual characters

## Technologies Used

- Angular
- TypeScript
- JavaScript
- HTML
- CSS
- Bootstrap
- Node.js
- Express
- MongoDB
- Comic Vine API

## How It Works

Users can search for a comic book character using the search bar.

The Angular frontend sends the search request to the Node.js and Express backend. The backend then communicates with the Comic Vine API and returns the character information to the application.

Users can select a character to view more information about them.

Characters can also be added to a favourites list. Favourite characters are stored in MongoDB so they can be viewed again later. Users can also add and update personal notes for their saved characters.

## API

The application uses its own Express API to handle requests between the Angular frontend, Comic Vine and MongoDB.

The API handles:

- Searching for characters
- Getting character details
- Getting saved favourites
- Adding favourites
- Updating notes
- Removing favourites

This allowed me to keep the frontend and backend parts of the application separate.

## Database

MongoDB is used to store favourite characters.

Saved information includes:

- Character ID
- Character name
- Real name
- Aliases
- Character image
- Publisher
- Description
- Personal notes
- Date added

## What I Learned

While developing this project I gained more experience with:

- Building web applications with Angular
- Working with TypeScript
- Creating components and services
- Angular routing
- Working with REST APIs
- Creating an API with Node.js and Express
- Using MongoDB to store application data
- CRUD operations
- Working with external APIs
- Pagination
- Handling errors
- Connecting a frontend, backend and database together

## About

Comic Character Finder was developed as a college project while studying Software Development.

The project helped me gain experience building a full stack web application and working with Angular, Node.js, Express, MongoDB and external APIs.
