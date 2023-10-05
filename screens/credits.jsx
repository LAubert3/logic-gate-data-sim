import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import NavigationHeader from '../components/NavigationHeader.jsx'
import FooterFunc from '../components/Footer.jsx'
import CreditsComponent from '../components/CreditComp.jsx';

function CreditsScreen() {

    return (
        <View>
            <Text>    Credits</Text>
            <NavigationHeader />

            <Text style={styles.acknowledgements}>Acknowledgements:</Text>

            <View style={styles.textBox}>
                <CreditsComponent />
            </View>
            <FooterFunc />
        </View>
    )
}

export default CreditsScreen

const styles = StyleSheet.create({
    textBox: {
        width: '100%',
        height: '33%',
        backgroundColor: '#FAEBD7',
        marginTop: '15%',
        marginBottom: '30%',
    },
    acknowledgements: {
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: '15%',
        marginBottom: '25%',
        fontSize: 20,
    },
})