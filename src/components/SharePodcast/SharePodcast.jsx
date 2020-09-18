import React from 'react';
import {Button, PanelHeader, Placeholder} from "@vkontakte/vkui";

import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import Icon56CheckCircleOutline from '@vkontakte/icons/dist/56/check_circle_outline';

const SharePodcast = () => (
    <React.Fragment>
        <PanelHeader>Подкасты</PanelHeader>
        <Placeholder
            stretched
            icon={<Icon56CheckCircleOutline fill="var(--accent)"/>}
            header={"Подкаст добавлен"}
            action={
                <Button
                    align={"center"}
                    mode={"primary"}
                    size={"l"}
                >Поделиться подкастом</Button>
            }>
            Расскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей.
        </Placeholder>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(SharePodcast);