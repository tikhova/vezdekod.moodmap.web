import React from 'react';
import {
    Button,
    Div,
    FixedLayout,
    Group,
    Headline,
    InfoRow,
    PanelHeader,
    PanelHeaderClose,
    Progress,
    Separator,
    Subhead,
    Title,
} from "@vkontakte/vkui";

import '../../index.scss'
import {POSTING_FEE, PROFILES} from "../../constants/common";
import {connect} from "react-redux";
import {feeHelp, setActivePanel} from "../../actions/actionCreator";

class ViewFee extends React.Component {
    concatSubheader = (isRegular, end_date) => {
        if (isRegular)
            return "Помощь нужна каждый месяц";
        if (end_date !== null) {
            // The number of milliseconds in one day
            const ONE_DAY = 1000 * 60 * 60 * 24;
            const days = Math.round((new Date(end_date) - new Date()) / ONE_DAY);
            const suffix = ["дней", "день", "дня", "дня", "дня", "дней", "дней", "дней", "дней"];
            return `Закончится через ${days} ${suffix[days % 10]}`;
        }
    }

    concatProgressHeader1 = (already, amount, isRegular, end_date) => {
        if (already === amount) {
            return 'Средства уже собраны'
        }
        const monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
        const d = new Date();
        let temp = '';
        if (isRegular) {
            temp = ` за ${monthNames[d.getMonth()]}`;
        } else if (end_date !== null) {
            // The number of milliseconds in one day
            const ONE_DAY = 1000 * 60 * 60 * 24;
            const days = Math.round((new Date(end_date) - d) / ONE_DAY);
            const suffix = ["дней", "день", "дня", "дня", "дня", "дней", "дней", "дней", "дней"];
            temp = ` за ${days} ${suffix[days % 10]}`;
        }
        return `Осталось собрать ещё ${amount - already} ₽${temp}`;
    }

    concatProgressHeader2 = (already, amount) => {
        if (already === 0) {
            return 'Помогите первым';
        }
        if (already === amount) {
            return 'Средства уже собраны'
        }
        return `Собрано ${already} ₽ из ${amount} ₽`;
    }

    render = () => {
        const {setActivePanel, feeHelp, title, already, amount, author, isRegular, end_date, target_text, desc} = this.props;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderClose onClick={() => setActivePanel(POSTING_FEE)}/>}>
                    Просмотр сбора
                </PanelHeader>
                <Div>
                    <Group>
                        <Title level={1} weight={"heavy"}>
                            {title}
                        </Title>
                        <Headline weight={"regular"}>
                            {`Автор ${PROFILES[author].title}`}
                        </Headline>
                        <Subhead weight={"regular"}>
                            {this.concatSubheader(isRegular, end_date)}
                        </Subhead>
                    </Group>
                    <Group>
                        <InfoRow header={this.concatProgressHeader1(already, amount, isRegular, end_date)}>
                            <Progress value={already * 100.0 / amount} className={"progress"}/>
                        </InfoRow>
                        <Subhead weight={"regular"}>
                            {`на ${target_text}`}
                        </Subhead>
                    </Group>
                    <Group>
                        <Subhead weight={"regular"}>
                            {desc}
                        </Subhead>
                    </Group>
                    <FixedLayout vertical="bottom">
                        <Separator wide className={"marginV4"}/>
                        <Div>
                            <InfoRow header={this.concatProgressHeader2(already, amount)}>
                                <Progress value={already * 100.0 / amount} className={"progress"}/>
                            </InfoRow>
                            <Button mode={"commerce"} stretched onClick={() => feeHelp(1)} className={"marginV4"}
                                    size={"xl"} disabled={already >= amount}
                            >Помочь</Button>
                        </Div>
                    </FixedLayout>
                </Div>
            </React.Fragment>
        );
    };
}

export default connect(state => ({
    title: state.fee.title,
    amount: state.fee.amount,
    already: state.fee.already,
    author: state.fee.author,
    target_text: state.fee.target_text,
    desc: state.fee.desc,
    end_date: state.fee.end_date,
    isRegular: state.fee.is_regular,
}), {setActivePanel, feeHelp})(ViewFee);