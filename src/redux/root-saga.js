import {all, call} from 'redux-saga/effects';
import {getDataStarted} from './data/data-saga';
import {getLoginStarted} from './login/login-saga';
import {getRegisterStarted} from './register/register-saga';

export function* rootSaga() {
  yield all([
    call(getDataStarted),
    call(getLoginStarted),
    call(getRegisterStarted),
  ]);
}
