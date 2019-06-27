# NgAssessment

## Guidelines for monorepo

[Enterprise angular monorepo patterns](enterprise-angular-mono-repo-patterns.pdf)

## Fake REST API

Mocked backed is implemented with [json-server](https://github.com/typicode/json-server).

Creates rest endpoints from a json-config at `fake-rest-api/endpoints.json`

Run `npm run fake:rest:api` to create a server.

Server portal with resource description is available at http://localhost:3000

## Code linting

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

## App's documentation

Generation of static documentation for apps is implemented with [compodoc](https://compodoc.app/).

`npm run compodoc:shipping` to generate docs for `shipping` ng app

`npm run compodoc:shipping-backend` to generate docs for `shipping-backend` nest app

Generated docs are stored in `compodoc/`

## Performance

Auditing for web performance and best practice metrics is implemented via [Lighthouse](https://github.com/GoogleChrome/lighthouse).

`npm run lighthouse:mobile` for mobile report

`npm run lighthouse:desktop` for desktop report

Generated reports will open after running scripts & are stored in `lighthouse/`

## Visual regression testing

Is implemented with [backstopjs](https://github.com/garris/BackstopJS)

`npm run backstop:reference` to create reference images (stored in `backstop_data/bitmaps_reference`)

`npm run backstop:test` to test current app against reference images (stored in `backstop_data/bitmaps_test`)

`npm run backstop:test:ci` to test in CI without opening browser report (stored in `backstop_data/ci_test`)

`npm run backstop:approve` to approve tested images

`npm run backstop:open:latest` to open latest test report (stored in `backstop_data/html_report`)

## Accessibility testing

Is implemented with [pa11y](https://github.com/pa11y/pa11y).

`npm run a11y:test` to test http://localhost:4000/ and generate html report in `a11y/`

Exit codes:

`0` - Pa11y ran successfully, and there are no errors

`1` - Pa11y failed run due to a technical fault

`2` - Pa11y ran successfully but there are errors in the page

Make sure to have the app served on :4000 before running a11y test

---

# Enforce gitflow branches

Enforce best practice of gitflow branch naming patterns by failing push if branch name doesn't correspond to the gitflow pattern.
Implemented with [enforce-gitflow-branches](https://github.com/Dacrol/EnforceBranchNames)

![](https://trello-attachments.s3.amazonaws.com/5c546d7eddb4a82f52f14917/970x1572/915f284c485422b5aab05baa832bbb8b/image.png)

# Commit linting

Checks if your commit messages meet the conventional commit format. Note: Please check [rules](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md) / [rules](https://conventional-changelog.github.io/commitlint/#/reference-rules) before using it.

In general the pattern mostly looks like this:

`type(scope?): subject` (scope is optional)

Real world examples can look like this:

`chore: run tests on travis ci`

`fix(server): send cors headers`

`feat(blog): add comment section`

---

Common types according to [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) (based on the the Angular convention) can be:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

These can be modified by your own [configuration](https://github.com/conventional-changelog/commitlint#config).

You still can commit with `git commit`, however the recommended way to do it is by using **cli-prompt** for commits.

Implemented with [commitlint](https://github.com/conventional-changelog/commitlint)

![](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c544f7796142c1efdc3edd0/f8c47b856c62436587298256cff0ae77/Screen_Shot_2018-12-05_at_11.06.23.png)

---

# CLI prompt for commits

You still can commit with git commit, however the recommended way to do it is by using cli-prompt for commits - commitizen-cli. Run `yarn commit` to open
a prompt with a step-by-step wizard with hints to properly fill in the commit data.

![](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c544f7796142c1efdc3edd0/b7a3e5a846f7b88247d8e5da3285e81f/Screen_Shot_2018-12-05_at_11.23.31.png)

Implemented with [commitizen](https://github.com/commitizen/cz-cli)

Following conventional commit format will allow us to automatically generate changelog from commit history, that would have chapters (features, bugfixes, etc.) and would look like [this](https://github.com/angular/material2/releases)

# Recommended version bump

Run `npm run recommended:bump` to get a hit on a version for bump for release from conventional commit history.

Implemented with [conventional-recommended-bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump)

# Changelog generation

Run `npm run generate:changelog` to generate a changelog. Generates a changelog based on commits since the last semver tag that match the pattern of a "Feature", "Fix", "Performance Improvement" or "Breaking Changes". Conventional commits are a necessary prerequisite, enabling automatic changelog generation from commit history.

Implemented with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog).

![](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/aff687d86a74b45704cb8556ce242452/2019-02-01_16-48-48.png)

---

**Recommended flow:**

1. Run `npm run recommended:bump` to find out what is the recommended version for bump
2. Depending on which version you want to bump, run one of the following (this will also create git tag):
   ```
   yarn version --major
   yarn version --minor
   yarn version --patch
   ```
3. Generate changelog with `npm run generate:changelog`
4. Commit `package.json` and `CHANGELOG.md` files
5. Push including tags with `git push --follow-tags`
6. Manually create a release draft in Github and copypaste changelog’s release markdown to it
7. Publish release

---

According to gitflow, you first branch out to a new branch (e.g. `feature/some-feature`) to work on some functionality.
While developing on that branch, you might make multiple commits. Since changelog is generated based on existing conventional
commits (of types: `feat`, `fix`, `perf`, `revert`, `revert`), one has to shape the commit-history in such a way, that the
resulting generated changelog on one-hand is clean (has no duplicate data as would be in case of having multiple conventional
commits for one feature in a single branch), and on the other hand contains all the necessary data (a separate bullet in the
changelog list which you want to be present there).

Your tools to achieve that are:

- **Squash commits** into a single commit, thus have a single bullet in the changelog generated from it.
- Keep **separate commits** for the functionality you want to be present as bullets in the changelog

---

**Why squash commits?**

Squashing related commits is considered a good practice, since it helps to keep the git history clean
(especially valuable when there are a lot of people developing and pushing the code) and prevent its
pollution with commits (e.g. an enterprise project with tens of developers making and pushing commits
daily, without squashing very soon it will become hard to reason about the contents of git log due to
enormous amount of commits).

Let's say you branched out to a new feature branch and developed a feature, and made several commits:
![feature-several-commits](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/77d62919f24fdf664f7fb43ba5cecf27/Screenshot_2019-04-02_at_12.49.04.png)

If you would then generate a changelog without squashing related commits, you would get a bloated changelog like this:
![bloated-changelog](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/81185d451ef18c1495c830161b3f21ee/Screenshot_2019-04-02_at_12.52.52.png)

Now imagine, if you have 10 or more commits per feature? And then imagine, if you have 10 features?
And then imagine, if you have 10 developers, each pushing 10 features? At the end of the day you have
1000 commits for a release contributed to by 10 developers, polluted git history and changelog and difficult
times with reasoning about `git log` if you have to.

At this step, `squashing commits` comes to rescue.

---

**How to squash commits?**

In order to squash commits run `git rebase -i HEAD~N`, where `N` stands for amount of last commits, which
you want to be able to perform actions on in rebase editor (squash, edit, etc).
In this case we would like to squash last 5 commits, so run `git rebase -i HEAD~5`, which opens git rebase editor :
![rebase-commits-editor](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/a0d8afdd24b046ce0e7cbb816043cdb9/Screenshot_2019-04-02_at_13.41.16.png)

We would like to squash all feature functionality-specific commits into a single generic commit, so we leave `pick`
for commit we want to keep, and replace word `pick` with `squash` for commits we want to squash:

![squash-commits](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/07920c256909e45c6a1ff71e571ae0c6/Screenshot_2019-04-02_at_13.52.57.png)

Then write:quit and we get combination of squashed commits (where we can either edit or comment certain commit messages, if needed):

![combined-commits](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/4baa3b41e37edc912a60131ac184d10b/Screenshot_2019-04-02_at_14.00.14.png)

Then write:quit again and we get:

![squashed-commits](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/5252d47e8e1e1341c72d6089b269e9fd/Screenshot_2019-04-02_at_14.06.48.png)

At this step our last 5 commits were squashed into a single commit, what we can see from `git log`:

![squashed-commit](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/e4de9fd4389840ae590268bae9675c42/Screenshot_2019-04-02_at_14.09.06.png)

Now, if we generate a changelog, it will have just one generic feature commit, into which we squashed other feature-specific commits:

![clean-changelog](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/1d36b6991f306a114aee5283f2eed4bc/Screenshot_2019-04-02_at_14.19.09.png)

So as a result you get a clean changelog without duplicate data, yet at the same time you have more details about which commits does the generic one contain in `git-log`

---

This project was generated using [Nx](https://nx.dev).

## Quick Start & Documentation

[Nx Documentation](https://nx.dev)

[30-minute video showing all Nx features](https://nx.dev/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

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
