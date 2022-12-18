import axios from 'axios';
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
  getTime(timeId: string) {
    return instance.get(`times/${timeId}`);
  },
  writeClient(data: {timeId: string; clientId: string; dateId: string}) {
    return instance.put('times', {
      data,
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

export const trainingAPI = {
  addTraining(data: {trainingTitle: string; timeId: string; dateId: string}) {
    return instance.post('training', {
      data,
    });
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
