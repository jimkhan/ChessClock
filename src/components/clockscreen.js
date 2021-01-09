import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import CountDown from './tiimeCountdown';
import AlertModal from './AlertModal';

var pressCount = 0;
var play = false;

const clockscreen = ({ route }) => {

    const navigation = useNavigation();
    const { time } = route.params;
    const { customtime } = route.params;
    var times=0;
    // console.log(customtime)
    if(customtime){
        
        times = customtime;
    }
    else{

         times = parseInt(JSON.stringify(time));
    }
    var win ;


    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [playORpause, setPlayORpause] = useState(false);
    const [runOne, setRunOne] = useState(false);
    const [runTwo, setRunTwo] = useState(false);
    const [playButtonDeactive, setplayButtonDeactive] = useState(false);
    const [id, setId] = useState("1");
    const [count, setCount] = useState(times);
    const [resetDeactive, setResetDeactive] = useState(true);
    const [playerOneDeactive, setPlayerOneDeactive] = useState(true);
    const [playerTwoDeactive, setPlayerTwoDeactive] = useState(true);
    const [playerOneColor, setplayerOneColor] = useState("#2ecc71");
    const [playerTwoColor, setplayerTwoColor] = useState("#2ecc71");
    const [playButtonColor, setplayButtonColor] = useState("#fff");
    const [buttonName, setbuttonName] = useState("play-circle");
    const [moveCounterOne, setMoveCounterOne] = useState(0);
    const [moveCounteTwo, setMoveCounterTwo] = useState(0);
    const [visible, setVisible] = useState(false)

    if(currentPlayer===1){
        win = 2;
    }
    else{
        win = 1;
    }
     

    
    const resetTime = () => {
    
        // { temp === "1" ? "11" : "1"}
    
    //    // i dont want to make temp length more than 2. that's why this conditon
    //     if (temp.length > 2) {
    //         temp = "1";
    //     }
        // console.log(temp)
        setId(id + "1")
        setRunOne(false)
        setRunTwo(false)
        setMoveCounterOne(0)
        setMoveCounterTwo(0)
        setPlayerOneDeactive(true)
        setPlayerTwoDeactive(true)
        setbuttonName("play-circle")
        setplayerTwoColor("#2ecc71")
        setplayerOneColor("#2ecc71")
        setCurrentPlayer(1)
        setResetDeactive(true)

    }

    const pause = ()=>{
        if(currentPlayer===1){
            setRunOne(false)
            setplayerOneColor("#66531E")
            setPlayerOneDeactive(true)
            // setRunTwo(false)
        }
        else{
            // setRunOne(false) #C0982B
            setRunTwo(false)
            setplayerTwoColor("#66531E")
            setPlayerTwoDeactive(true)
        }
        setbuttonName("play-circle")
    }
    const  play = () => {
        if(currentPlayer===1){
            player2()
        }
        else(
            player1()
        )
        setbuttonName("pause-circle")
        setResetDeactive(false)
    }

    const player1 = () => {
        setRunOne(false)
        setRunTwo(true)
        setPlayerOneDeactive(true)
        setPlayerTwoDeactive(false)
        setplayerTwoColor("#FFCA28")
        setplayerOneColor("#2c3e50")
        setCurrentPlayer(2)
        
    }

    const player2 = () => {

        setRunTwo(false)
        setRunOne(true)
        setPlayerTwoDeactive(true)
        setPlayerOneDeactive(false)
        setplayerTwoColor("#2c3e50")
        setplayerOneColor("#FFCA28")
        setCurrentPlayer(1)

    }


    return (
        <View style={styles.container} >

            <AlertModal visiblity={visible}>
                <Text style={styles.alertext}>{`Player ${win} win the game! `}</Text>
                <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => { setVisible(false), resetTime()}}>
                    <Text style={styles.textStyle}> Ok </Text>
                </TouchableOpacity>

            </AlertModal>

            <TouchableOpacity 
            disabled={playerOneDeactive} 
            style={[styles.playerOne, { backgroundColor: playerOneColor}]} 
            onPress={() => {player1(), setMoveCounterOne(moveCounterOne + 1) }} >

                <CountDown
                    _id={id}
                    totalTime={count}
                    running={runOne}
                    onFinish={() => { setVisible(true)}}

                />

                <Text style={styles.bottomText} >Total moves </Text>
                <Text style={styles.bottomText} >{moveCounterOne} </Text>


            </TouchableOpacity>
            <View style={styles.button}>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} >

                    <IconIonic
                        name="md-settings-sharp"
                        size={48}
                        // color="#FF146A"
                        backgroundColor="#fff"
                    />


                </TouchableOpacity>
                <TouchableOpacity 
                    disabled={playButtonDeactive} 
                    onPress={() => { buttonName === "play-circle"? play(): pause()} }>
                    <View style={{ backgroundColor: playButtonColor, borderRadius: 55 }}>
                        <Icon
                            name={buttonName}
                            size={90}
                            color="#FF146A"
                            backgroundColor="#fff"
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    disabled={resetDeactive} 
                    onPress={()=> resetTime()}>

                    <IconIonic
                        name="md-reload-circle"
                        size={58}
                        // color="#FF146A"
                        backgroundColor="#fff"
                    />

                </TouchableOpacity>

            </View>



            <TouchableOpacity 
                disabled={playerTwoDeactive}
                style={[styles.playerTwo, { backgroundColor: playerTwoColor }]} 
                onPress={() => { player2(), setMoveCounterTwo( moveCounteTwo + 1 )}} 
            >

                <CountDown
                    _id={id}
                    totalTime={count}
                    running={runTwo}
                    onFinish={() => { setVisible(true)}}
                />
                <Text style={styles.bottomText} >Total moves </Text>
                <Text style={styles.bottomText} >{moveCounteTwo} </Text>

            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    alertext:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonModal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "60%",
        height: "12%",
        backgroundColor: '#F10859',
        borderRadius: 25,
        marginTop: 40,
    },
    container: {
        flex: 1,
        alignContent: 'center',

    },
    playerOne: {
        flex: 4,
        // backgroundColor: "#FFCA28",
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '180deg' }],

    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    },
    playerTwo: {
        flex: 4,
        // backgroundColor: "#FFCA28",
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "#000035",

    },
    avtive: {
        flex: 1,
        // backgroundColor: {playerOneColor},
        justifyContent: 'center',
        alignItems: 'center',

    },
    inactive: {
        flex: 1,
        // backgroundColor: playerTwoColor,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        height: hp("8.5%"),
        backgroundColor: "#fff",
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',


    },
    bottomText:{
        paddingTop: 15,
        fontWeight: "bold",
        fontSize: 20,
        color: "#000035"
    }
})

export default clockscreen;
