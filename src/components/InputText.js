import React from 'react';
import { View, TextInput, Text } from 'react-native';
const InputText = ({ placeholder, value, onTextChange, label }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onTextChange={onTextChange}
                keyboardType='default'
            />
        </View>
    );
};
export default InputText;