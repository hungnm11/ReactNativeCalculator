import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculatorDisplay from '../CalculatorDisplay';
import DigitKey from '../DigitKey';

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
				<View style={calculatorStyles.keypad} >
					<View style={calculatorStyles.inputKeys} >
						<View style={calculatorStyles.digitKeys}>
							<DigitKey />
						</View>
					</View>
				</View>
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
	},
	keypad: {
		height: 400,
		flexDirection: 'row'
	},
	inputKeys: {
		width: 240
	},
	digitKeys: {
		backgroundColor: '#e0e0e7',
		flexDirection: 'row',
		flexWrap: 'wrap-reverse'
	},
	digitKeyText: {
		fontSize: 32
	},
});


export default Calculator;