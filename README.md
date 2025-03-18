Automated tests for 

## Setup

- Install Node, NPM, Yarn and Allure if you don't have those yet.

- Install playwright framework

## Run the command, then following the below actions
`yarn create playwright`
  - Do you want to use TypeScript or JavaScript? · JavaScript
  - Where to put your end-to-end tests? · e2e   
  - Add a GitHub Actions workflow? (y/N) · false
  - Install Playwright browsers (can be done manually via 'yarn playwright install')? (Y/n) · false
  - playwright.config.js already exists. Override it? (y/N) · false

## Install browser and driver
  `yarn playwright install`

## Running tests

### How to run all tests

`yarn playwright test`

### How to run tests based on specific tags

`yarn playwright test tests/dashboard.spec.js`

## How to generate the report

`npx allure-commandline serve allure-results`
