/**
 * @format
 */
import React, {useState, createContext} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import rootReducer from './src/redux/root-reducer';
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {rootSaga} from './src/redux/root-saga';
import {darkTheme, lightTheme} from './src/styles/theme';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleWare)),
);

export const ThemeContext = createContext();

sagaMiddleWare.run(rootSaga);

export const AppProvider = () => {
  const [theme, setTheme] = useState(lightTheme);

  // eslint-disable-next-line no-shadow
  const changeTheme = theme => {
    if (theme === 'light') {
      setTheme(lightTheme);
    } else if (theme === 'dark') {
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <Provider store={store}>
        <App style={{backgroundColor: theme.PRIMARY_BACKGROUND_COLOR}} />
      </Provider>
    </ThemeContext.Provider>
  );
};
AppRegistry.registerComponent(appName, () => AppProvider);
