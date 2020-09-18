import {
    ADD_MONEY_FEE,
    DROP_FEE,
    SET_REGULAR_FEE,
    SET_TARGET_FIRST_FEE,
    SET_TARGET_SECOND_FEE,
} from '../constants/common';

const fee = (state = {}, {type, title, amount, author, target_text, desc, is_regular, value, end_date}) => {
    switch (type) {
        case SET_REGULAR_FEE:
            return {
                title, amount, author, is_regular, target_text, desc,
                already: 0,
            };
        case ADD_MONEY_FEE:
            return {
                ...state,
                already: state.already + value,
            };
        case SET_TARGET_FIRST_FEE:
            return {
                title, amount, is_regular, target_text, desc,
                already: 0,
            };
        case SET_TARGET_SECOND_FEE:
            return {
                ...state,
                author, end_date,
            };
        case DROP_FEE:
            return {};
        default:
            return state;
    }
};

export default fee;