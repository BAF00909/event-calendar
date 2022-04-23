import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export class UserService {
    static async getGuests():Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./useers.json');
    }
}