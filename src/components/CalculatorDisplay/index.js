import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CalculatorDisplay extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			scale: 1
		}
	}

	render() {
		const { value } = this.props;
		const { scale } = this.state;
		const language = navigator.language || 'en-US'
		let formattedValue = parseFloat(value).toLocaleString(language, {
			useGrouping: true,
			maximumFractionDigits: 6
		});
		return (
			<View style={calculatorDisplayStyles.root}>
				<Text
					children={formattedValue}
					style={[calculatorDisplayStyles.text,
					{ transform: [{ scale }] }]} />
			</View>
		);
	}
}

const calculatorDisplayStyles = StyleSheet.create({
	root: {
		backgroundColor: '#1c191c',
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		alignSelf: 'flex-end',
		color: 'white',
		//lineHeight: 130,
		fontSize: 66,
		paddingHorizontal: 30,
		//position: 'absolute',
		right: 0,
		// transformOrigin: 'right'
	}
});

export default CalculatorDisplay;