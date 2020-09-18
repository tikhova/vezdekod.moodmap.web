import React from 'react';
import {connect} from 'react-redux';

import registerServiceWorker from './../../registerServiceWorker';

import {Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {MOOD_MAP} from "./../../constants/common";
import {CREATE_FEE, FAKE_POST} from "../../constants/common";
import MoodMap from "../CreatePodcast/CreatePodcast";
import FakePost from "../FakePost/FakePost";

const CharityRouter = ({activePanel}) => {
    return (
        <View id="main" activePanel={activePanel}>
            <Panel id={CREATE_FEE}>
                <MoodMap/>
            </Panel>
            <Panel id={MOOD_MAP}>
                <MoodMap/>
            </Panel>
            <Panel id={FAKE_POST}>
                <FakePost/>
            </Panel>
        </View>
    )
}

export default connect(state => ({
    activePanel: state.panel.active_panel,
}))(CharityRouter);

registerServiceWorker();