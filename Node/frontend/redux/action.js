import {HIDE_FORM_MODAL, SHOW_FORM_MODAL} from './types';

export const showFormModal = () => ({ type: SHOW_FORM_MODAL });
export const hideFormModal = () => ({ type: HIDE_FORM_MODAL });