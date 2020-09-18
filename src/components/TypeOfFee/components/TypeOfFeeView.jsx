import React from 'react';
import {Card, Cell, Headline, Subhead} from "@vkontakte/vkui";

import '../../../index.scss'
import {connect} from "react-redux";
import {setActivePanel} from "../../../actions/actionCreator";

const TypeOfFeeView = ({setActivePanel, nextPanel, title, desc, children}) => (
    <Card mode={"outline" | "tint"} size={"l"} >
        <Cell before={children} size={"l"} expandable onClick={() => setActivePanel(nextPanel)}
              className={"border10"} description={(
            <Subhead weight={"regular"}>
                {desc}
            </Subhead>
        )}>
            <Headline weight={"semibold"}>
                {title}
            </Headline>
        </Cell>
    </Card>
);
export default connect(() => ({}), {setActivePanel})(TypeOfFeeView);