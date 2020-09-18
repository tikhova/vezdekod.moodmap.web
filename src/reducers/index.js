import {combineReducers} from 'redux';

import panel from "./panel";
import fee from "./fee";

const rootReducer = combineReducers({panel, fee});

export default rootReducer;