import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {clientAPI} from '../../../../../../../../api/api';
import {ClientType} from '../../../../../../../../Types/StateTypes';

// THUNKS
export const getClientsInSearchTC = createAsyncThunk(
  'clientsSearch',
  async (params: {clientNameSearch: string}, {dispatch}) => {
    const res = await clientAPI.getClients(params);
    dispatch(setClientsFromSearch(res.data));
  },
);

//SLICE
const slice = createSlice({
  name: 'clientsSearch',
  initialState: {
    clients: [] as ClientType[],
    client: {} as ClientType,
  },
  reducers: {
    setClientsFromSearch(state, action: PayloadAction<ClientType[]>) {
      state.clients = action.payload;
    },
    setClientFromSearch(state, action: PayloadAction<ClientType>) {
      state.client = action.payload;
    },
  },
});

export const clientSearchReducer = slice.reducer;

export const {setClientsFromSearch, setClientFromSearch} = slice.actions;

export type ActionsTypeForClientSearchReducer =
  | ReturnType<typeof setClientsFromSearch>
  | ReturnType<typeof setClientFromSearch>;
