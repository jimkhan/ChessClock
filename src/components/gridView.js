import React from 'react'
import { View, StyleSheet,  } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const gridView = ({ children }) => {
    return (
        <View style={styles.container}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',
        
        paddingHorizontal: 15,
    }
})

export default gridView
