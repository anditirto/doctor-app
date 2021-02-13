import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Input, Button} from '../../components';
import {Colors, useForm, storeData, getData} from '../../utils';
import {Loading} from '../../components';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    //console.log(form);
    //storeData('user',form);
    // getData('user').then(res => {
    //   console.log('getData : ',res);
    // });

    setLoading(true);


    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };

        Fire.database()
          .ref('users/' + success.user.uid)
          .set(data);

          storeData('user',data);
          console.log('Register Success :', success);

        showMessage({
          message: ' Registration Success',
          type: 'info',
          backgroundColor: Colors.primary,
        });
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'info',
          backgroundColor: Colors.error,
        });
      });
  };
  
  return (
    <>
      <View styles={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Input
              label="Profession"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Button
              title="Continue"
              onPress={onContinue}
              style={styles.submit}
            />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  submit: {
    marginTop: 50,
  },
  content: {
    marginTop: 20,
    padding: 40,
    paddingTop: 0,
  },
});
