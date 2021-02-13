import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {SendDisable,SendActive} from '../../../assets'
import{ Colors,Fonts} from '../../../utils'

const btnIcon = ({disable,onPress}) => {
    if(disable) {
        return (
            <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
             <SendDisable /> 
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
            <SendActive />
        </TouchableOpacity>
    )
}

export default btnIcon

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? Colors.disable:Colors.tertiary,
        width:45,
        height:45, 
        borderRadius:10,
        paddingTop:3,
        paddingRight:3,
        paddingLeft:8,
        paddingBottom:8,
        
    })
})
