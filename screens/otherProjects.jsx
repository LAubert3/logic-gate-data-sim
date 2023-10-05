import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationHeader from '../components/NavigationHeader.jsx';
import FooterFunc from '../components/Footer.jsx';
import ProjectsComponent from '../components/ProjectsComp.jsx';

function OtherProjectsScreen() {
    return (
        <View>
            <Text>    Other Projects</Text>
            <NavigationHeader />
            <Text style={styles.projects}>Other Projects:</Text>
            <Text style={styles.textBox}>
                <ProjectsComponent />
            </Text>
            <FooterFunc />
        </View>
    );
}

export default OtherProjectsScreen;

const styles = StyleSheet.create({
    textBox: {
        width: '100%',
        height: '33%',
        backgroundColor: '#FAEBD7',
        marginTop: '15%',
        marginBottom: '30%',
    },
    projects: {
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: '15%',
        marginBottom: '25%',
        fontSize: 20,
    },
})