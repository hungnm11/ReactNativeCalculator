import React from 'react';
import { StyleSheet } from 'react-native';
import CalculatorKey from '../CalculatorKey';

const FunctionKey = (props) => (
    <CalculatorKey
        {...props}
        style={[calculatorStyles.functionKeys, props.style]}
        textStyle={[calculatorStyles.functionKeyText, props.textStyle]} />
);

const calculatorStyles = StyleSheet.create({
    functionKeys: {
        backgroundImage: 'linear-gradient(to bottom, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%)',
        flexDirection: 'row'
    },
    functionKey: {
        fontSize: 16
    },
});

export default FunctionKey;