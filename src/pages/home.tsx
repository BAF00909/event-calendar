import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/Calendar';
import { Button, Layout, Row, Modal } from 'antd';
import EventForm from '../components/EventForm';
import { useActions, useTypeSelector } from '../hooks';
import { IEvent } from '../models/IEvent';


const Home: FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests, events} = useTypeSelector(state=>state.event);
    const {user} = useTypeSelector(state=>state.auth);

    useEffect(()=>{
        fetchGuests();
        fetchEvents(user.login);
    },[])

    const addNewEvent = (event:IEvent) => {
        createEvent(event);
        setIsModalVisible(false);
    }

    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button onClick={()=>setIsModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal 
                title="Событие" 
                visible={isModalVisible}
                footer={null}
                onCancel={()=>setIsModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                    submit={(event)=>addNewEvent(event)}
                />
            </Modal>
        </Layout>
    );
};

export default Home;