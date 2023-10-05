import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function ReachComponent() {
    const openLink = (url) => {
        Linking.openURL(url)
    }

    return (
        <View>
            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>Github Repositories:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://github.com/LAubert3')}>
                        <Text style={styles.creditsLink}>    Code I have written & projects I have worked on.</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>LinkedIn:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://linkedin.com/in/lawrence-aubert-iii-269325211/')}>
                        <Text style={styles.creditsLink}>    Contact me for business.</Text>
                    </TouchableOpacity>
                </Text>
            </View>

        </View>
    );
}

export default ReachComponent;

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