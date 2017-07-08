# RestfulApp

A simple demonstration of interaction between Angular with a restful node api.

## Starting the Node Server

While in the root directory of the app, run `npm start dev` then navigate to `http://127.0.0.1:3001/api/contacts`, and you should see an array of contact
objects in the form of a JSON object appear.

## Starting the Angular App

While the node server is running and on a different shell, run `ng serve`
to start the Angular app. You can navigate to `http://localhost:4200/` to check out the app The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
