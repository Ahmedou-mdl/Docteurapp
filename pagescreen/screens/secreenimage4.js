import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/style';


const Secreen4= ({navigation}) => {
    return (
        <View style={Styles.page4}>
            <TouchableOpacity onPress={()=> alert('La maladie coeliaque, est une maladie chronique de l intestin déclenchée par la consommation de gluten, un mélange de protéines contenues dans certaines céréales (blé, orge, seigle…). La maladie se manifeste principalement par des symptômes digestifs (diarrhée, douleurs, ballonnements…).')}
                style={Styles.page5style}><Text style={Styles.titremalade}>intolérance au gluten</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('L intolérance au lactose est l inconfort digestif dû à une consommation de lactose dépassant la capacité propre de la personne à digérer ce sucre présent dans le lait et ses produits dérivés. Les personnes, qui ne produisent plus assez de lactase pour digérer correctement le lactose, souffrent d intolérance au lactose')}
            style={Styles.page5style}><Text style={Styles.titremalade}>intolérance au lactose</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Une occlusion intestinale est « une obstruction partielle ou totale de l intestin grêle ou du côlon ». Ce blocage empêche les aliments, les liquides et les gaz de circuler normalement au niveau de l intestin.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>occlusion intestinale</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('L inflammation du péritoine, la fameuse péritonite, est une infection grave qui a deux origines principales. Soit un organe, comme l appendice, s infecte et cette infection va gagner le péritoine. L autre cause, qui est la plus fréquente, c est la perforation d un organe dans l abdomen, comme un ulcère de l estomac')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>péritonite(infection du péritoine)</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Une gastro-entérite est une inflammation du système digestif pouvant entraîner de la nausée, des vomissements, des crampes abdominales, des flatulences et de la diarrhée, ainsi que de la déshydratation, de la fièvre et des céphalées (maux de tête).')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>gastro-entérite</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Le saturnisme est la maladie correspondant à une intoxication aiguë ou chronique par le plomb.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>saturnisme</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('S il n y a pas de fécondation, il se désagrège et saigne : ce sont les règles. Chez les femmes souffrant d endométriose, les cellules ayant migré en-dehors de l utérus restent sensibles aux hormones : elles saignent donc en-dehors de l utérus mais ce sang ne peut être évacué naturellement comme les règles.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>endométriose</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La rectocolite hémorragique (RCH) ou colite ulcéreuse est une maladie inflammatoire chronique intestinale (MICI) qui affecte l extrémité distale du tube digestif, c est-à-dire le côlon et le rectum qui est toujours touché. Son étiologie est inconnue, bien qu une composante génétique constitue une hypothèse.')} 
                style={Styles.page5style}><Text style={Styles.titremalade}>rectocolite hémorragique</Text></TouchableOpacity>
        </View>
    );
}
export default Secreen4;