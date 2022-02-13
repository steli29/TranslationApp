import {takeLatest, put} from 'redux-saga/effects';
import {registerOnError, registerOnSuccess} from './register-actions';
import auth from '@react-native-firebase/auth';

export function* getRegisterStarted() {
  yield takeLatest('REGISTER_CALL_REQUEST', register);
}

export function* register({payload}) {
  const {email, pass} = payload;
  try {
    const response = yield auth().createUserWithEmailAndPassword(email, pass);
    yield put(registerOnSuccess(response));
  } catch (error) {
    yield put(registerOnError(error));
  }
}
