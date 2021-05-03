import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/style';


const Secreen5= ({navigation}) => {
    return (
        <View style={Styles.page5}>
            <TouchableOpacity onPress={()=> alert('On parle d une cornée en forme de « ballon de rugby ». Par conséquent, les rayons lumineux ne convergent pas sur un seul et même point de la rétine ce qui produit une image déformée et donc, une vision floue de près comme de loin. La vision devient imprécise à toutes les distances. L astigmatisme est très fréquent.')}
                style={Styles.page5style} ><Text style={Styles.titremalade}>Astigmatisme</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('L amblyopie est une différence d acuité visuelle entre les yeux, qui ne peut pourtant pas être expliquée par une lésion organique. Ce trouble semble affecter 2 à 5 % de la population. L amblyopie est un trouble cortical : la partie du cerveau traitant l information venant d un œil ne fonctionne pas de manière optimale.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Amblyopie</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La blépharite ulcéreuse aiguë, habituellement provoquée par une infection bactérienne (le plus souvent staphylococcique) du rebord de la paupière à la base des cils; touchant le follicule ciliaire et les glandes de Meibomius. Elle peut également être due à un virus ')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Blépharite</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La cataracte est l opacification partielle ou totale du cristallin, lentille convergente située à l intérieur de l œil. Cette opacification est responsable d une baisse progressive de la vue, au début accompagnée de gêne à la lumière (photophobie).')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Cataracte</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Le chalazion (du grec ancien χάλαζα /ˈkʰa. la.za/, « chalaze », « grêlon »), ou hordéole interne, est l inflammation et l enkystement d une ou plusieurs glandes de Meibomius de la paupière. Le chalazion forme une petite boule de consistance ferme située sous la peau et pouvant être douloureuse.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Chalazion</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La conjonctivite correspond à une inflammation ou une irritation de la conjonctive de l œil, c est-à-dire la membrane qui recouvre le blanc de l œil et le dessous des paupières. Elle peut être d origine virale, bactérienne, allergique ou irritative (contact avec un produit toxique ou choc traumatique).')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Conjonctivite</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La dégénérescence maculaire liée à lâge (DMLA) ou dégénérescence maculaire sénile est une maladie de la rétine provoquée par une dégénérescence progressive de la macula, partie centrale de la rétine, qui peut apparaître à partir de l âge de 50 ans, et plus fréquemment à partir de 65 ans, provoquant un affaiblissement ...')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>DMLA</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('L hypermétropie est un trouble de la vision. D un point de vue optique pur, l hypermétropie est le contraire de la myopie : quand l œil est au repos, il donne d un objet distant une image qui serait focalisée en arrière de la rétine.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>Hypermétropie</Text></TouchableOpacity>
        </View>
    );
}
export default Secreen5;