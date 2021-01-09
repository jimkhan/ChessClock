import React, {useState} from 'react'
import { StyleSheet, ScrollView, BackHandler, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import AppBackgroundImage from './background'
import GridView from './gridView'
import SqurieView from './squireViewe'
import AppText from './AppText'
import ModalView from './ModalView'



const homescreen = ({ visiblity, onChangeVisiblity: changeVisiblity }) => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    return (

        <AppBackgroundImage>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                <ModalView
                    visiblity={visible}
                    onChangeVisiblity={(visible) => setVisible(visible)}
                    // visible={visible}
                />
                <GridView>
                    <SqurieView onPress={() => navigation.navigate('Clock', { customtime: 60, })} >
                        <AppText style={styles.txthead}>Bullet</AppText>
                        <AppText style={styles.txt} >1</AppText>
                        <AppText>min</AppText>
                    </SqurieView>

                    <SqurieView onPress={() => navigation.navigate('Clock', { time: 3 * 60, })} >
                        <AppText style={styles.txthead}>Blitz</AppText>
                        <AppText style={styles.txt} >3</AppText>
                        <AppText>min</AppText>
                    </SqurieView>

                </GridView>
                <GridView>
                    <SqurieView onPress={() => navigation.navigate('Clock', { time: 5 * 60, })} >
                        <AppText style={styles.txthead}>Blitz</AppText>
                        <AppText style={styles.txt} >5</AppText>
                        <AppText>min</AppText>
                    </SqurieView>

                    <SqurieView onPress={() => navigation.navigate('Clock', { time: 7 * 60, })} >
                        <AppText style={styles.txthead}>Blitz</AppText>
                        <AppText style={styles.txt} >7</AppText>
                        <AppText>min</AppText>
                    </SqurieView>

                </GridView>
                <GridView>
                    <SqurieView onPress={() => navigation.navigate('Clock', { time: 10 * 60, })} >
                        <AppText style={styles.txthead}>Rapid</AppText>
                        <AppText style={styles.txt} >10</AppText>
                        <AppText>min</AppText>
                    </SqurieView>

                    <SqurieView onPress={() => navigation.navigate('Clock', { time: 30 * 60, })} >
                        <AppText style={styles.txthead} >Classical</AppText>
                        <AppText style={styles.txt} >30</AppText>
                        <AppText>min</AppText>
                    </SqurieView>

                </GridView>
                <GridView>
                    <SqurieView onPress={()=>setVisible(true)} style={styles.squireToRectanfgleConvert} >
                        <AppText>Custom</AppText>
                    </SqurieView>

                    <SqurieView onPress={() => BackHandler.exitApp()} style={styles.squireToRectanfgleConvert} >
                        <AppText>Exit</AppText>
                    </SqurieView>

                </GridView>

            </ScrollView>
        </AppBackgroundImage>

    )
}

const styles = StyleSheet.create({

    squireToRectanfgleConvert: {
        height: hp("7%"),
        backgroundColor: '#FF146A'
    },
    txt: {
        fontSize: wp("15%"),
        fontFamily: Platform.OS === 'android' ? 'AbrilFatface-Regular' : 'Avenir',
    },
    txthead: {
        fontSize: wp("6%"),
        // transform: [{ rotate: '180deg' }],
        textDecorationLine: 'underline',
    }
})

export default homescreen;
