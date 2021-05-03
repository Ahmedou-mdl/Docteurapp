import React from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import styles from '../styles/style';
import Secreen1 from './secreen1';

const Welcomescreen = ({ navigation })=> {


    return (
        <ImageBackground style={styles.backgrand}
                source={require('../../assets/backgrand.jpg')}>
            <View style={styles.iconnphotocontente}>
                <Image style={styles.imageiconnphotocontente}
                    source={require('../../assets/icon.png')}/>
                <Text>Connaître les maladies</Text>
            </View>
            
                <Pressable 
                    style={styles.presse}
                    onPress={() => navigation.push("page1")}>
                    <View style={styles.view1}>
                        <Text style={styles.examination}>Consulter</Text>
                    </View>
                </Pressable>
            
        </ImageBackground>
    );
}
export default Welcomescreen;