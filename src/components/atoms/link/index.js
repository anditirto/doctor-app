import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors,Fonts } from '../../../utils'

export default function Link({title,size,align, onPress}) {
    return (
        <View>
            <Text style={styles.text(size,align)} onPress={onPress}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: (size,align) => (
        {
        fontSize: size,
        fontFamily:Fonts.primary[400],
        color: Colors.text.secondary,
        textDecorationLine: 'underline',
        textAlign:align  
        }
    )
})
