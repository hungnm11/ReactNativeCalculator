import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculatorKey from '../CalculatorKey';

const DigitKey = (props) => (
	<CalculatorKey
		{...props}
		style={[calculatorStyles.digitKeys, props.style]} />
);

const calculatorStyles = StyleSheet.create({
	digitKeys: {
		backgroundColor: '#e0e0e7',
		flexDirection: 'row',
		flexWrap: 'wrap-reverse'
	},
});

export default DigitKey;