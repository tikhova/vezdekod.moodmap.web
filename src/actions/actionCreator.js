import {
    SET_ACTIVE_PANEL,
    SET_REGULAR_FEE,
    ADD_MONEY_FEE, SET_TARGET_FIRST_FEE, SET_TARGET_SECOND_FEE, DROP_FEE,
} from '../constants/common';

export const setActivePanel = (active_panel) => ({
    type: SET_ACTIVE_PANEL,
    active_panel,
});

export const setRegularFee = (title, amount, target_text, desc, author) => ({
    type: SET_REGULAR_FEE,
    title, amount, author,
    is_regular: true,
});

export const setTargetFirstFee = (title, amount, target_text, desc) => ({
    type: SET_TARGET_FIRST_FEE,
    title, amount, target_text, desc,
    is_regular: false,
});

export const setTargetSecondFee = (author, end_date) => ({
    type: SET_TARGET_SECOND_FEE,
    author, end_date
});

export const dropFee = () => ({
    type: DROP_FEE,
});

export const feeHelp = (value) => ({
    type: ADD_MONEY_FEE,
    value,
});