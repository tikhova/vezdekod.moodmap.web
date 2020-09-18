import React from 'react';
import {Avatar, Banner, Button, InfoRow, PanelHeader, PanelHeaderClose, Progress, Separator} from "@vkontakte/vkui";

import '../../index.scss'
import {CREATE_FEE, PROFILES, VIEW_FEE} from "../../constants/common";
import {connect} from "react-redux";
import {feeHelp, setActivePanel} from "../../actions/actionCreator";

class PostingFee extends React.Component {
    concatSubheader = (authorId, isRegular, end_date) => {
        let temp = '';
        if (isRegular) {
            temp = "Помощь нужна каждый месяц";
        } else if (end_date !== null) {
            // The number of milliseconds in one day
            const ONE_DAY = 1000 * 60 * 60 * 24;
            const days = Math.round((new Date(end_date) - new Date()) / ONE_DAY);
            const suffix = ["дней", "день", "дня", "дня", "дня", "дней", "дней", "дней", "дней"];
            temp = `Закончится через ${days} ${suffix[days % 10]}`;
        }

        return `${PROFILES[authorId].title}${temp !== '' ? ` · ${temp}` : ''}`;
    }

    concatProgressHeader = (already, amount) => {
        if (already === 0) {
            return 'Помогите первым';
        }
        if (already === amount) {
            return 'Средства уже собраны'
        }
        return `Собрано ${already} ₽ из ${amount} ₽`;
    }

    render = () => {
        const {setActivePanel, feeHelp, title, already, amount, author, isRegular, end_date} = this.props;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderClose onClick={() => setActivePanel(CREATE_FEE)}/>}>
                    Просмотр поста
                </PanelHeader>
                <Banner
                    before={<Avatar size={96} mode="image"
                                    src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"/>}
                    size="m"
                    header={title}
                    subheader={this.concatSubheader(author, isRegular, end_date)}
                    actions={
                        <React.Fragment>
                            <Separator wide className={"marginV4"}/>
                            <InfoRow header={this.concatProgressHeader(already, amount)}>
                                <Progress value={already * 100.0 / amount}/>
                            </InfoRow>
                            <Button mode={"commerce"} onClick={() => feeHelp(1)}
                                    disabled={already >= amount}>Помочь</Button>
                            <Button mode={"outline"} onClick={() => setActivePanel(VIEW_FEE)}>Подробнее</Button>
                        </React.Fragment>
                    }
                />
            </React.Fragment>
        );
    };
}

export default connect(state => ({
    title: state.fee.title,
    amount: state.fee.amount,
    already: state.fee.already,
    author: state.fee.author,
    end_date: state.fee.end_date,
    isRegular: state.fee.is_regular,
}), {setActivePanel, feeHelp})(PostingFee);