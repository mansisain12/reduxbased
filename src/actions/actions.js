import {ActionTypes} from '../constant/constant';

export const addUser = user => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});

export const updateUser = (user, index) => ({
  type: ActionTypes.UPDATE_USER,
  payload: user,
  index: index,
});
