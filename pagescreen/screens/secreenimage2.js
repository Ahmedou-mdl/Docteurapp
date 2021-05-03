import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/style';


const Secreen22= ({navigation}) => {
    return (
        <View style={Styles.page22}>
            <TouchableOpacity style={Styles.page5style} 
                onPress={()=> alert('Ils agissent en bloquant certaines étapes du cycle de multiplication du VIH. Le virus une fois dans le corps, va au contact des cellules CD4 (ou T4) et essaye d’y pénétrer. Le virus entre alors dans la cellule, l’infecte en lui injectant son patrimoine génétique (soit l ARN ou Acide RiboNucléique) puis utilise cette cellule pour produire de nouveaux virus qui iront eux-mêmes s’attaquer aux autres cellules CD4.')}>
                <Text style={Styles.titremalade}>Thérapie antirétrovirale</Text></TouchableOpacity>
            <TouchableOpacity style={Styles.page5style}
                onPress={()=> alert('Une infection est une forme particulière d affection, laquelle n est autre qu une maladie. Affection, c est un synonyme pour désigner une maladie, qui affecte une personne donnée. Une infection, c est une affection due à un agent infectieux pathogène, autrement dit une maladie infectieuse.')}>
                <Text style={Styles.titremalade}>Infections et autres affections</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('L accident vasculaire cérébral (AVC) est une urgence vitale, la rapidité de sa prise en charge a un impact direct sur son issue qui peut être fatale. L arrêt brutal de l irrigation sanguine du cerveau qui caractérise l accident vasculaire cérébral entraîne une privation d oxygène dans les zones cérébrales touchées.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>AVC</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Très concrètement, cet équilibre se traduit dans des petits gestes: ajouter de l avoine complète, des graines de chia ou des légumes à votre smoothie fruité, une part de protéines (oeufs, yaourt, beurre d oléagineux…) à votre petit-déjeuner sucré, préparer un repas très riche en fibres avant un dessert gourmand, etc…')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Stabiliser la glycémie</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Les symptômes de carence en magnésium comprennent l hyperexcitabilité, les symptômes musculaires (crampes, tremblements, fasciculations, spasmes, tétanie, faiblesse), la fatigue, la perte d appétit, l apathie, la confusion, l insomnie, l irritabilité, une mémoire insuffisante et une capacité d apprentissage réduite.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Carence en magnésium</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Le paracétamol (acétaminophène) et autre antidouleur peuvent entraîner des réactions cutanées graves. Perte auditive liée à l ibuprofène (Advil) et au paracétamol (acétaminophène) Paracétamol (acétaminophène) : conséquence possible du dépassement de la dose recommandée.')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Antidouleurs</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Les thérapies complémentaires et alternatives regroupent des approches, des pratiques, des produits de santé et médicaux qui ne sont pas habituellement considérés comme faisant partie de la médecine conventionnelle, à un endroit et à une période donnés (définition du National center for complementary and alternative ...')}
                style={Styles.page5style}><Text style={Styles.titremalade}>Thérapies complémentaires</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Le vomissement se définit par une expulsion forcée par la bouche du contenu de l estomac. Généralement précédé par une nausée, il est souvent annoncé par une activité respiratoire rythmée plus connue sous le terme de « haut-le-cœur ».')}
                style={Styles.page5style}><Text style={Styles.titremalade}>vomure</Text></TouchableOpacity>
        </View>
    );
}
export default Secreen22;