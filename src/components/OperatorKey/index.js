import React from 'react';
import { StyleSheet } from 'react-native';
import CalculatorKey from '../CalculatorKey';

const OperatorKey = (props) => (
    <CalculatorKey
        {...props}
        style={[calculatorStyles.operatorKey, props.style]}
        textStyle={[calculatorStyles.operatorKeyText, props.textStyle]} />
);

const calculatorStyles = StyleSheet.create({
    operatorKeys: {
        // backgroundImage: 'linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%)'
    },
    operatorKey: {
        width: '100%',
        borderRightWidth: 0
    },
    operatorKeyText: {
        width: '100%',
        color: 'white',
        fontSize: 36
    },
});

export default OperatorKey;