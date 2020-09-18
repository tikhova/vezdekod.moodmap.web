import {
    SET_ACTIVE_PANEL
} from '../constants/common';

export const setActivePanel = (active_panel) => ({
    type: SET_ACTIVE_PANEL,
    active_panel,
});