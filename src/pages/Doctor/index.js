import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  DoctorRating,
  GoodNews,
} from '../../components';
import {doctor1} from '../../assets';
import {Gap} from '../../components';
import {Fonts, Colors, getData, showError} from '../../utils';
import {Fire} from '../../config';

export default function Doctor({navigation}) {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    getCategoryDoctor();
    getTopRatedDoctor();
    getNews();
  }, []);

  const getTopRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate') // order dari yang paling besar
      .limitToLast(3) // ambil dari 3 tertinggi
      .once('value')
      .then((res) => {
        //console.log('Data Rated Doctor :', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          // fungi mengubah object menjadi array
          Object.keys(oldData).map((key) => {
              data.push({
                id: key,
                data: oldData[key],
              });
            });
          setDoctor(data);
        }
      })
      .catch((err) => {
        showError(err.message);
        console.log(err);
      });
  };

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        //console.log('Data News :', res.val());
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null)
          setNews(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
        console.log(err);
      });
  };

  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        //console.log('Doctor :', res.val());
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null)
          setCategoryDoctor(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.WrapperContent}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryDoctor.map((itemCategory) => {
                  return (
                    <DoctorCategory
                      key={itemCategory.id}
                      category={itemCategory.category}
                      onPress={() => navigation.navigate('ChooseDoctor', itemCategory)}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.WrapperContent}>
            <Text style={styles.sctionLabel}> Top Rated Doctor </Text>
            {doctor.map((itemDoctor) => {
              return (
                <DoctorRating
                key={doctor.id}
                  name={itemDoctor.data.fullName}
                  desc={itemDoctor.data.profession}
                  avatar={{uri : itemDoctor.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile',itemDoctor)}
                />
              );
            })}
          </View>
          <View style={styles.WrapperContent}>
            <Text style={styles.sctionLabel}> Good News </Text>
          </View>
          {news.map((item) => {
            return (
              <GoodNews
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  WrapperContent: {
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 219,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: Fonts.primary[600],
    color: Colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
