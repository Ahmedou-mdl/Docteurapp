import { StyleSheet } from 'react-native';

const styles =StyleSheet.create({
          backgrand:{
            flex:1,
            width: '100%',
            height: '100%',
            position: 'absolute'

          },
          view:{
                      
          },
          view1:{
            width: '100%',
            height: 50,
            backgroundColor: "#00bfa6",
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,

          },
          presse:{
            padding: 15
          },
          examination: {
            fontSize: 20,
          },
        
          iconnphotocontente: {
            flex: 1,
            alignItems: 'center',
            top: 160
          },
          imageiconnphotocontente:{
            width: 100,
            height: 100,
          },
          //pahe de welcome screen
          page1:{ 
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
        //les pages des maldis
        page2:{
          flex:1,
          width: '100%',
          height: '100%',
          backgroundColor: "#fff",
          position: 'absolute',
          justifyContent: 'space-evenly'
        },
        page22:{
        flex:1,
        width: '100%',
        height: '100%',
        backgroundColor: "#fff",
        position: 'absolute',
        justifyContent: 'space-evenly'
        },
        page3:{
          flex:1,
          width: '100%',
          height: '100%',
          backgroundColor: "#fff",
          position: 'absolute',
          justifyContent: 'space-evenly'
        },
        page4:{
          flex:1,
          width: '100%',
          height: '100%',
          backgroundColor: "#fff",
          position: 'absolute',
          justifyContent: 'space-evenly'
        },
        page5:{
          flex:1,
          width: '100%',
          height: '100%',
          backgroundColor: "#fff",
          position: 'absolute',
          justifyContent: 'space-evenly'
        },
        page6:{
          flex:1,
          width: '100%',
          height: '100%',
          backgroundColor: "#fff",
          position: 'absolute',
          justifyContent: 'space-evenly'
        },
        //titre des maladis
        page5style:{
          width: '100%',
          height: 50,
          borderRadius: 25,
          backgroundColor: '#00bfa6',
          alignItems: "center",
          justifyContent: 'center',
        },
        titremalade:{
          fontSize: 20,

        },
        //les images qui decrive les categories des maladis
        image1:{
          width: 180,
          height: 180,
          top: 40
        },
        defimage1:{
          fontSize: 20,
          fontStyle: 'italic',
          fontWeight: 'bold',
          color: '#8b0000',
          top: 40,
          left: 70
        },
        defimage2:{
          fontSize: 20,
          fontStyle: 'italic',
          fontWeight: 'bold',
          color: '#8b0000',
          top: 40,
          left: 45
        },




        //les lignes des photos chaque ligne contient 2 photo sucsesive 
        lgne1:{
          width: '100%',
          height: '30%',
          flexDirection: 'row',
          justifyContent: 'center',
          justifyContent: 'space-around',
          top: -30

        },

        lgne2:{
          width: '100%',
          height: '30%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          justifyContent: 'space-around',
          top: -30
        },
        
        lgne3:{
          width: '100%',
          height: '30%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          justifyContent: 'space-around',
          top: -30

        },

    });


export default styles;
