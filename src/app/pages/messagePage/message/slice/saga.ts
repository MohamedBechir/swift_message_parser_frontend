import { MESSAGE_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchMessageActions as actions } from '.';

export function* fetchMessageSaga(action) {
  try {
    const message = yield call(
      request.get,
      `${MESSAGE_ENDPOINTS.message}/${action.payload.id}`,
    );
    yield put(actions.FetchMessageSuccess(message));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchMessageRootState() {
  yield takeLatest(actions.requestFetchMessage.type, fetchMessageSaga);
}
