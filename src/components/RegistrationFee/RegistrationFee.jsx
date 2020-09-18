import React from 'react';
import {Button, FormLayout, FormLayoutGroup, Input, PanelHeader, PanelHeaderBack, Radio, Select} from "@vkontakte/vkui";

import '../../index.scss'
import {connect} from "react-redux";
import {setActivePanel, setTargetSecondFee} from "../../actions/actionCreator";
import {POSTING_FEE, PROFILES, TARGET_FEE} from "../../constants/common";

class RegistrationFee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feeEnd: null,
            endDate: null,
            profile: 0,
        };
    }

    onRadioChange = e => {
        this.setState({feeEnd: e.target.value,});
    };

    onDateChange = e => {
        this.setState({endDate: e.target.value});
    };

    checkNull = () => {
        const {feeEnd, endDate} = this.state;
        return feeEnd !== "1" && (feeEnd !== "2" || endDate === null);
    };

    checkDate = () => {
        const {endDate} = this.state;
        return Date.now() < new Date(endDate);
    };

    render = () => {
        const {setActivePanel, setTargetSecondFee} = this.props;
        const {feeEnd, endDate, profile} = this.state;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(TARGET_FEE)}/>}>
                    Оформление
                </PanelHeader>
                <FormLayout>
                    <Select top="Автор" defaultValue={"0"}
                            onChange={e => this.setState({profile: parseInt(e.target.value)})}>
                        {PROFILES.map(({id, title}) => (
                            <option key={id} value={id}>{title}</option>
                        ))}
                    </Select>
                    <FormLayoutGroup top={"Сбор завершится"}>
                        <Radio name={"feeEnd"} value={"1"} onChange={this.onRadioChange}>Когда соберём сумму</Radio>
                        <Radio name={"feeEnd"} value={"2"} onChange={this.onRadioChange}>В определённую дату</Radio>
                    </FormLayoutGroup>
                    {feeEnd === "2" &&
                    <Input top={"Дата окончания"} type={"date"} onChange={this.onDateChange}
                           bottom={this.checkDate()?null:'Введите дату не раньше сегодняшнего дня'}
                           status={this.checkDate()?'valid':'error'}
                    />
                    }
                    <Button mode={"primary"} size={"xl"} stretched disabled={this.checkNull()}
                            onClick={() => {
                                setTargetSecondFee(profile, feeEnd === "2" ? endDate : null);
                                setActivePanel(POSTING_FEE);
                            }}>
                        Создать сбор
                    </Button>
                </FormLayout>
            </React.Fragment>
        );
    }
}

export default connect(() => ({}), {setActivePanel, setTargetSecondFee})(RegistrationFee);