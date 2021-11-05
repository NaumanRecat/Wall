import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

const Txt = () => {
    return(
        <View style={styles.fnparentview}> 
        <Image style={styles.imagesty} source={require('../assests/logo.jpg')}/>
        <Text style={styles.Text1}> wallpaper 71 </Text>
        <Text style={styles.Text2}> 8K,4K, FULL HD,HD WALLPAPER</Text>
        </View>
    )
}

function Splash () {
    return(
        <View style={styles.parentView}>
            <Txt/>
        </View>
    )
}

const styles = StyleSheet.create({
    parentView:{
        flex:1, backgroundColor: '#333333', justifyContent:'center'
    },
    fnparentview:{
        height: 300, justifyContent:'center', alignItems:'center'
    },
    imagesty:{
        height: 130, width: 90, backgroundColor:'#faf'
    },
    Text1:{
        fontSize:25, fontWeight:'bold', color:'#FFFFFF'
    },
    Text2:{
        fontSize:14, color:'#FFFFFF'
    }
});


export default Splash;