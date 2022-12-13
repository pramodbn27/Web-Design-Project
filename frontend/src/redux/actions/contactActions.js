import * as actionTypes from "../constants/contactConstants";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CONTACTS_REQUEST });

    const { data } = await axios.get("/api/contacts");

    dispatch({
      type: actionTypes.GET_CONTACTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CONTACTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};