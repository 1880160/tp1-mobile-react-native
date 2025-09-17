import React from 'react';
import { useBatteryLevel } from 'expo-battery';
import { View, Text, StyleSheet } from 'react-native';


// https://docs.expo.dev/versions/latest/sdk/battery/

export default function BatteryScreen(){
    const batteryLevel = useBatteryLevel();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{batteryLevel*100} %</Text>
        </View>
    );

}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'right', 
    justifyContent: 'upper',
    padding: 16 
  },
  title: { 
    fontSize: 22, 
    fontWeight: '600', 
    marginBottom: 8 
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});
