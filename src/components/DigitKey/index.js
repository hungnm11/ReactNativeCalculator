import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CalculatorKey from '../CalculatorKey';

class DigitKey extends Component {

	inputDigit(digit) {
		const {} = this.state;
	}

	render() {
		return (
			<CalculatorKey />
		);
	}
}

// const calculatorStyles = StyleSheet.create({
// 	digitKeys: {
// 		backgroundColor: '#e0e0e7',
// 		flexDirection: 'row',
// 		flexWrap: 'wrap-reverse'
// 	},
// });

export default DigitKey;