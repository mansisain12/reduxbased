import {configureStore} from '@reduxjs/toolkit';
import userListReducer from '../reducers/reducers';

const store = configureStore({
  reducer: {
    user: userListReducer,
  },
});
export default store;
