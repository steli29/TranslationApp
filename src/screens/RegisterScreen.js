import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import {ReactReduxContext, useSelector} from 'react-redux';
import {ThemeContext} from '../../';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');
  const {store} = useContext(ReactReduxContext);
  const user = useSelector(state => state.register);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    if (user.register !== null && user.fetching === false) {
      store.dispatch({type: 'REGISTER_INIT_STATE'});
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.register]);

  // eslint-disable-next-line no-shadow
  const isValid = (email, password, repass) => {
    return (
      email !== '' && password !== '' && repass !== '' && password === repass
    );
  };

  return (
    <View
      style={[
        styles.wrapper,
        {backgroundColor: theme.PRIMARY_BACKGROUND_COLOR},
      ]}>
      <Text style={[styles.label, {color: theme.PRIMARY_TEXT_COLOR}]}>
        Enter email:
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
      <Text style={[styles.label, {color: theme.PRIMARY_TEXT_COLOR}]}>
        Re-enter password:
      </Text>
      <InputField
        style={{
          backgroundColor: theme.INPUT_FIELD_COLOR,
          color: theme.PRIMARY_TEXT_COLOR,
        }}
        value={repass}
        onChange={setRepass}
        password={true}
      />
      <View style={styles.buttons}>
        <CustomButton
          title={'Sign in'}
          onTouch={() => navigation.navigate('Login')}
        />
        <CustomButton
          title={'Register'}
          onTouch={() => {
            if (isValid(email, password, repass)) {
              store.dispatch({
                type: 'REGISTER_CALL_REQUEST',
                payload: {email: email, pass: password},
              });
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
export default RegisterScreen;
