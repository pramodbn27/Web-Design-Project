import * as actionTypes from "../constants/contactConstants";

export const getContactsReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS_REQUEST:
      return {
        loading: true,
        contacts: [],
      };
    case actionTypes.GET_CONTACTS_SUCCESS:
      return {
        contacts: action.payload,
        loading: false,
      };
    case actionTypes.GET_CONTACTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};