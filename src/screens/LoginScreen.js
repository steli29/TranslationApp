import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import {ReactReduxContext, useSelector} from 'react-redux';
import {ThemeContext} from '../../';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {store} = useContext(ReactReduxContext);
  const {theme} = useContext(ThemeContext);

  // eslint-disable-next-line no-shadow
  const user = useSelector(store => store.login);
  // eslint-disable-next-line no-shadow
  const isValid = (email, password) => {
    return email !== '' && password !== '';
  };

  useEffect(() => {
    if (user.login !== null && user.fetching === false) {
      navigation.navigate('User');
    }
  }, [navigation, user.fetching, user.login]);

  return (
    <View
      style={[
        styles.wrapper,
        {backgroundColor: theme.PRIMARY_BACKGROUND_COLOR},
      ]}>
      <Text style={[styles.label, {color: theme.PRIMARY_TEXT_COLOR}]}>
        Enter username:
      </Text>
      <InputField
        style={{
          backgroundColor: theme.INPUT_FIELD_COLOR,
          color: theme.PRIMARY_TEXT_COLOR,
        }}
        value={email}
        onChange={setEmail}
      />
      <Text style={[styles.label, {color: theme.PRIMARY_TEXT_COLOR}]}>
        Enter password:
      </Text>
      <InputField
        style={{
          backgroundColor: theme.INPUT_FIELD_COLOR,
          color: theme.PRIMARY_TEXT_COLOR,
        }}
        value={password}
        onChange={setPassword}
        password={true}
      />
      <View style={styles.buttons}>
        <CustomButton
          title={'Sign up'}
          onTouch={() => navigation.navigate('Register')}
        />
        <CustomButton
          title={'Login'}
          onTouch={() => {
            if (isValid(email, password)) {
              store.dispatch({
                type: 'LOGIN_CALL_REQUEST',
                payload: {email: email, pass: password},
              });
            }
            if (store.getState().login.login !== null) {
              navigation.navigate('User');
            }
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 100,
    flex: 1,
  },
  label: {
    fontSize: 22,
  },
  buttons: {
    flexDirection: 'row',
  },
});
export default LoginScreen;
