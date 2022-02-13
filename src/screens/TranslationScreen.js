import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import {ReactReduxContext, useSelector} from 'react-redux';
import {ThemeContext} from '../..';

const TranslationScreen = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const translation = useSelector(store => store.data.translation);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    if (translation !== null) {
      setTranslated(translation);
    }
  }, [translation]);
  const {store} = useContext(ReactReduxContext);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: theme.PRIMARY_BACKGROUND_COLOR, flex: 1}}>
      <Text style={[styles.label, {color: theme.PRIMARY_TEXT_COLOR}]}>
        Translate from English to Dothrakian
      </Text>
      <TextInput
        multiline={true}
        style={[
          styles.textarea,
          {
            color: theme.PRIMARY_TEXT_COLOR,
            backgroundColor: theme.INPUT_FIELD_COLOR,
          },
        ]}
        value={text}
        onChangeText={newValue => setText(newValue)}
      />
      <Button
        title="Translate"
        onPress={() => {
          store.dispatch({type: 'API_CALL_REQUEST', payload: text});
          setModalVisible(!modalVisible);
        }}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {backgroundColor: theme.PRIMARY_BACKGROUND_COLOR},
            ]}>
            <Text style={[styles.label, {color: theme.PRIMARY_TEXT_COLOR}]}>
              {translated || 'Error while translation'}
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textarea: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 300,
    padding: 8,
    margin: 20,
    fontSize: 17,
  },
  label: {
    fontSize: 18,
    margin: 10,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TranslationScreen;
