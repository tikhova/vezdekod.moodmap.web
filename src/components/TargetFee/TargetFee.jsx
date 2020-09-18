import React from 'react';
import {Button, File, FormLayout, Input, PanelHeader, PanelHeaderBack, Select, Textarea} from "@vkontakte/vkui";

import '../../index.scss'
import {ACCOUNTS, REGISTRATION_FEE, TYPE_OF_FEE} from "../../constants/common";
import {connect} from "react-redux";
import {setActivePanel, setTargetFirstFee} from "../../actions/actionCreator";
import {Icon28PictureOutline} from "@vkontakte/icons";

class TargetFee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            amount: null,
            target_text: null,
            desc: null,
        };
    }

    checkNull = () => {
        const {title, amount, target_text, desc} = this.state;
        return title === null || amount === null || target_text === null || desc === null;
    }

    checkAmount = () => {
        const {amount} = this.state;
        return amount !== null && amount > 0;
    }

    render = () => {
        const {setActivePanel, setTargetFirstFee} = this.props;
        const {title, amount, target_text, desc} = this.state;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(TYPE_OF_FEE)}/>}>
                    Целевой сбор
                </PanelHeader>
                <FormLayout>
                    <File controlSize={"xl"} stretched mode={"outline"} before={<Icon28PictureOutline/>}>
                        Загрузить обложку
                    </File>
                    <Input top="Название сбора" placeholder={"Название сбора"}
                           onChange={e => this.setState({title: e.target.value})}/>
                    <Input top="Сумма, ₽" placeholder={"Сколько нужно собрать?"} type={"number"}
                           status={this.checkAmount() ? 'valid' : 'error'}
                           bottom={this.checkAmount() ? null : "Необходимо корректно ввести сумму сбора"}
                           onChange={e => this.setState({amount: parseInt(e.target.value)})}/>
                    <Input top="Цель" placeholder={"Например, лечение человека"}
                           onChange={e => this.setState({target_text: e.target.value})}/>
                    <Textarea top="Описание" placeholder={"На что пойдут деньги и как они кому-то помогут?"}
                              onChange={e => this.setState({desc: e.target.value})}/>
                    <Select top="Куда получать деньги" defaultValue={"0"}>
                        {ACCOUNTS.map(({id, title}) => (
                            <option key={id} value={id}>{title}</option>
                        ))}
                    </Select>
                    <Button disabled={this.checkNull()} mode={"primary"} size={"xl"} stretched onClick={() => {
                        if (this.checkAmount()) {
                            setTargetFirstFee(title, amount, target_text, desc);
                            setActivePanel(REGISTRATION_FEE);
                        }
                    }}>
                        Далее
                    </Button>
                </FormLayout>
            </React.Fragment>
        );
    }
}

export default connect(() => ({}), {setActivePanel, setTargetFirstFee})(TargetFee);