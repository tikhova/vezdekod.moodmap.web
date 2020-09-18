import React from 'react';
import {connect} from 'react-redux';

import registerServiceWorker from './../../registerServiceWorker';

import {Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import TypeOfFee from "./../TypeOfFee/TypeOfFee";
import TargetFee from "./../TargetFee/TargetFee";
import RegularFee from "./../RegularFee/RegularFee";
import {MOOD_MAP, REGISTRATION_FEE, REGULAR_FEE, TARGET_FEE, TYPE_OF_FEE} from "./../../constants/common";
import RegistrationFee from "../RegistrationFee/RegistrationFee";
import {CREATE_FEE, FAKE_POST, POSTING_FEE, VIEW_FEE} from "../../constants/common";
import PostingFee from "../PostingFee/PostingFee";
import ViewFee from "../ViewFee/ViewFee";
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