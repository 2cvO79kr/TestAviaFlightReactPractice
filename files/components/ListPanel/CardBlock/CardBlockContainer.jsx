import React, { useContext } from 'react'
import { Context } from '../../../other/context'
import CardBlock from './CardBlock'
import style from './../../../App.module.css'

const CardBlockContainer = ({ data }) => {

    const { sortBlock } = useContext(Context)

    function formatAirDate(string) {
        const months = {
            0: 'янв.',
            1: 'фев.',
            2: 'март',
            3: 'апр.',
            4: 'маq',
            5: 'июнь',
            6: 'июль',
            7: 'авг.',
            8: 'сен.',
            9: 'окт.',
            10: 'нояб.',
            11: 'дек.'
        };

        const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

        let timestamp = Date.parse(string);
        let date = new Date(timestamp);
        let month = date.getMonth();
        let day = date.getDate();
        let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return <div>{time}<span className={style.blue_text}> {day} {months[month]} {days[date.getDay()]}</span></div>
    }

    function deltaDate(firstDate, secondDate) {
        let onePice = Date.parse(firstDate)
        let oneDate = new Date(onePice)
        let oneDay = oneDate.getDate()
        let firstTime = oneDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(':')

        let twoPice = Date.parse(secondDate)
        let twoDate = new Date(twoPice)
        let twoDay = twoDate.getDate()
        let secondTime = twoDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(':')

        let deltaHours = secondTime[0] - firstTime[0]
        let deltaMinutes = secondTime[1] - firstTime[1]

        if (deltaMinutes < 0) {
            deltaHours = deltaHours - 1
            deltaMinutes = 60 + deltaMinutes
        }

        if (deltaHours < 0) {
            deltaHours = 24 + deltaHours
        }

        let sumMin = deltaHours * 60 + deltaMinutes
        return <div data-minutes = {sumMin} >{deltaHours} ч {deltaMinutes} мин</div>
    }

    return (
        <CardBlock data={data}
            price={sortBlock.price}
            formatAirDate={formatAirDate}
            deltaDate={deltaDate} />
    )
}

export default CardBlockContainer

