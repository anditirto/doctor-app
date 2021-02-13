import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Fonts,Colors} from '../../../utils'

const ProfileItem = ({title, desc}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container:{
        padding:16,
        borderBottomWidth:1,
        borderColor:Colors.border,
    },
    title:{
        fontSize:14,
        fontFamily:Fonts.primary.normal,
        color:Colors.text.secondary,
        marginBottom:8,
    },
    desc:{
        fontSize:14,
        fontFamily:Fonts.primary.normal,
        color:Colors.text.primary,
    }
})
