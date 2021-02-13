import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {IconBackDark,IconBackLight } from '../../../assets'

export default function iconOnly({onPress,icon}) {
    const Icon = () => {
        if( icon === 'back-dark'){
            return(
                <IconBackDark />
            )
        }
        if(icon === "back-light"){
            return(
                <IconBackLight />
            )
        }
        return <IconBackDark/>
    }
    
    return (
        <TouchableOpacity onPress={onPress} icon={icon}>
            <Icon />
        </TouchableOpacity>
    )
}

