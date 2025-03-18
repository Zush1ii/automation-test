Automated tests for 

## Setup

- Install Node, NPM and Yarn if you don't have those yet.

- Install playwright framework

  `yarn create playwright`

## Running tests

### How to run all tests

`yarn playwright test`

### How to run tests based on specific tags

`yarn playwright test tests/dashboard.spec.js`

## How to generate the report

`allure serve allure-results`