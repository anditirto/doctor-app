import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {List} from '../../components';
import {Gap} from '../../components';
import {Fonts, Colors,getData} from '../../utils';
import {doctor1, doctor2, doctor3} from '../../assets';
import {Fire} from '../../config';

const Messages = ({navigation}) => {
    const [doctor,setDoctor] = useState([]);
    const [user, setUser] = useState({});
    const [historyChat, setHistoryChat] = useState([]);

    const getDataUserFromLocal = () => {
        getData('user').then((res) => {
        setUser(res);
        });
    };

    useEffect(() => {
        getDataUserFromLocal();
        const rootDb = Fire.database().ref();
        const urlHistory = `messages/${user.uid}/`;
        const messagesDB = rootDb.child(urlHistory);
        messagesDB.on('value', async snapshot => {
            if(snapshot.val()){
                const oldData = snapshot.val();
                const allData = [];

                 const promises = await Object.keys(oldData).map( async key => {
                    const urlDoctor = `doctors/${oldData[key].uidPartner}`;
                    const detailDoctor = await rootDb.child(urlDoctor).once('value');
                    allData.push({
                      id:key,
                      detailDoctor: detailDoctor.val(),
                      ...oldData[key]
                      });
                });
                await Promise.all(promises)
                console.log('new Data History :', allData )
                setHistoryChat(allData)
            }
        })
    }, [user.uid])

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map(chat => {
          const dataDoctor = {
            id: chat.detailDoctor.uid,
            data: chat.detailDoctor,
          };
            return(
                <List 
                    key={chat.id}
                    profile={{uri : chat.detailDoctor.photo}}
                    name={chat.detailDoctor.fullName}
                    desc={chat.lastContentChat}
                    onPress={() => navigation.navigate('Chatting', dataDoctor)}
                />
                );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
