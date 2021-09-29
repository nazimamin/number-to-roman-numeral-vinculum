# Number To Roman Numeral Vinculum Converter

A REST API service that converts a number to Roman numerals Vinculum format. Supports inclusive numbers between 1 and 2,200,000,000

###### Usage: http://localhost:8080/romannumeral?query={integer}

## Table of Contents

- [Getting Started](#getting-started)
- [Project Layout](#folder-structure)
- [Testing](#testing)
- [Code Style / Development Efficiency](#code-style)
- [Monitoring](#monitoring)
- [Logging](#logging)
- [Documentation](#docs)
- [Error Handling](#errors)
- [Dependencies](#deps)

## Getting Started <a name = "getting-started"></a>

#### Pre-Req and Installation:

1. The installation requires node.js and npm package manager. [NodeJS and NPM](https://nodejs.org/en/)
2. Clone the repo

   `git clone https://github.com/nazimamin/number-to-roman-numeral-vinculum.git`

3. Install dependencies and compile the project. Which will download all dependencies and project hooks

   `npm install`

4. Once everything is installed, use the below command to compile and run the application.

   `npm run start`

5. Once build is complete, it will automatically start the application to `http://localhost:8080/`
6. Launch the API through [`http://localhost:8080/romannumeral?query=<any number from 1 - 2,200,000,000>`](http://localhost:8080/romannumeral?query=9)
7. Test the API through Swagger-UI : [`http://localhost:8080/api-docs/`](http://localhost:8080/api-docs/)
8. Monitor the API dashboard: [`http://localhost:8080/api-monitor`](http://localhost:8080/api-monitor)

## Package Layout <a name = "folder-structure"></a>

```
project
│   README.md
│   package.json
│   package-lock.json
|   jest.config.js
|   prettier.config.js
|   .env // includes application specific meta data
│   ...
└───src
│      index.js // launches the application, api monitoring, api docs
|      configs // utilities and setups for environment variables, swagger, logs, monitoring
│      routes // contains express routes
|      controller // contains controller logic to accept/response to requests
|      services // contains business logic (algorithm)
└───test
|   │   controller // includes unit tests for controller
|   │   services // includes unit tests for business logics
|   │
|   └───it // contains integration tests
|
└───logs // contains application log dump
```

## Development Methodologies

The development and the set up of this project, was done with Developer Experience (DX) in mind. It provides many scripts and utilities to implement easy setup, separation of concerns, improve developer efficiency, code styles, test, build, and deploy.

### Testing <a name = "testing"></a>

After receiving the contract for the API, Test driven development (TDD) was used to increase the development process and define the API Schema. [Jest](https://jestjs.io/) framework is used to increase the runtime of our tests, better error reporting, and graceful end of tests.

##### Run tests:

`npm run test` // will run all the unite and integration tests using Jest

`npm run test:watch` // will run only changed tests using Jest in watch mode (useful during development).

Note: When you run test, a code coverage dashboard will be created in `<rootDir>/coverage` folder. That you can access to check coverage report of the code.

      Current coverage: 98.1%

### Code Styles / Developer Efficiency <a name = "code-style"></a>

In order to make sure that all the developers working on this project adheres to the same coding style, code format, and code quality; [eslint](https://eslint.org/) , [prettier](https://prettier.io/), and [githooks/husky](https://github.com/typicode/husky) is used.

While committing your changes to git, githooks will automatically lint, format, and fix your code before you can push to the remote branch. But, you can manually run the below commands to take advantage of it on demand.

    npm run dev // will launch application in development mode and enable hot-reloading

    npm run build // will build a minified version of our application for production using webpack

    npm run prepare // will automatically set up git hooks in the workspace

    npm run lint // will lint all code and warn/error for code styles and format

    npm run pre-commit // will fix code format, run linting, and stage the changes to git

    npm run pre-push // will lint code, run tests, and build application to check readiness before you can push upstream

##### Module aliasing

In order to make it easier for us to import/usage packages, webpack/jest/eslint aliasing is set up. You can import modules as such:

         @ // will point to the root of the folder
         @config // will point to ./src/configs folder
         @services
         @controllers
         @routes

You can change aliasing in `webpack.config.js` under `resolve -> extension -> alias` object.

Note: If you use VSCode and have issues with peeking with module aliasing, take a look [here for a solution](https://github.com/microsoft/vscode/issues/16320).

## Metrics, Monitoring, Logging, Documentation, Error Handling

### Metrics and Monitoring <a name = "monitoring"></a>

In order to monitor the health and memory usage of our application, and the uptime of our application, we set up an easy-to-use real-time web based dashboard which can be accessed after launching our application.

        1. Run `npm run start`
        2. Access dashboard from `http://localhost:8080/api-monitor` which shows the metrics and status of each API

### Logging <a name = "logging"></a>

Logging is crucial when it comes to debugging and tracing a bug. By default our application enables logging in console in development and logs to a `./logs` folder in production. Every logs include a traceId which is very useful to pin-point to find the exact errors.

### Documentation <a name = "docs"></a>

Documentation is used through out the code and the APIs are documented and adheres to the [OpenAPI Spec](https://swagger.io/specification/) which can be used to onboard our API to many cloud services such as Azure Console.

In order for our API consumers to easily access, test, and debug our APIs, a Swagger API UI is created and can be accessed after launching our application.

        1. Start application `npm run start`
        2. Access api-docs UI from `http://localhost:8080/api-docs`

### Error Handling <a name = "errors"></a>

We have set up error messages and codes to be consistent across the application that adheres to the [http spec](https://www.w3.org/Protocols/rfc2616/rfc2616.html)

    If there is a missing parameter: {statusCode: 400, message: 'Missing parameter. A valid parameter of type number between 1 and 2200000000 must be supplied.'}

    If there is an invalid parameter: {statusCode: 422, message: 'Invalid parameter. A valid parameter of type number between 1 and 2200000000 must be supplied.'}

    If a route does not exist: {statusCode: 404, message: 'Requested resource does not exist.'}

## Dependencies <a name = "deps"></a>

- [express.js](https://www.npmjs.com/package/express) : Web framework to build APIs faster
- [dotenv](https://www.npmjs.com/package/dotenv) : Let's us easily read application specific environment variables
- [pinojs](https://github.com/pinojs/express-pino-logger): Allows us to easily log to console and file
- [express-status-monitor](https://www.npmjs.com/package/express-status-monitor): Adds application metrics and monitoring
- [Webpack](https://www.npmjs.com/package/prettier) Bundler to helps us build our application and allows hot-reloading during development
- [Prettier](https://www.npmjs.com/package/prettier) Allows us to adhere to the same code style and formats across team members
- [jest](https://www.npmjs.com/package/jest) : Fast test runner to speed up our test development
- [supertest](https://www.npmjs.com/package/supertest) : Allows us to test integration between different layers of our application
