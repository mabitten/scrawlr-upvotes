# Upvotes Project

This project is a voting application built with React, TypeScript, and Vite. It is configured with ESLint and Prettier to ensure code quality and uses JSDoc for documentation.

## Features

- **Voting System**: Allows users to vote on items.
- **Documentation**: Utilizes JSDoc to document key classes and functions.
- **Linting and Formatting**: Configured with ESLint and Prettier to maintain clean and organized code.

## Technologies Used

- **React**: A library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast build tool for modern web projects.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: A code formatter.
- **JSDoc**: A tool for generating documentation from comments in the code.

## Project Architecture

The project follows a clean architecture approach, which separates concerns into different layers:

- **Domain**: Contains the core business logic and use cases, such as the `ToggleVote` use case.
- **Infrastructure**: Manages data access and storage, including repositories.
- **Presentation**: Handles the user interface, including components and hooks.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the project for production.
- `npm run test`: Runs tests using Vitest.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run format`: Runs Prettier to format the code.
- `npm run doc`: Generates documentation using JSDoc.

## Configuration

### ESLint and Prettier

The project is configured to use ESLint and Prettier. Import rules are automatically applied when saving files in VSCode.

### JSDoc

To generate documentation, run:

## Project Setup

1. **Clone the repository**:

   ```bash
   git clone git@github.com:mabitten/scrawlr-upvotes.git
   cd upvotes-project
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
