import React from 'react'
import { StyleSheet } from 'react-native'

import CountDown from 'react-native-countdown-component';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const tiimeCountdown = ({ totalTime, style, running, _id, onFinish }) => {
    return (


        <CountDown
            id={_id}
            until={ totalTime }
            size={60}
            style={style}
            onFinish={onFinish}
            digitStyle={{ backgroundColor: 'transparent',   }}
            digitTxtStyle={{ color: '#000', fontSize: hp("15%"), fontFamily: "Anton-Regular" }}
            // timeToShow={['S', 'S']}
            timeToShow={[ 'M', 'S']}
            separatorStyle={{ color: '#000', fontSize: hp("15%"), }}
            timeLabels={{}}///m: 'Min', s: 'Sec'
            showSeparator={true}
            running={running}

        />
    )
}
const styles = StyleSheet.create({
    digitbox:{
        height: '30%',
        width: '30%',
    }
})

export default tiimeCountdown
