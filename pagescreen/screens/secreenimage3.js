import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/style';


const Secreen3= ({navigation}) => {
    return (
        <View style={Styles.page3}>
            <TouchableOpacity style={Styles.page5style} 
                onPress={()=> alert('La grippe saisonnière est une infection virale aiguë provoquée par un virus grippal. Il existe 3 types de grippe saisonnière – A, B et C. Les virus grippaux de type A se subdivisent en sous-types en fonction des différentes sortes et associations de protéines de surface du virus.')}>
                <Text style={Styles.titremalade}>Grippe saisonnière</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La grippe saisonnière se caractérise par l’apparition brutale d’une forte fièvre, de toux (généralement sèche),de céphalées, de douleurs musculaires et articulaires, de malaise général, de maux de gorge et d’écoulement nasal. La toux peut être grave et durer jusqu’à 2 semaines et plus.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>signes</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La plupart des sujets guérissent en une semaine sans avoir besoin de traitement médical. Mais la grippe peut entraîner une maladie grave ou un décès chez les personnes à haut risque (voir ci-après). La période d’incubation (délai qui s’écoule entre le moment de l’affection et l’apparition des symptômes) est d’environ deux jours.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>symptômes</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Chaque année, les épidémies de grippe peuvent toucher gravement tous les groupes d’âge, mais le plus haut risque de complications concerne les femmes enceintes, les enfants de 6 à 59 mois, les personnes âgées et les individus de tout âge présentant certaines affections chroniques, telles que le VIH/sida, l’asthme, ou des cardiopathies ou pneumopathies chroniques, ainsi que les agents de santé.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Populations à risque</Text></TouchableOpacity>
            <TouchableOpacity  onPress={()=> alert('La grippe saisonnière se propage facilement et la transmission dans les établissements fréquentés par de nombreuses personnes, telles que les écoles ou les maisons de retraite, peut être rapide. Lorsqu’une personne infectée tousse ou éternue, elle projette dans l’air des gouttelettes porteuses du virus (et de l’infection) qui atteignent et que vont inspirer les personnes se trouvant à proximité immédiate.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Transmission</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Dans les climats tempérés, les épidémies saisonnières surviennent principalement au cours de l’hiver, tandis que dans les régions tropicales, la grippe peut apparaître tout au long de l’année, avec des flambées épidémiques plus irrégulières.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Épidémie saisonnière</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('La maladie, de bégnine à sévère, peut même entraîner la mort. Les hospitalisations et les décès surviennent principalement dans les groupes à haut risque. Au niveau mondial, ces épidémies annuelles sont responsables d’environ 5 millions de cas de maladies graves, et 290 000 à 650 000 décès.')}
                style={Styles.page5style}><Text style={Styles.titremalade}> bégnine</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Le moyen le plus efficace de se prémunir de la maladie ou d’une issue grave est la vaccination. Des vaccins sûrs et efficaces existent et sont utilisés depuis plus de 60 ans. Chez les adultes en bonne santé, le vaccin antigrippal peut induire une protection satisfaisante. Parmi les personnes âgées, en revanche, le vaccin antigrippal peut être moins efficace pour prévenir la maladie, mais peut réduire sa gravité et l’incidence des complications et des décès.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Prévention</Text></TouchableOpacity>
        </View>
    );
}
export default Secreen3;