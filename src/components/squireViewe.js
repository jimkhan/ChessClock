import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const viewRectangle = ({ children, style, onPress }) => {
    
    return (
        <TouchableOpacity 
            style={[styles.conatiner, style]} 
            onPress={onPress} 
            >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        // backgroundColor: '##FF146A',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#EFDFE5',
        height: hp("23%"),
        
        margin: 12,
        padding: 15,
        
    }
})

export default viewRectangle;
