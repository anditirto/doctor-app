import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { DoctorActive, DoctorDisable, MessageActive, MessageDisable, HospitalActive, HospitalDisable} from '../../../assets'
import {Colors,Fonts} from '../../../utils'

const TabItem = ({title,active,onPress,onLongPress}) => {
    const Icon = () => {
        if(title === 'Doctor'){
            return active ? <DoctorActive/> : <DoctorDisable/>
        }
        if(title === 'Message'){
            return active ? <MessageActive/> : <MessageDisable />
        }
        if(title === 'Hospital'){
            return active ? <HospitalActive/> : <HospitalDisable />
        }
        return <DoctorDisable />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title} </Text>
        </TouchableOpacity>
    )
}

export default TabItem;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text: (active) => (
        {
        color: active ? Colors.text.menuActive :Colors.text.menuInactive,
        fontSize:10,
        fontFamily:Fonts.primary[600],
        marginTop:4,
        }
    )
})
