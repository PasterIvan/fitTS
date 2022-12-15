import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useAppDispatch} from '../../../../../../../../hooks/hooks';
import {setClientFromSearch} from './clientSearchReduser';
import {ClientType} from '../../../../../../../../Types/StateTypes';

export const ClientsInSearch = ({clientName, clientId}: ClientType) => {
  const dispatch = useAppDispatch();
  const writeClient = useCallback(() => {
    dispatch(setClientFromSearch({clientId, clientName}));
  }, [dispatch, clientId, clientName]);

  return (
    <TouchableOpacity
      onPress={writeClient}
      style={tw`flex-row items-center justify-center my-1`}>
      <Image
        style={tw`w-10 h-10 rounded-full`}
        source={require('../../../../../../../Profile/img/ava-man.png')}
      />
      <Text style={tw`ml-3`}>{clientName}</Text>
    </TouchableOpacity>
  );
};
