import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView,{Marker,Callout,PROVIDER_GOOGLE} from 'react-native-maps';
import {Feather} from '@expo/vector-icons';


import mapMarker from "./src/images/mapMarker.png";


export default function App() {
  return (
    <View style={styles.container}>
       <MapView 
       provider={PROVIDER_GOOGLE}
       style={styles.mapStyle}
       initialRegion={{
         latitude:-23.5874162,
         longitude:-46.6598223,
         latitudeDelta:0.008,
         longitudeDelta:0.008
       }}
       >
         <Marker
          icon={mapMarker}
          calloutAnchor={{
            x:4.28,
            y:1.2,
          }}
          coordinate={{
          latitude:-23.5874162,
          longitude:-46.6598223,
         }}>
          <Callout tooltip={true}>
            <View style={styles.calloutContainer}>
             <Text  style={styles.calloutText}>
               Lar das meninas
             </Text>
            </View>
   
         </Callout>

         </Marker>
         
         </MapView> 

         <View style={styles.footer}>
           <Text style={styles.footerText}>Orfanatos encontrados</Text>
           <TouchableOpacity style ={styles.createOrphanageButton} onPress={()=>{}}> 
             <Feather name="plus" size={20} color="#FFF"/>
           </TouchableOpacity>

         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer:{
    width:168,
    height:46,
    paddingHorizontal:16,
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:16,
    justifyContent:"center",

  },

  calloutText:{
    color:'#0089a5',
    fontSize:14,


  },
  footer:{
    position:"absolute",
    left:24,
    right:24,
    bottom:32,
    backgroundColor:'#FFF',
    borderRadius:28,
    height:56,
    paddingLeft:24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    elevation:3,

  },

  footerText:{

    color:'#8fa7b3',
  },
  createOrphanageButton:{
    width:56,
    height:56,
    backgroundColor:'#15c3d6',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  }

});
