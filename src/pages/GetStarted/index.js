import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo,ILGetStarted} from '../../assets';
import {Button,Gap} from '../../components'
import {Colors,Fonts} from '../../utils'
import {useSelector} from 'react-redux'

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      <View>
      <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
      <Gap height={16} />
      <Button type="secondary" title="Sign In" onPress={() => navigation.replace('Login')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    page:{
        padding:40,
        justifyContent:"space-between",
        backgroundColor:Colors.white,
        flex:1
    },
    title:{
        fontSize:28,
        fontWeight:"600",
        color:Colors.white,
        marginTop:91,
        fontFamily:Fonts.primary[600]
    }
});
