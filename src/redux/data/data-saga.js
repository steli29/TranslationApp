import {takeLatest, put} from 'redux-saga/effects';
import {translateOnError, translateOnSuccess} from './data-actions';

export function* getDataStarted() {
  yield takeLatest('API_CALL_REQUEST', translate);
}

export function* translate({payload}) {
  try {
    const response = yield fetch(
      'https://api.funtranslations.com/translate/dothraki.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: payload}),
      },
    );
    const resolvedTranslation = yield response.json();
    const translation = resolvedTranslation.contents.translated;
    yield put(translateOnSuccess(translation));
  } catch (error) {
    yield put(translateOnError(error));
  }
}
