import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function ProjectsComponent() {
    const openLink = (url) => {
        Linking.openURL(url)
    }

    return (
        <View>
            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>LinearCalendar:</Text>
                <Text style={styles.creditsTitle}> - Company Data Records & Scheduler Desktop Application</Text>
                <TouchableOpacity onPress={() => openLink('')}>
                    <Text style={styles.creditsLink}>    Download (Google Cloud)</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>MiniLearn:</Text>
                <Text style={styles.creditsTitle}> - Flashcards, Education & Training Desktop Application</Text>
                <TouchableOpacity onPress={() => openLink('')}>
                    <Text style={styles.creditsLink}>    Coming Soon!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>LangThang:</Text>
                <Text style={styles.creditsTitle}> - LangFlow AI Constructed Language Dictionary Generator</Text>
                <TouchableOpacity onPress={() => openLink('')}>
                    <Text style={styles.creditsLink}>    Coming Soon!</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default ProjectsComponent;

const styles = StyleSheet.create({
    creditsContainer: {
        margin: 15,
        width: '90%',
    },
    creditsTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    creditsLink: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'blue',
    },
})