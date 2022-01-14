import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/task/taskSlice'; //{}波括弧を使わずにimportした場合参照先のdefault exportがimportされこちらで記述した名前になる
import fetchReducer from '../features/fetch/fetchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    fetch: fetchReducer,
  },
});
