import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IconBackDark} from '../../../assets'
import {Gap} from '../../atoms'
import {Colors,Fonts} from '../../../utils'
import {Button} from '../../atoms'
import DarkProfile from './DarkProfile'

export default function Header({onPress,title,profession,type,photo}) {
    if(type === 'dark-profile'){
        return(
            <DarkProfile onPress={onPress} title={title} profession={profession} photo={photo} />
        )
    }
    return (
        <View style={styles.container(type)}>
        <Button type="icon-only" icon={type === 'dark' ? 'back-light':'back-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: (type) => (
        {
            paddingHorizontal:16,
            paddingVertical:30,
            backgroundColor: type === 'dark' ? Colors.secondary:Colors.white,
            flexDirection:'row',
            alignItems:'center',
            borderBottomLeftRadius: type === 'dark' ? 20 : 0,
            borderBottomRightRadius: type === 'dark' ? 20 :0,
        }
    ),
    text: (type) =>({
        textAlign:'center',
        flex:1,
        fontSize:20,
        fontFamily: Fonts.primary[600],
        color: type === 'dark' ? Colors.white:Colors.text.primary
    })
})
