import React, { useState, useEffect } from 'react'
import { View, Text, Modal, TextInput, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const ModalView = ({ visiblity, onChangeVisiblity: changeVisiblity }) => {

    const navigation = useNavigation();
    const [valuemin, setValueMin] = useState(0);
    const [valuesec, setValueSec] = useState(0);
    // const [visiblity, setVisiblity] = useState(false);

    useEffect(() => {
        
        setValueMin(0)
        setValueSec(0)
    }, [visiblity])


    return (
        <Modal transparent={true} visible={visiblity}  >

            <View style={styles.modalOutSide} >
                <View style={styles.modal} >
                    <TextInput
                        style={{ borderColor: 'gray', borderBottomWidth: 1, width: '60%' }}
                        // value={`${latitude}, ${longitude}`}
                        keyboardType={'number-pad'}
                        placeholder="Enter Minute"
                        onChangeText={(valuemin) => { setValueMin(valuemin) }}
                    />
                    <TextInput
                        style={{ borderColor: 'gray', borderBottomWidth: 1, width: '60%' }}
                        keyboardType={'number-pad'}
                        placeholder="Enter Second"
                        onChangeText={(valuesec) => { setValueSec(valuesec) }}
                    />

                    <TouchableOpacity 
                        style={styles.buttonModal} 
                        onPress={() => { changeVisiblity(false), navigation.navigate('Clock', { customtime: parseInt(valuemin) * 60 + parseInt(valuesec)  }) }}>
                        <Text style={styles.textStyle}> Submit </Text>
                    </TouchableOpacity>

                </View>
            </View>


        </Modal>
    )
}

const styles = StyleSheet.create({

    buttonModal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 35,
        backgroundColor: '#F10859',
        borderRadius: 18,
        marginTop: 40,
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    modalOutSide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000aa",

    },
    modal: {
        height: '60%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,

    }
});

export default ModalView;
