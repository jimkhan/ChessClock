import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

const AppText = ({ children, style }) => {
    return (

        <Text style={[styles.textcommon, style]} > {children} </Text>

    )
}
const styles = StyleSheet.create({
    textcommon: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#fff',
        fontFamily: Platform.OS === 'android' ? 'Righteous-Regular' : 'Avenir',
    }
})

export default AppText;
