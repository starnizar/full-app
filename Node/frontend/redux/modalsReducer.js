import {HIDE_FORM_MODAL, SHOW_FORM_MODAL} from "./types";

const initialState = {
  isModal: false,
}

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM_MODAL:
      return { ...state, isModal: true };
    case HIDE_FORM_MODAL:
      return { ...state, isModal: false };
    default: return state;
  }
};