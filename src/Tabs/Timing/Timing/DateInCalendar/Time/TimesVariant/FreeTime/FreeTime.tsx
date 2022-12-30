import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import {CustomTextInput} from '../../../../../../../common/TextInput/CustomTextInput';
import {ClientType} from '../../../../../../../Types/StateTypes';
import {ClientsInSearch} from './SearchClient/ClientsInSearch';

type FreeTimeProps = {
  isInputWrite: boolean;
  openInputWrite: () => void;
  cancelInputWrite: () => void;
  onChangeInput: (value: string) => void;
  writeClient: () => void;
  // clientsFromSearch: ClientType[];
  clientFromSearch: ClientType;
};

export const FreeTime: React.FC<FreeTimeProps> = React.memo(
  ({
    isInputWrite,
    openInputWrite,
    cancelInputWrite,
    onChangeInput,
    writeClient,
    // clientsFromSearch,
    clientFromSearch,
  }) => {
    return !isInputWrite ? (
      <View>
        <View style={tw`w-full flex-row items-center`}>
          <Text style={tw`w-14/25 font-semibold text-center text-green-600`}>
            Свободное время
          </Text>
          <TouchableOpacity onPress={openInputWrite}>
            <Text style={tw`px-6 w-full text-base`}>Записать</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View>
        <View style={tw`flex-row w-13/25 pr-2 text-base items-center`}>
          {clientFromSearch.clientName !== '' ? (
            <View style={tw`w-8/25 items-center`}>
              <Image
                style={tw`w-8 h-8 rounded-full`}
                source={require('../../../../../../Profile/img/ava-man.png')}
              />
              <Text style={tw`text-gray-600`}>
                {clientFromSearch.clientName}
              </Text>
            </View>
          ) : (
            ''
          )}
          <CustomTextInput
            onChangeInput={onChangeInput}
            cancelInput={cancelInputWrite}
            action={writeClient}
          />
        </View>
      </View>
    );
  },
);
