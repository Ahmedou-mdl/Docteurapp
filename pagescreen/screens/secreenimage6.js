import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/style';


const Secreen6= ({navigation}) => {
    return (
        <View style={Styles.page6}>
            <TouchableOpacity onPress={()=> alert('La sarcoïdose est une maladie de cause inconnue qui peut toucher plusieurs organes, en particulier les poumons et les ganglions lymphatiques. Elle est caractérisée par la formation d amas de cellules, appelés « granulomes sarcoïdiens », jouant un rôle dans l inflammation.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>La sarcoïdose</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('L ankylose correspond à une diminution, voire une impossibilité d effectuer un mouvement avec une articulation normalement mobile. On parle de raideur partielle ou totale. Cette dernière peut être temporaire ou permanente.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Ankylose</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('L arthrite juvénile est une maladie chronique qui apparaît pendant l enfance. Elle touche environ 3 enfants canadiens sur 1000, ce qui en fait une des maladies chroniques les plus fréquentes chez l enfant.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Arthrite juvénile</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Une épicondylite est une affection douloureuse touchant le coude. On parle aussi de « tennis elbow ». Les douleurs sont provoquées par une atteinte des muscles de l avant-bras au niveau de leur insertion appelée épicondyle.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Epicondylite</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Les becs de perroquet, ou ostéophytes, désignent des excroissances osseuses, qui se développent au niveau des articulations, dans le cadre de maladies articulaires dégénératives, telles que l’arthrose. Le développement de ces excroissances s’appelle l’ostéophytose. Les becs de perroquet sont généralement indolores, et résultent d’une réaction de l’os à une pression anormale qui s’exerce sur lui.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Bec de perroquet</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La bursite se caractérise par une inflammation et un gonflement au niveau de la bourse. La bourse est une sorte de "sac" rempli d un fluide, sous la peau. La bourse se comporte comme un petit "coussinet", entre les tendons et les os.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Bursite</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('On parle en médecine de cervicalgie pour désigner une douleur du cou. Il s agit d un terme générique et une cervicalgie peut avoir plusieurs causes. Les plus fréquentes sont un traumatisme au niveau du rachis cervical, l arthrose cervicale et une hernie discale.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Cervicalgie</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La déchirure musculaire (aussi appelée claquage) correspond à l élongation traumatique d un muscle avec destruction d une ou plusieurs fibres musculaires et éventuellement de tendons.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Déchirure musculaire</Text></TouchableOpacity>
        </View>
    );
}
export default Secreen6;