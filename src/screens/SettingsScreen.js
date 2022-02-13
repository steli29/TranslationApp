import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import {ReactReduxContext} from 'react-redux';
import {ThemeContext} from '../..';

const SettingsScreen = ({navigation}) => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const [selectedValue, setSelectedValue] = useState(theme.mode);
  const {store} = useContext(ReactReduxContext);
  return (
    <View
      style={[
        styles.wrapper,
        {backgroundColor: theme.PRIMARY_BACKGROUND_COLOR},
      ]}>
      <View style={styles.boxes}>
        <Text style={{color: theme.PRIMARY_TEXT_COLOR}}>Change theme</Text>
        <Picker
          style={[styles.dropdown]}
          itemStyle={{color: theme.PRIMARY_TEXT_COLOR}}
          selectedValue={selectedValue}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            changeTheme(itemValue);
          }}>
          <Picker.Item
            label="Light"
            value="light"
            color={theme.PRIMARY_TEXT_COLOR}
          />
          <Picker.Item
            label="Dark"
            value="dark"
            color={theme.PRIMARY_TEXT_COLOR}
          />
        </Picker>
      </View>
      <View style={styles.boxes}>
        <TouchableOpacity
          onPress={() => {
            store.dispatch({type: 'LOGIN_INIT_STATE'});
            auth().signOut();
            navigation.navigate('Home');
          }}>
          <Text style={styles.button}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  boxes: {
    borderBottomWidth: 1,
    borderBottomColor: 'cornflowerblue',
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  button: {
    fontSize: 25,
    backgroundColor: 'crimson',
    padding: 10,
    margin: 10,
  },
  dropdown: {
    marginVertical: -25,
    width: 300,
    marginBottom: 10,
  },
});
export default SettingsScreen;
