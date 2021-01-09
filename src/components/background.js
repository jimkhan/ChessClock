import React from 'react'
import { ImageBackground, StyleSheet, ScrollView, View } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const background = ({ children }) => {
    return (

            <ImageBackground source={require('../img/back.png')} style={styles.imageback} >{children}</ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    imageback: {
      
        justifyContent: 'center',
        height: "100%",
        width: "100%",
    },

})

export default background;
