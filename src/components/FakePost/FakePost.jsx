import React from 'react';
import {Avatar, Group, PanelHeader, PanelHeaderBack, Placeholder, SimpleCell, Text} from "@vkontakte/vkui";

import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import {MOOD_MAP} from "../../constants/common";
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';
import Icon24LikeOutline from "@vkontakte/icons/dist/24/like_outline";
import Icon24CommentOutline from "@vkontakte/icons/dist/24/comment_outline";
import Icon24ShareOutline from "@vkontakte/icons/dist/24/share_outline";
import Icon24ViewOutline from "@vkontakte/icons/dist/24/view_outline";
import left from "../../footer_left.svg"
import views from "../../Views.svg"

const FakePost = () => (
    <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(MOOD_MAP)}/>}>
            Карантин
        </PanelHeader>
        <Group>
            <SimpleCell
                description="час назад • спокойное настроение"
                before={<Avatar size={40} src={"https://sun1-22.userapi.com/impf/c854028/v854028812/82706/q2Jbi7DXmc4.jpg?size=200x0&quality=90&crop=2,2,2155,2155&sign=7cef3da9e14f9e705ebbf4d2e6150389&ava=1"}/>}
                after={<Icon16MoreHorizontal
                    style={{color: "var(--icon_secondary)"}}/>}
            >
                Тихова Мария
            </SimpleCell>
            <img width={"100%"} src={"https://sun9-4.userapi.com/c848732/v848732510/13e2fc/CPe8IwKDyKY.jpg"}/>
            <SimpleCell
                style={{color: "var(--icon_secondary)"}}
                before={<img src={left}/>}
                after={<img src={views}/>}>
            </SimpleCell>
        </Group>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(FakePost);