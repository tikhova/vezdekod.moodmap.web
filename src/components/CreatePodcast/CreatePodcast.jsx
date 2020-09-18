import React from 'react';
import {Card, Search, CardScroll, TabsItem} from "@vkontakte/vkui";

import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import Mood from "../Router/Mood";
import SimpleMap from "./SimpleMap";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import {FAKE_POST, REGISTRATION_FEE, SHARE_PODCAST, VIEW_FEE} from "../../constants/common";
import quarantine from "../../quarantine.svg";
import sad from "../../sad.svg";
import sleepy from "../../sleepy.svg";
import happy from "../../happy.svg";
import playful from "../../playful.svg";
import GoogleMapReact from "google-map-react";

const MoodMap = ({setActivePanel}) => (
    <React.Fragment>
        <SimpleMap/>
        <Search placeholder="Поиск по настроению"/>
        <Tabs>
            <TabsItem onClick={() => setActivePanel(FAKE_POST)}>
                <Mood
                    imagePath={quarantine}
                    alt={"Карантин"}
                />
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={sleepy}
                    alt={"Сонно"}
                />
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={sad}
                    alt={"Грустно"}
                />
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={happy}
                    alt={"Отлично"}
                />
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={playful}
                    alt={"Забавно"}
                />
            </TabsItem>

        </Tabs>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(MoodMap);