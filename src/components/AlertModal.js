import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity, } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const ModalView = ({ visiblity, onChangeVisiblity: changeVisiblity, children }) => {

    // const [visiblity, setVisiblity] = useState(false);



    return (
        <Modal transparent={true} visible={visiblity}  >

            <View style={styles.modalOutSide} >
                <View style={styles.modal} >
                    
                    {children}

                </View>
            </View>


        </Modal>
    )
}

const styles = StyleSheet.create({

    

    modalOutSide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000aa",

    },
    modal: {
        height: hp('40%'),
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 10,

    }
});

export default ModalView;
