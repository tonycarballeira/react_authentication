var React = require('react-native');

var { AppRegistry } = React;

// the below code requires main and registers it as the main component

var Main = require('./src/main');

AppRegistry.registerComponent('authentication', () => Main);


