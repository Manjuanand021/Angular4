# Shipping Label Maker

#### Setup
```
$ npm i
$ Reference https://scotch.io/tutorials/using-sass-with-the-angular-cli for setting up scss
```
#### Run
```
$ npm start  - kick starts the webpack dev server and then hit http://localhost:4200/
$ npm build - creates production ready build

```
#### Design changes
```
$ I have changed the design of the application little bit than what was asked to create. I found creating router outlet in wizard component is easiest way to understand the flow and is clean approach.
$ Wizard component and all the other steps, I have moved them in shared module and I have created routes for each step.
$ created seperate header and footer components in shared module
$ Used progress-bar directive to highlight the stpe in the header
$ Used router channel service, whose sole purpose is to facilitate smooth data flow betwen routes, update redux store and handle the communication between routes
$ Used redux(ngrx) for application state management
$ Used Subject Observable for communication between sibling components.
$ Implemented template driven forms and validations
$ Used SCSS for wrting and pre-processing CSS

```

#### Could have done better
```
$ I could have structured the application properly(according to the requirements)
$ Implemented login functionality and guard shipping related routes using CanActivate guard

```

#### I have finished what is possible from my side within the timeline. Thanks.