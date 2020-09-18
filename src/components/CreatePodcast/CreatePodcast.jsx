import React from 'react';
import {Search, TabsItem} from "@vkontakte/vkui";

import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import Mood from "../Mood/Mood";
import SimpleMap from "./SimpleMap";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import {FAKE_POST} from "../../constants/common";
import quarantine from "../../emojis/quarantine.svg";
import sad from "../../emojis/sad.svg";
import sleepy from "../../emojis/sleepy.svg";
import happy from "../../emojis/happy.svg";
import playful from "../../emojis/playful.svg";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

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
                <Text weight="regular">Карантин</Text>
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={sleepy}
                    alt={"Сонно"}
                />
                <Text weight="regular">Сонно</Text>
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={sad}
                    alt={"Грустно"}
                />
                <Text weight="regular">Грустно</Text>
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={happy}
                    alt={"Отлично"}
                />
                <Text weight="regular">Отлично</Text>
            </TabsItem>
            <TabsItem>
                <Mood
                    imagePath={playful}
                    alt={"Забавно"}
                />
                <Text weight="regular">Забавно</Text>
            </TabsItem>

        </Tabs>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(MoodMap);