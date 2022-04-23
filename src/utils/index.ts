import moment, {Moment} from 'moment';

export const rules = (message:string = 'Обязательное поле') =>  {
    return { required: true, message: message }
}

export const formatDate = (date:Date):string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${day}/${month}/${year}`;
}

export const isDateAffter = (message:string = 'Дата уже прошла') => () => ({
    validator(_:any,value:Moment) {
        if(value.isSameOrAfter(moment())){
            return Promise.resolve();
        }
        return Promise.reject(new Error(message));
    }
})