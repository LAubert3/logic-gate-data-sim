import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import NavigationHeader from '../components/NavigationHeader.jsx'
import FooterFunc from '../components/Footer.jsx'
import LogicGateComponent from '../components/GateComp.jsx';

function LogicGateScreen() {

  return (
    <View>
      <Text>    LogicGateDataSim</Text>
      <NavigationHeader />
      <LogicGateComponent />
      <FooterFunc />
    </View>
  )
}

export default LogicGateScreen;
