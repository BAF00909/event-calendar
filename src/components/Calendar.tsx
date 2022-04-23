import React, { FC } from 'react';
import { Badge, Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import {Moment} from 'moment';
import { formatDate } from '../utils';

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
    function dateCellRender(value:Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayevents = props.events.filter((ev)=> ev.date === formatedDate);
        return (
            <div>
                {currentDayevents.map((ev,idx)=>{
                    return <div key={idx}>{ev.discription}</div>
                })}
            </div>
        );
    }

    return (

        <Calendar 
            onPanelChange={() => { }} 
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;