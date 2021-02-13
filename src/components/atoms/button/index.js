import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors,Fonts } from '../../../utils'
import  ButtonIcon from './iconOnly'
import BtnIcon from './btnIcon'

export default function Button({type,title,onPress,icon,disable}) {
    if(type === 'btnIcon'){
        return <BtnIcon disable={disable} onPress={onPress} />
    }
    if(type === 'icon-only'){
        return(
            <ButtonIcon icon={icon} onPress={onPress} />
        )
    }
    if(disable){
        return(
            <View style={styles.disableBG}>
            <Text style={styles.disableText}>{title}</Text>
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress} >
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:(type) =>({
        backgroundColor: type === "secondary" ? Colors.button.secondary.background : Colors.button.primary.background,
        borderRadius:10,
        paddingVertical:10,
    }),
    disableBG:{
        backgroundColor: Colors.button.disable.background,
        borderRadius:10,
        paddingVertical:10,
    },
    disableText:{
        textAlign:"center",
        fontFamily:Fonts.primary[600],
        fontSize: 18,
        color:Colors.button.disable.text,
    },
    text:(type) => ({
        textAlign:"center",
        fontFamily:Fonts.primary[600],
        fontSize: 18,
        color: type === "secondary" ? Colors.button.secondary.text : Colors.button.primary.text
    })
})
