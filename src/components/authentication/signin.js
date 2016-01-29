var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
	TextInput
} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text>Sign In</Text>
				<TextInput style={styles.input} />
			</View>
		)
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
	}
});