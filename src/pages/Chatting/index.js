import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {
  Fonts,
  Colors,
  getData,
  showMessage,
  getChatTime,
  getChatDate,
} from '../../utils';
import {Fire} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    Fire.database()
      .ref(urlFirebase)
      .orderByChild('allChat')
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          console.log(allDataChat)
          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.data.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();

    const idChat = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${idChat}/allChat/${getChatDate(today)}`;
    const urlMessagesUser = `messages/${user.uid}/${idChat}`;
    const urlMessagesDoctor = `messages/${dataDoctor.data.uid}/${idChat}`;

    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.data.uid,
    };
    const dataHistoryChatForDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };
    const newData = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    //kirim ke database
    Fire.database()
      .ref(urlFirebase)
      .push(newData)
      .then(() => {
        setChatContent('');
        //History Chat for User
        Fire.database()
        .ref(urlMessagesUser)
        .set(dataHistoryChatForUser);
        //History Chat for Doctor
        Fire.database()
        .ref(urlMessagesDoctor)
        .set(dataHistoryChatForDoctor);
      })
      .catch((err) => {
        showMessage(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={dataDoctor.data.fullName}
        profession={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
        type="dark-profile"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={isMe ? null : {uri: dataDoctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.text.secondary,
    fontFamily: Fonts.primary.normal,
    marginVertical: 20,
  },
});
