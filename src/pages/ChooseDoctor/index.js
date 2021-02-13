import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../components';
import {Fonts, Colors} from '../../utils';
import {doctor1, doctor2, doctor3} from '../../assets';
import {Fire} from '../../config';
import {showMessage} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState([]);
  const itemCategory = route.params;

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callDoctorByCategory = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        console.log('category data : ', category, res.val());
        if(res.val()){        
        const oldData = res.val();
        const data = []
        Object.keys(oldData).map(key => {
          data.push({
            id:key,
            data:oldData[key]
          })
        })
        setListDoctor(data);
        }
      })
      .catch((err) => {
        showMessage(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${itemCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map((item) => {
        return (
          <List
            type="next"
            profile={{uri: item.data.photo}}
            name={item.data.fullName}
            desc={item.data.gender}
            onPress={() => navigation.navigate('DoctorProfile',item)}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
