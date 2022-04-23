import React, { FC, useState } from 'react';
import { Form, Input, Button, DatePicker, Row, Select } from 'antd';
import { formatDate, isDateAffter, rules } from '../utils';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import {Moment} from 'moment';
import { useTypeSelector } from '../hooks';

interface EventFormProps {
    guests:IUser[];
    submit:(event:IEvent)=>void
}

const EventForm:FC<EventFormProps> = (props) => {
    const {user} = useTypeSelector(state=>state.auth);
    const [event, setEvent] = useState<IEvent>({
        author:'',
        date:'',
        discription:'',
        guest:''
    });

    const setDate = (date:Moment|null) => {
        if(date) {
            setEvent({...event, date:formatDate(date?.toDate())})
        }
    }

    const submitForm = () => {
        props.submit({...event, author:user.login});
        console.log({...event, author:user.login});
    }

    return (
        <Form
            name="event-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onFinish={submitForm}
        >
            <Form.Item
                label="Название события"
                name="eventName"
                rules={[rules()]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Гость"
                name="guestName"
                rules={[rules()]}
            >
                <Select
                    showSearch
                    placeholder="Добавить гостя"
                    optionFilterProp="children"
                    onChange={(guest:string)=>setEvent({...event, guest})}
                >
                    {props.guests.map(item => {
                        return <Select.Option key={item.login} value={item.login}>{item.login}</Select.Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                label="Описание события"
                name="eventDiscription"
                rules={[rules()]}
            >
                <Input 
                    value={event.discription}
                    onChange={(e)=> setEvent({...event, discription:e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="eventDate"
                rules={[rules(),isDateAffter()]}
            >
                <DatePicker
                    onChange={(date)=>setDate(date)} 
                />
            </Form.Item>

            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Row>

        </Form>

    );
};

export default EventForm;