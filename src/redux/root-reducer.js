import {combineReducers} from 'redux';
import {dataReducer} from './data/data-reducer';
import {loginReducer} from './login/login-reducer';
import {registerReducer} from './register/register-reducer';

export default combineReducers({
  register: registerReducer,
  login: loginReducer,
  data: dataReducer,
});
