import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import {ThemeContext} from '../../';

const HomeScreen = ({navigation}) => {
  const user = useSelector(store => store.login.login);

  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    if (user !== null) {
      navigation.navigate('User');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <View
      style={[
        styles.wrapper,
        {backgroundColor: theme.PRIMARY_BACKGROUND_COLOR},
      ]}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=20&m=1187576166&s=612x612&w=0&h=q-REVReHr8QRzKQ_TRWGU7KTP6OBIgGh-zlg91-S-j0=',
        }}
        style={styles.image}
      />
      <Text
        style={[styles.welcomingMessage, {color: theme.PRIMARY_TEXT_COLOR}]}>
        Welcome, user. Thank you for using our app. This is the official
        ficitonal translation app. You can find variety of languages. And don't
        forget - have fun
      </Text>
      <View style={styles.buttons}>
        <CustomButton
          title={'Login'}
          onTouch={() => navigation.navigate('Login')}
        />
        <CustomButton
          title={'Register'}
          onTouch={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 180,
    height: 200,
    width: 200,
    marginTop: 100,
    marginBottom: 25,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  welcomingMessage: {
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 20,
  },
});
export default HomeScreen;
