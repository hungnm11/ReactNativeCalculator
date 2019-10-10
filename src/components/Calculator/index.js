import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculatorDisplay from '../CalculatorDisplay';
import DigitKey from '../DigitKey';
import FunctionKey from '../FunctionKey';
import OperatorKey from '../OperatorKey';

const CalculatorOperations = {
	'/': (prevValue, nextValue) => prevValue / nextValue,
	'*': (prevValue, nextValue) => prevValue * nextValue,
	'+': (prevValue, nextValue) => prevValue + nextValue,
	'-': (prevValue, nextValue) => prevValue - nextValue,
	'=': (prevValue, nextValue) => nextValue
  }

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

	clearAll() {
		this.setState({
			value: null,
			displayValue: '0',
			operator: null,
			waitingForOperand: false
		})
	}

	clearDisplay() {
		this.setState({
			displayValue: '0'
		})
	}

	inputDigit(digit) {
		const { displayValue, waitingForOperand } = this.state

		if (waitingForOperand) {
			this.setState({
				displayValue: String(digit),
				waitingForOperand: false
			})
		} else {
			this.setState({
				displayValue: displayValue === '0' ? String(digit) : displayValue + digit
			})
		}
	}

	toggleSign() {
		const { displayValue } = this.state
		const newValue = parseFloat(displayValue) * -1

		this.setState({
			displayValue: String(newValue)
		})
	}

	inputPercent() {
		const { displayValue } = this.state
		const currentValue = parseFloat(displayValue)

		if (currentValue === 0)
			return

		const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
		const newValue = parseFloat(displayValue) / 100

		this.setState({
			displayValue: String(newValue.toFixed(fixedDigits.length + 2))
		})
	}

	inputDot() {
		const { displayValue } = this.state

		if (!(/\./).test(displayValue)) {
			this.setState({
				displayValue: displayValue + '.',
				waitingForOperand: false
			})
		}
	}

	performOperation(nextOperator) {
		const { value, displayValue, operator } = this.state
		const inputValue = parseFloat(displayValue)

		if (value == null) {
			this.setState({
				value: inputValue
			})
		} else if (operator) {
			const currentValue = value || 0
			const newValue = CalculatorOperations[operator](currentValue, inputValue)

			this.setState({
				value: newValue,
				displayValue: String(newValue)
			})
		}

		this.setState({
			waitingForOperand: true,
			operator: nextOperator
		})
	}

	render() {
		const { displayValue } = this.state;
		const clearDisplay = displayValue !== '0'
		const clearText = clearDisplay ? 'C' : 'AC'

		return (
			<View style={calculatorStyles.root}>
				<CalculatorDisplay value={displayValue} />
				<View style={calculatorStyles.keypad} >
					<View style={calculatorStyles.inputKeys} >
						<View style={calculatorStyles.inputWrapperKeys}>
							<View style={calculatorStyles.functionKeys}>
								<FunctionKey onPress={() => clearDisplay ? this.clearDisplay() : this.clearAll()}>{clearText}</FunctionKey>
								<FunctionKey onPress={() => this.toggleSign()} style={calculatorStyles.keySign}>±</FunctionKey>
								<FunctionKey onPress={() => this.inputPercent()} style={calculatorStyles.keyPercent}>%</FunctionKey>
							</View>
							<View style={calculatorStyles.digitKeys}>
								<DigitKey
									onPress={() => this.inputDigit(0)}
									style={calculatorStyles.key0}
									textStyle={{ textAlign: 'left' }}>0</DigitKey>
								<DigitKey
									onPress={() => this.inputDigit()}
									style={calculatorStyles.keyDot}
									textStyle={calculatorStyles.keyDotText}>.</DigitKey>
								<DigitKey onPress={() => this.inputDigit(1)}>1</DigitKey>
								<DigitKey onPress={() => this.inputDigit(2)}>2</DigitKey>
								<DigitKey onPress={() => this.inputDigit(3)}>3</DigitKey>
								<DigitKey onPress={() => this.inputDigit(4)}>4</DigitKey>
								<DigitKey onPress={() => this.inputDigit(5)}>5</DigitKey>
								<DigitKey onPress={() => this.inputDigit(6)}>6</DigitKey>
								<DigitKey onPress={() => this.inputDigit(7)}>7</DigitKey>
								<DigitKey onPress={() => this.inputDigit(8)}>8</DigitKey>
								<DigitKey onPress={() => this.inputDigit(9)}>9</DigitKey>
							</View>
						</View>
						<View style={calculatorStyles.operatorKeys}>
							<OperatorKey onPress={() => this.performOperation('/')}>÷</OperatorKey>
							<OperatorKey onPress={() => this.performOperation('*')}>x</OperatorKey>
							<OperatorKey onPress={() => this.performOperation('-')}>-</OperatorKey>
							<OperatorKey onPress={() => this.performOperation('+')}>+</OperatorKey>
							<OperatorKey onPress={() => this.performOperation('=')}>=</OperatorKey>
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
		height: '80%',
		flexDirection: 'row'
	},
	inputKeys: {
		width: '100%',
		backgroundColor: '#e0e0e7',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	inputWrapperKeys: {
		width: '75%',
		// flexDirection: 'column'
	},
	digitKeys: {
		flexDirection: 'row',
		flexWrap: 'wrap-reverse'
	},
	digitKeyText: {
		fontSize: 64
	},
	key0: {
		paddingLeft: 32,
		width: '66.66666%'
	},
	keyDot: {
		overflow: 'hidden'
	},
	keyDotText: {
		fontSize: 60,
		marginTop: -10,
	},
	functionKeys: {
		// backgroundImage: 'linear-gradient(to bottom, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%)',
		flex: 0,
		backgroundColor: '#e0e0e7',
		flexDirection: 'row',
	},
	operatorKeys: {
		// backgroundImage: 'linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%)',
		backgroundColor: '#FB9219',
		flexDirection: 'column',
		width: '25%'
	},
});


export default Calculator;