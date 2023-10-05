import React from 'react';
import { View, StyleSheet, } from 'react-native';

function FooterFunc() {
    return (
            <View style={styles.footer}></View>
    );
}

export default FooterFunc;

const styles = StyleSheet.create({
    footer: {
      height: 120,
      width: '100%',
      backgroundColor: 'aqua',
    },
});