import React, { Component } from 'react';
import {
	TouchableHighlight,
	Text,
	StyleSheet
} from 'react-native';

class CalculatorKey extends Component {
	render() {
		const { children, style, textStyle, onPress } = this.props;

		return (
			<TouchableHighlight
				accessibilityRole="button"
				onPress={onPress}
				style={[calculatorKeyStyles.root, style]}
				underlayColor='rgba(0,0,0,0.25)'
			>
				<Text 
					children={children}
					style={[calculatorKeyStyles.text, textStyle]} />
			</TouchableHighlight>
		);
	}
};

const calculatorKeyStyles = StyleSheet.create({
	root: {
		width: '33.33333%',
		height: 80,
		borderTopWidth: 1,
		borderTopColor: '#777',
		// borderTopStyle: 'solid',
		borderRightWidth: 1,
		borderRightColor: '#666',
		// borderTopStyle: 'solid',
		// outline: 'none',
		// flexWrap: 'nowrap'
	},
	text: {
		width: '100%',
		lineHeight: 80,
		textAlign: 'center'
	}
})

export default CalculatorKey;