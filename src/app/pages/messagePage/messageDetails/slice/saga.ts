import { MESSAGE_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchMessageDetailsActions as actions } from '.';

export function* fetchMessageDetailsSaga(action) {
  try {
    const messageDetails = yield call(
      request.get,
      `${MESSAGE_ENDPOINTS.message_details}/${action.payload.id}`,
    );
    yield put(actions.FetchMessageDetailsSuccess(messageDetails));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchMessageDetailsRootState() {
  yield takeLatest(
    actions.requestFetchMessageDetails.type,
    fetchMessageDetailsSaga,
  );
}
