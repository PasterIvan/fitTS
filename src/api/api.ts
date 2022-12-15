import axios, {AxiosResponse} from 'axios';
import {ClientType} from '../Types/StateTypes';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});
export const authAPI = {
  getMe(id: string) {
    return instance.get(`${id}`);
  },
};
export const dateAPI = {
  getDates() {
    return instance.get('dates');
  },
  getSelectedDate(dateId: string) {
    return instance.get(`dates/:${dateId}`);
  },
  addDate(param: any) {
    return instance.post('dates', {param});
  },
};

export const timeAPI = {
  getTimes(params: {dateId: string}) {
    return instance.get('times', {
      params,
    });
  },
  writeClient(params: {timeId: string; clientId: string; dateId: string}) {
    return instance.post('times', {
      params,
    });
  },
};

export const clientAPI = {
  getClients(params: {clientNameSearch: string}) {
    return instance.get<ClientType[]>('clients', {
      params,
    });
  },
  addClient(nameNewClient: any) {
    return instance.post('clients', {nameNewClient});
  },
};

export type GetClientsResponseType = {
  data: ClientType[];
  totalCount: number;
  error: string | null;
};
export type ResponseType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};
