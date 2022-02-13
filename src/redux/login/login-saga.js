import {takeLatest, put} from 'redux-saga/effects';
import {loginOnSuccess, loginOnError} from './login-actions';
import auth from '@react-native-firebase/auth';

export function* getLoginStarted() {
  yield takeLatest('LOGIN_CALL_REQUEST', login);
}

export function* login({payload}) {
  const {email, pass} = payload;
  try {
    const response = yield auth().signInWithEmailAndPassword(email, pass);
    yield put(loginOnSuccess(response));
  } catch (error) {
    yield put(loginOnError(error));
  }
}
