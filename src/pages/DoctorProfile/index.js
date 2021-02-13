import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Header, ProfileItem, Gap, Profile, Button} from '../../components'
import {Colors, Fonts} from '../../utils'

const DoctorProfile = ({navigation,onPress,route}) => {
    const dataDoctor = route.params;
    return (
        <View style={styles.page} >
            <Header title="Doctor Profile"  onPress={() => navigation.goBack()} />
            <Profile btnIcon='female' photo={{uri:dataDoctor.data.photo}} name={dataDoctor.data.fullName} desc="Dokter Anak" />
            <Gap height={10} />
            <ProfileItem title="Alumnus" desc={dataDoctor.data.university} />
            <ProfileItem title="Tempat Praktik" desc={dataDoctor.data.hospital_address} />
            <ProfileItem title="No STR" desc={dataDoctor.data.str_number} />
            <Gap height={23} />
            <View style={styles.action}>
            <Button  title="Start Consultation" onPress={() => navigation.navigate('Chatting',dataDoctor)} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor:Colors.White,
        flex:1,
    },
    action:{
        paddingTop:23,
        paddingHorizontal:40,
    }
})
