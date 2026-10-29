import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardInfo from '../components/CardInfo';
import InputText from '../components/InputText';
const InfoScreen = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    return (
        <>
            <Text>Página de información</Text>
            <InputText
                label='escriba su nombre:'
                placeholder='juancito'
                onTextChange={setName}
                value={name}
            />
            <InputText
                label='escriba su edad:'
                placeholder='67'
                onTextChange={setAge}
                value={age}
            />
            <TouchableOpacity onPress={() => setShowInfo(true)} style={styles.boton}>
                <Text style={styles.textBoton}>Guardar información</Text>
            </TouchableOpacity>
            {showInfo && <CardInfo name={name} age={age} />}
        </>
    );
};
export default InfoScreen;
const styles = StyleSheet.create({
    boton: {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
        marginTop: 10,
    },
    textBoton: {
        color: 'white',
    }
});