import React from 'react';
import { View, Text } from 'react-native';
const CardInfo = ({ name, age }) => {
    return (
        <View>
            <Text>Información del estudiante:</Text>
            <Text>Nombre: {name}</Text>
            <Text>Edad: {age}</Text>
        </View>
    );
};
export default CardInfo;