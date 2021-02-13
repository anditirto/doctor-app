import React,{useState} from 'react'
import {StyleSheet, Text, View, ScrollView } from 'react-native'
import {ILLogo} from '../../assets'
import {Input,Link,Button,Gap,Loading } from '../../components'
import {Colors,Fonts,storeData,useForm,showSuccess,showError} from '../../utils'
import {Fire} from '../../config'
import {showMessage} from 'react-native-flash-message'
import {useDispatch} from 'react-redux'

export default function Login({navigation}) {
    const [form, setForm] = useForm({email:'', password:''});
    const dispatch = useDispatch()

     const login = () => {
        dispatch({type:'SET_LOADING', value:true});
        Fire.auth().signInWithEmailAndPassword(form.email,form.password)
        .then(res => {
            dispatch({type:'SET_LOADING', value:false});
            Fire.database().ref('users/' + res.user.uid + '/')
            .once('value')
            .then(resDB => {
                console.log('data User : ', resDB.val())
            })
            if(resDB.val()){
                storeData('user', resDB.val())
                navigation.replace('MainApp');
            }
        })
        .catch(err => {
            dispatch({type:'SET_LOADING', value:false});
            showError(err.message)
        })
     }
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <View style={styles.container}>
        <ILLogo />
            <Text style={styles.title}>Masuk dan Mulai Berkomunikasi</Text>
            <Input title="Email Address" label="Email Address" value={form.email} onChangeText={(value) =>setForm('email', value)}/>
            <Gap height={24} />
            <Input title="Password" label="password" value={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry />
            <Gap height={10} />
            <Link title="Forgot Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={login} />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" onPress={login} />
        </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:40,
        flex: 1,
    },
    title:{
        fontFamily: Fonts.primary[600],
        fontSize: 20,
        color: Colors.text.primary,
        marginVertical:40,
        maxWidth:153
    }
})

