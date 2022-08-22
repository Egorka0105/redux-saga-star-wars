import {take, takeEvery, takeLatest, put, call, fork, spawn} from 'redux-saga/effects'
import {API} from "../API";
import {getPosts, getUsers} from "../slices/peopleSlice";


async function getAll (pattern) {
    const request = await fetch(API +`${pattern}`);
    return await request.json();
}

function* loadPosts() {
    const posts = yield call(getAll, "posts");
    yield put(getPosts({payload: posts}));
}

function* loadUsers() {
    const users = yield call(getAll, "users");
    yield put(getUsers({payload: users}));
}

function* sagaWorker() {
    yield spawn(loadPosts);
    yield spawn(loadUsers);
}

function* sagaWatcher() {
   yield takeEvery('CLICK', sagaWorker);
}


function* rootSaga() {
    yield sagaWatcher();
}

export default rootSaga;