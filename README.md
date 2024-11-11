# Home Library Service

The Home Library Service is a Node.js application built with the Nest.js framework to manage a music library. The service includes modules for handling `Users`, `Tracks`, `Albums`, `Artists`, and `Favorites`, each following Nest.js architecture conventions. The application provides a RESTful API with CRUD operations and includes an OpenAPI (Swagger) documentation for easy access to API specifications.

## Features

- **User Management**: Create, update, delete, and retrieve user information.
- **Track Management**: Add, update, delete, and retrieve tracks with optional album and artist associations.
- **Album Management**: Add, update, delete, and retrieve albums with optional artist associations.
- **Artist Management**: Add, update, delete, and retrieve artist information.
- **Favorites Management**: Add and remove tracks, albums, and artists to/from favorites, and retrieve all favorite items.
- **OpenAPI Documentation**: API documentation available at `/doc`.

## Prerequisites

- **Git** - [Download & Install Git](https://git-scm.com/downloads).
- **Node.js** - [Download & Install Node.js](https://nodejs.org/en/download/) along with the npm package manager.

## Installation

1. **Clone the repository**:  
   git clone {repository URL}

2. **Install NPM dependencies**:
    npm install

## Configuration  
- The default port for this application is 4000.
- Environment variables such as PORT are configured in a .env file. Update the .env file as needed.

## Running the Application  
- To start the application, run:  
    npm start
- After starting, the application will be accessible at http://localhost:4000 by default.

## Testing  
The application includes comprehensive tests for each module, including tests for both authorized and unauthorized access.
- Running All Tests (without authorization):  
  **npm run test**

## Code Quality and Formatting  
To ensure code quality and consistent formatting, the following scripts are provided:
- Linting: Checks for syntax and style issues.
  **npm run lint**
- Auto-fix and Formatting: Automatically fixes lint errors and formats code.
  **npm run format**

## Directory Structure
The application follows a modular structure, with separate modules for Users, Tracks, Albums, Artists, and Favorites. Each module includes a controller, service, and DTOs, following Nest.js best practices.
- Controllers: Handle HTTP requests and responses.
- Services: Contain business logic and interact with data.
- DTOs: Define data structures and validation for incoming requests.