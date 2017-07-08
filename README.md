# RestfulApp

A simple demonstration of interaction between Angular with a restful node api.

## Getting Started

Clone the app by running `git https://github.com/lekosfmi/restful-app`.
After the app has been cloned, go to the root directory of the app,
and run `npm install .` to install the required dependencies.

## Starting the Node Server

While still in the root directory of the app, run `npm start dev`
then navigate to [http://127.0.0.1:3001/api/contacts](http://127.0.0.1:3001/api/contacts),
and you should see an array of contact objects in the form of a
JSON object appear.

## Starting the Angular App

While the node server is running and on a different shell, run `ng serve`
to start the Angular app. You can navigate to [http://localhost:4200/](http://localhost:4200/)
to check out the app.
