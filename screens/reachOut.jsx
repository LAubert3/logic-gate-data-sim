import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationHeader from '../components/NavigationHeader.jsx';
import FooterFunc from '../components/Footer.jsx';
import ReachComponent from '../components/ReachComp.jsx';

function ReachOutScreen() {
    return (
        <View>
            <Text>    Reach Out</Text>
            <NavigationHeader />
            <Text style={styles.contact}>Reach Out:</Text>
            <Text style={styles.textBox}>
                <ReachComponent />
            </Text>
            <FooterFunc />
        </View>
    );
}

export default ReachOutScreen;

const styles = StyleSheet.create({
    textBox: {
        width: '100%',
        height: '33%',
        backgroundColor: '#FAEBD7',
        marginTop: '15%',
        marginBottom: '30%',
    },
    contact: {
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: '15%',
        marginBottom: '25%',
        fontSize: 20,
    },
})