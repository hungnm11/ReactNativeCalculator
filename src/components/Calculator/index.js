import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculatorDisplay from '../CalculatorDisplay';

class Calculator extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			value: null,
			displayValue: '0',
			operator: null,
			waitingForOperand: false
		}
	}
	render() {
		const { displayValue } = this.state;
		return (
			<View style={calculatorStyles.root}>
				<CalculatorDisplay value={displayValue} />
			</View>
		);
	}
}

const calculatorStyles = StyleSheet.create({
	root: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
		// boxShadow: '0px 0px 20px 0px #aaa'
	}
});


export default Calculator;