import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {TimeType} from '../../../../../../../Types/StateTypes';
import {useAppNavigation} from '../../../../../../../hooks/hooks';

type FreeTimeProps = {
  time: TimeType;
};

export const FreeTime: React.FC<FreeTimeProps> = React.memo(({time}) => {
  const {navigate} = useAppNavigation();
  const openModalWriteClient = useCallback(() => {
    navigate('TimingTab', {
      screen: 'AddClientModal',
      params: {
        time,
      },
    });
  }, [navigate]);
  return (
    <View>
      <View style={tw`w-full flex-row items-center`}>
        <Text style={tw`w-14/25 font-semibold text-center text-green-600`}>
          Свободное время
        </Text>
        <TouchableOpacity onPress={openModalWriteClient}>
          <Text style={tw`px-6 w-full text-base`}>Записать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
