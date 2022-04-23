import { AppDispatch } from '../..'
import { UserService } from '../../../api/UserService'
import { IEvent } from '../../../models/IEvent'
import {IUser} from '../../../models/IUser'
import { ActionSetEvent, ActionSetGuest, EventActionEnum } from './types'

export const EventActionCreators = {
    setGuests: (payload:IUser[]):ActionSetGuest=>({type:EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload:IEvent[]):ActionSetEvent=>({type:EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: ()=> async (dispatch: AppDispatch)=>{
        try {
            const response = await UserService.getGuests();
            dispatch(EventActionCreators.setGuests(response.data));
        } catch (error) {
            console.log(error);
        }
    },
    createEvent: (event:IEvent)=> async (dispatch: AppDispatch)=>{
        try {
           const events = localStorage.getItem('events') || '[]';
           const json = JSON.parse(events) as IEvent[];
           json.push(event);
           dispatch(EventActionCreators.setEvents(json));
           localStorage.setItem('events',JSON.stringify(json));
        } catch (error) {
            console.log(error);
        }
    },
    fetchEvents: (userName:string)=> async (dispatch: AppDispatch)=>{
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter((ev)=>ev.author == userName || ev.guest == userName);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (error) {
            console.log(error);
        }
    },
}