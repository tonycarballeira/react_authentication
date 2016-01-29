var React = require('react-native');
var Firebase = require('firebase');	
var myFirebaseRef = new Firebase('https://crackling-inferno-2914.firebaseio.com/')

var {
	View,
	Text,
	StyleSheet
} = React;

var Signin = require('./components/authentication/signin')

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Signin />
			</View>
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});