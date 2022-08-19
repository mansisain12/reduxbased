import {ActionTypes} from '../constant/constant';

const initialState = {
  userList: [],
};
export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {...state, userList: [...state.userList, action.payload]};

    case ActionTypes.UPDATE_USER:
      let userData = [...state.userList];
      userData.splice(action.index,1,action.payload);
      return {...state, userList: userData};

    case ActionTypes.DELETE_USER:
      // return {...state, userList: [...state.userList.filter((item) => item.index !== action.index)],}
      let deleteData = [...state.userList];
      deleteData.splice(action.index,1);
      return {...state, userList: deleteData};

    default:
      return state;
  }
};
export default userListReducer;
