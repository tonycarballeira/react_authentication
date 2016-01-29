var React = require('react-native');
var Firebase = require('firebase');	
var myFirebaseRef = new Firebase('https://crackling-inferno-2914.firebaseio.com/')

var {
	View,
	Text,
	StyleSheet,
	TextInput
} = React;

var Button = require('../common/button');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			username: '',
			password: ''
		};
	},

	render: function() {
		return (
			<View style={styles.container}>
				<Text>Sign In</Text>

				<Text style={styles.label}>Username:</Text>
				<TextInput 
				 style={styles.input}
				 value={this.state.username}
				 onChangeText={(text) => this.setState({username: text})} />

				<Text style={styles.label}>Password:</Text>
				<TextInput 
				 secureTextEntry={true} 
				 value={this.state.password}
				 onChangeText={(text) => this.setState({password: text})}
				 style={styles.input} />

				<Button text={'Sign In'} onPress={this.onPress} />
			</View>
		);
	},

	onPress: function() {
		console.log('hello');

		myFirebaseRef.set({
  			title: "Hello World!",
  			author: "Firebase",
  			location: {
				city: "San Francisco",
    			state: "California",
    			zip: 94103
  			}
		});
	}
});


var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center'
	},
	label: {
		fontSize: 18
	}
});