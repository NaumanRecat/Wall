import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

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
        justifyContent:'center', alignItems:'center'
    },
    imagesty:{
        height: h('26%'), width: w('25%'), backgroundColor:'#faf'
    },
    Text1:{
        fontSize:h('4%'), fontWeight:'bold', color:'#FFFFFF'
    },
    Text2:{
        fontSize:h('2.5%'), color:'#FFFFFF'
    }
});


export default Splash;