import { JSONMESSAGE_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchJsonMessagesAction as actions } from '.';

export function* fetchJsonMessagesSaga(action) {
  try {
    const jsonMessages = yield call(
      request.get,
      JSONMESSAGE_ENDPOINTS.json_messages,
    );
    yield put(actions.fetchJsonMessageSuccess(jsonMessages));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchJsonMessagesRootState() {
  yield takeLatest(
    actions.requestFetchJsonMessages.type,
    fetchJsonMessagesSaga,
  );
}
