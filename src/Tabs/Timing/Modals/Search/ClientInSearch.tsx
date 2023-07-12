import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {useAppDispatch} from '../../../../hooks/hooks';
import {setClientFromSearch} from './searchReduser';
import {ClientType} from '../../../../Types/StateTypes';

export const ClientInSearch = React.memo(
  ({clientName, clientId}: ClientType) => {
    const dispatch = useAppDispatch();
    const setClient = useCallback(() => {
      dispatch(setClientFromSearch({clientId, clientName}));
    }, [dispatch, clientId, clientName]);
    return (
      <View
        style={tw`flex-row bg-stone-100 w-9.9/10 flex-row py-1 px-2 m-0.5 border rounded-lg border-gray-600 justify-between items-center`}>
        <View style={tw`flex-row items-center`}>
          <Image
            style={tw`w-10 h-10 rounded-full`}
            source={require('../../../Profile/img/ava-man.png')}
          />
          <Text style={tw`ml-3`}>{clientName}</Text>
        </View>
        <TouchableOpacity
          style={tw`w-3/10 bg-orange-400 border border-orange-700 rounded-xl py-2 items-center`}
          onPress={setClient}>
          <Text style={tw`text-base font-bold text-slate-50`}>Выбрать</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
