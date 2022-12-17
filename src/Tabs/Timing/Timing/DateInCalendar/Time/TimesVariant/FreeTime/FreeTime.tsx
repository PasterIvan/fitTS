import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import {ClientType} from '../../../../../../../Types/StateTypes';
import {ClientsInSearch} from './SearchClient/ClientsInSearch';

type FreeTimeProps = {
  isInputWrite: boolean;
  openInputWrite: () => void;
  cancelInputWrite: () => void;
  onChangeInput: (value: string) => void;
  writeClient: () => void;
  clientsFromSearch: ClientType[];
  clientFromSearch: ClientType;
};

export const FreeTime: React.FC<FreeTimeProps> = React.memo(
  ({
    isInputWrite,
    openInputWrite,
    cancelInputWrite,
    onChangeInput,
    writeClient,
    clientsFromSearch,
    clientFromSearch,
  }) => {
    const renderClient: ListRenderItem<ClientType> = ({item}) => (
      <ClientsInSearch {...item} />
    );
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
          <TextInput
            style={
              clientFromSearch.clientName !== ''
                ? tw`w-9/25 text-left mr-4`
                : tw`w-17/25 text-left mr-4`
            }
            multiline={true}
            numberOfLines={3}
            onChangeText={value => onChangeInput(value)}
            autoFocus={true}
            onEndEditing={cancelInputWrite}
          />
          <TouchableOpacity onPress={() => cancelInputWrite()}>
            <Text style={tw`px-2 w-full text-base text-red-700`}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={writeClient}>
            <Text style={tw`px-2 w-full text-base text-green-700`}>
              Записать
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={tw`bg-orange-400 rounded-lg px-2 w-full max-h-50 text-base text-green-700`}>
          <FlatList data={clientsFromSearch} renderItem={renderClient} />
        </ScrollView>
      </View>
    );
  },
);
