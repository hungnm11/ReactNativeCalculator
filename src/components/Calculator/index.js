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
							<DigitKey
								style={calculatorStyles.key0}
								textStyle={{ textAlign: 'left' }}>0</DigitKey>
							<DigitKey
								style={calculatorStyles.keyDot}
								textStyle={calculatorStyles.keyDotText}>.</DigitKey>
							<DigitKey>1</DigitKey>
							<DigitKey>2</DigitKey>
							<DigitKey>3</DigitKey>
							<DigitKey>4</DigitKey>
							<DigitKey>5</DigitKey>
							<DigitKey>6</DigitKey>
							<DigitKey>7</DigitKey>
							<DigitKey>8</DigitKey>
							<DigitKey>9</DigitKey>
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
	key0: {
		paddingLeft: 32,
		width: 160
	},
	keyDot: {
		overflow: 'hidden'
	},
	keyDotText: {
		fontSize: 60,
		marginTop: -10
	}
});


export default Calculator;