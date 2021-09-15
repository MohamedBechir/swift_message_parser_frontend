import { FILE_ENDPOINTS } from 'app/configs/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { uploadFileActions as actions } from '.';

export function* uploadFileSaga(action) {
  try {
    const formData = new FormData();
    formData.append('file', action.payload.files);
    const file = yield call(request.post, FILE_ENDPOINTS.upload_file, formData);
    console.log(file);
    yield put(actions.uploadFileSuccess(formData));
  } catch (error) {
    console.log(error);
  }
}

export function* uploadFileRootState() {
  yield takeLatest(actions.requestUploadFile.type, uploadFileSaga);
}
