import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Modal, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavigationHeader() {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(true);

    const navigateToHome = () => {
        navigation.navigate('LogicGateScreen')
        setModalVisible(!isModalVisible)
    }

    const navigateToProjects = () => {
        navigation.navigate('OtherProjectsScreen')
        setModalVisible(!isModalVisible)
    }

    const navigateToReachOut = () => {
        navigation.navigate('ReachOutScreen')
        setModalVisible(!isModalVisible)
    }

    const navigateToCredits = () => {
        navigation.navigate('CreditsScreen')
        setModalVisible(!isModalVisible)
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    };

    return (
        <View>

            <View style={styles.navbar}>
                <View style={styles.menu} >
                    <Button
                        color="#FFA500"
                        title="☰"
                        onPress={toggleModal}
                    />
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={!isModalVisible}
            //onRequestClose={toggleModal}
            >
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={buttonStyles}
                        onPress={navigateToHome}
                    >
                        <Text style={buttonTextStyles}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyles}
                        onPress={navigateToProjects}
                    >
                        <Text style={buttonTextStyles}>Other Projects</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyles}
                        onPress={navigateToReachOut}
                    >
                        <Text style={buttonTextStyles}>Reach Out</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyles}
                        onPress={navigateToCredits}
                    >
                        <Text style={buttonTextStyles}>Credits</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyles}
                        onPress={toggleModal}
                    >
                        <Text style={buttonTextStyles}>Close</Text>
                    </TouchableOpacity>
                    <Text style={styles.logo}>LogicGateDataSim</Text>
                </View>
            </Modal>

        </View>
    );
}

export default NavigationHeader;

const styles = StyleSheet.create({
    navbar: {
        top: 0,
        height: 120,
        width: '100%',
        backgroundColor: 'aqua',
    },
    menu: {
        marginTop: 80,
        marginLeft: 30,
        width: 42,
        borderRadius: 5,
    },
    modalView: {
        height: 500,
        margin: 20,
        marginTop: 100,
        backgroundColor: 'aqua',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        top: '30%',
    },
});

const buttonStyles = {
    height: 50,
    width: '90%',
    backgroundColor: '#FBC45E',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
};

const buttonTextStyles = {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
};