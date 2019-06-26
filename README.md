# NgAssessment

## Linting

To lint all apps & libs run `npm run lint`

To lint apps & libs separately run either of following:

- `ng lint shipping`
- `ng lint shipping-e2e`
- `ng lint shipping-backend`
- `ng lint data`
- `ng lint ui-components`

Linting of all apps & libs is done automatically on `pre-commit` and `pre-push`

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

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `npm run affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `npm run affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `npm run dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
