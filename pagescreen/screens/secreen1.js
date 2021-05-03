import React from 'react';
import { View, Text, ImageBackground, Image, Pressable, TouchableOpacity} from 'react-native';
import Styles from '../styles/style';

const Secreen1= ( {navigation} ) => {
    return (
        <ImageBackground style={Styles.page2}
            source={require('../../assets/backgrand.jpg')} >
            <View style={Styles.lgne1}>
                <TouchableOpacity
                    onPress={() => navigation.push("page2")}>
                        <Image style ={Styles.image1}
                            source={require('../../assets/coeurr.png')}/>
                            <Text style={Styles.defimage1}>coeur</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push("page22")}>
                        <Image style ={Styles.image1}
                            source={require('../../assets/mauxtete.png')}/>
                        <Text style={Styles.defimage2}>maux-téte</Text>
                </TouchableOpacity>  

            </View>
            <View style={Styles.lgne2}>
                <TouchableOpacity
                    onPress={() => navigation.push("page3")}>
                        <Image style ={Styles.image1}
                            source={require('../../assets/nef.png')}/>
                        <Text style={Styles.defimage1}>nef</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push("page4")}>
                        <Image style ={Styles.image1}
                            source={require('../../assets/ventre.png')}/>
                        <Text style={Styles.defimage1}>ventre</Text>
                </TouchableOpacity>           

            </View>
            <View style={Styles.lgne3}>
                <TouchableOpacity
                    onPress={() => navigation.push("page5")}>
                        <Image style ={Styles.image1}
                            source={require('../../assets/yeu.png')}/>
                        <Text style={Styles.defimage1}>yeu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push("page6")}>
                        <Image style ={Styles.image1}
                            source={require('../../assets/articulation.png')}/>
                        <Text style={Styles.defimage2}>articulation</Text>
                </TouchableOpacity>
            </View>
            
        </ImageBackground>

    );
}
export default Secreen1;
