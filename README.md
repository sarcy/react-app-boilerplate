# React App Boilerplate.

## Purpose
A React boilerplate to get starting with building a React App. This uses [webpack](https://webpack.js.org) to build the generate the production code. The code uses React and ReactDOM and you can use [sass](http://sass-lang.com) for the styles or normal css.

The boilerplate also uses [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to help the developers while building the app.

### Prerequisites
You need to have the latest version of [Node.js](https://nodejs.org) installed. This should also install npm.

### To start with this boilerplate
* Clone the code on the local machine.
```
git clone https://github.com/sarcy/react-app-boilerplate.git react-app
cd react-app
```
* Install the required modules
```
npm install
```
* To start the development server use:
```
npm start
```
Once the server has started you can access the app on http://localhost:8080
* Build the production code using:
```
npm run build-prod
```
This creates the entire code in the *build* folder.

### Updating the code
All the code for to start working with the boilerplate can be found in the *src* folder. The main file that handles the app is *app.js*. The boilerplate also uses the *html-webpack-plugin* to create the html file for the app to work and uses the *index.html.ejs* as the template for this file.
