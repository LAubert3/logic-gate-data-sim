import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'

function CreditsComponent() {
    const openLink = (url) => {
        Linking.openURL(url)
    }

    return (
        <ScrollView>
            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>Transistor:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/transistor')}>
                        <Text style={styles.creditsLink}>Transistor icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>NOT:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/logic-gates')}>
                        <Text style={styles.creditsLink}>Logic gates icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>OR:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/or')}>
                        <Text style={styles.creditsLink}>Logic gates icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>NOR:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/logic-gates')}>
                        <Text style={styles.creditsLink}>Logic gates icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>AND:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/logic-gates')}>
                        <Text style={styles.creditsLink}>Logic gates icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>NAND:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/nand')}>
                        <Text style={styles.creditsLink}>Logic gates icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>XOR:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/xor')}>
                        <Text style={styles.creditsLink}>Logic gates icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <View style={styles.creditsContainer}>
                <Text style={styles.creditsTitle}>XNOR:</Text>
                <Text style={styles.creditsText}>
                    <TouchableOpacity onPress={() => openLink('https://www.flaticon.com/free-icons/xnor')}>
                        <Text style={styles.creditsLink}>Logic gates icons created by joalfa - Flaticon</Text>
                    </TouchableOpacity>
                </Text>
            </View>

        </ScrollView>
    )
}

export default CreditsComponent

const styles = StyleSheet.create({
    creditsContainer: {
        margin: 15,
        width: '90%',
    },
    creditsTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: '5%',
    },
    creditsLink: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'blue',
    },
})