# NgAssessment

## Fake REST API

Mocked backed is implemented with [json-server](https://github.com/typicode/json-server).

Creates rest endpoints from a json-config at `fake-rest-api/endpoints.json`

Run `npm run fake:rest:api` to create a server.

Server portal with resource description is available at http://localhost:3000

## Linting

To lint all apps & libs run `npm run lint`

To lint apps & libs separately run either of following:

- `ng lint shipping`
- `ng lint shipping-e2e`
- `ng lint shipping-backend`
- `ng lint data`
- `ng lint ui-components`

Linting of all apps & libs is done automatically on `pre-commit` and `pre-push`

## Unit tests

To unit test all apps & libs via [Jest](https://jestjs.io) run `npm run test`. By default if no tests are specified for app / lib it will pass.

- `ng test shipping`
- `ng test shipping-e2e`
- `ng test shipping-backend`
- `ng test data`
- `ng test ui-components`

Unit testing of all apps & libs is done automatically on `pre-push`.

Run `npm run affected:test` to execute the unit tests affected by a change.

## Coverage

In order to test coverage of all apps & libs run `npm run test:coverage`
Results are available in `coverage/` dir in root.

Coverage is checked while unit-testing the app in `pre-push` (will fail if unit tests don't meet coverage thresholds).

Coverage thresholds are setup in `jest.config.js` :

- branches: 100
- functions: 100
- lines: 100
- statements: -10

## E2E tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `npm run affected:e2e` to execute the end-to-end tests affected by a change.

By default e2e tests are automatically run on `pre-push`.

## Consistent code style

Consistent code style is enforced with [Prettier](https://prettier.io/).

Settings are available in `.prettierignore` & `.prettierrc`

To prettify the codebase manually, run `npm run prettify`

Executed automatically on:

- `pre-commit`
- `pre-push`
- in `ci`

## Application shell

Run `npm run build:shell` to build the shipping angular app with app shell.
To verify that app shell was built successfully check the contents of `dist/apps/shipping/index.html`
to contain rendered contents of `apps/shipping/src/app/app-shell/`.

For profiling open the shipping app in chrome and in `Performance` tab hit `Shift + Cmd + E`.

## HMR

In order to start the `shipping` front-end app with hot module replacement enabled, run `npm run shipping:hmr`

The web-page will reflect occurring changes in the code without live-reload (page refresh).

## Build

Run `ng build <project>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## SSR

To verify that SSR works, run:

- `npm run ssr` to build client and server and serve with server-side rendering
  - UI at http://localhost:4000/
  - API at http://localhost:4000/api
- `curl http://localhost:4000/ > shipping.html` that will put all the contents of the retrieved html file
  via http request to **curl.html** in the root.

All contents of the app component will be rendered to retrieved html file. If you do the same with
`npm run start` the retrieved html file will only contain `<app-root></app-root>` element but not its content.

## Shared UI-components library

Multiple front-end apps might be consuming reusable shared UI-components. Reusing shared UI-components with
well-defined APIs will make development and delivery of domain related value easier & faster. Thus shared
UI-components should be placed into `ui-components` library, located at `libs/ui-components`.

- to lint data library run `ng lint ui-components`
- to test data library run `ng test ui-components`

## Shared data library

Front-end and back-end apps should use as much shared code, as possible, in order to prevent diverging of the code
for same entities in FE and BE, which will make the entire app more error-prone eventually. Thus for keeping shared
code between FE and BE apps there is a lintable & testable `data` library, located at `libs/data`.

- to lint data library run `ng lint data`
- to test data library run `ng test data`

## Browser compatibility

Configuration for browser compatibility are set in package.json in `"browserslist"`. Current options are to support `last 2 versions` of browsers with `> 1%` share.

## Budgets

Custom budgets for the entire `shipping` app size are set to the following options in `angular.json`:

- `baseline` = 750kb
- `maximumWarning` = 200kb
- `maximumError` = 400kb

## Deploy to gh-pages

Deployed app will be available at https://nongrata081.github.io/ng-assessment/

In order to deploy to gh-pages make sure that in `dist/` directory root built bundles with `index.html` are present.

Install angular-cli-ghpages
`npm i -g angular-cli-ghpages`

Build the app
`ng build prod`

Publish to gh `ngh`

## Dependency graph

Run `npm run dep-graph` to generate & open the graph of dependencies in the workspace.

Run `npm run affected:dep-graph` to see the graph of affected entities in the app
(since retesting & rebuilding everything always will not be scalable and will take too much time).

## CI/CD

`.travis.yml` has next steps for travis ci:

- commit lint
- lint
- unit test
- e2e

## Bundle analyze

`npm run build:stats` to build the shipping app with stats.json files for es5 & es2015

`npm run analyze:bundle:es5` to use webpack-bundle-analyzer for es5 bundle stats

`npm run analyze:bundle:es2015` to use webpack-bundle-analyzer for es2015 bundle stats

## Styleguide / UI components library app

Is implemented with [Storybook](https://github.com/storybookjs/storybook).

Config files available at `.storybook/`

`npm run storybook` to run the app
`npm run build-storybook` to build static files, output dir by default `storybook-static/`

## Compodoc

Generation of static documentation for apps is implemented with [compodoc](https://compodoc.app/).

`npm run compodoc:shipping` to generate docs for `shipping` ng app

`npm run compodoc:shipping-backend` to generate docs for `shipping-backend` nest app

Generated docs are stored in `compodoc/`

---

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Angular CLI power-ups for modern development.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev)

[30-minute video showing all Nx features](https://nx.dev/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, .etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@ng-assessment/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
