import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/style';


const Secreen2= ( {navigation} ) => {
    return (
        <View style={Styles.page2}>
            <TouchableOpacity onPress={() => alert("L’angine de poitrine ou angor est l’un des symptômes de la maladie coronarienne qui se manifeste sous forme d’un syndrome douloureux thoracique.")}
                    style={Styles.page5style}>
                        <Text style={Styles.titremalade}>Angine de poitrine</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => alert("Une arythmie est un problème de rythme cardiaque. En terme de définition, si votre coeur bat trop vite (>100/min), on parle de tachycardie. À l'inverse, s'il bat trop lentement (<60/min), on parle de bradycardie. Également, sans être ni trop rapide ni trop lent, le coeur peut avoir un rythme dit irrégulier.")}
                    style={Styles.page5style}>
                        <Text style={Styles.titremalade}>Arythmie</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("L'athérosclérose (du grec athêra signifiant « bouillie » et scleros signifiant « dur »), est une maladie touchant les artères de gros et moyen calibre et caractérisée par l'apparition de plaques d'athérome.")}
                    style={Styles.page5style}>
                    <Text style={Styles.titremalade}>Athérosclérose</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("La bradycardie est une maladie qui se caractérise par un rythme cardiaque trop lent. Un cœur sain bat entre 50 et 80 fois par minute. Lorsqu'une personne est atteinte de bradycardie, son cœur bat à moins de 50 pulsations par minute.")}
                    style={Styles.page5style}><Text style={Styles.titremalade}>Bradycardie</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Une cardiomyopathie ou myocardiopathie (littéralement, maladie du muscle cardiaque) correspond à un groupe hétérogène de maladies touchant le myocarde, responsable d'un dysfonctionnement de ce muscle.")}
                    style={Styles.page5style}><Text style={Styles.titremalade}>Cardiomyopathies</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => alert("La maladie coronarienne, ou coronaropathie, ou insuffisance coronarienne, est une maladie des artères qui vascularisent le cœur (artères coronaires) ayant pour conséquence une ischémie myocardique, c'est-à-dire un apport en sang insuffisant (ischémie) au muscle cardiaque (myocarde).")}
                    style={Styles.page5style}><Text style={Styles.titremalade}>Coronaropathie</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Une extrasystole est un trouble du rythme cardiaque correspondant à une contraction prématurée d'une des cavités du cœur.")}
                    style={Styles.page5style}><Text style={Styles.titremalade}>Extrasystole</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => alert("La fibrillation atriale (FA) - également appelée fibrillation auriculaire - se caractérise par une fréquence cardiaque irrégulière et souvent très rapide. Ce problème d'arythmie peut provoquer des symptômes comme des palpitations cardiaques, de la fatigue ou de l'essoufflement")}
                    style={Styles.page5style}><Text style={Styles.titremalade}>Fibrillation atriale</Text></TouchableOpacity>
        </View>
    );
}
export default Secreen2;
