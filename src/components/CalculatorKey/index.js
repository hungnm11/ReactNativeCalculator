import React, { Component } from 'react';
import {
	TouchableHighlight,
	Text,
	StyleSheet
} from 'react-native';

class CalculatorKey extends Component {

	render() {
		
		return (
			<TouchableHighlight
				accessibilityRole="button"
				// onPress={}
				// style={[calculatorKeyStyles.root]}
			>
				<Text>Keys</Text>
			</TouchableHighlight>
		);
	}
};

const calculatorKeyStyles = StyleSheet.create({
	root: {
		width: 80,
		height: 80,
		borderTopWidth: 1,
		borderTopColor: '#777',
		// borderTopStyle: 'solid',
		borderRightWidth: 1,
		borderRightColor: '#666',
		// borderTopStyle: 'solid',
		// outline: 'none'
	},
	text: {
		lineHeight: 80,
		textAlign: 'center'
	}
})

export default CalculatorKey;