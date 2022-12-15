import {FlatList, ListRenderItem, ScrollView, Text, View} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {ClientType} from '../../../../../Types/StateTypes';
import {FreeTime} from './TimesVariant/FreeTime/FreeTime';
import {ClientsInSearch} from './TimesVariant/FreeTime/SearchClient/ClientsInSearch';

type TimeComponentPropsType = {
  timeTitle: string;
  client: ClientType | undefined;
  isInputWrite: boolean;
  openInputWrite: () => void;
  cancelInputWrite: () => void;
  onChangeInput: (value: string) => void;
  writeClient: () => void;
  clientsFromSearch: ClientType[];
};

export const Time: React.FC<TimeComponentPropsType> = ({
  timeTitle,
  client,
  isInputWrite,
  openInputWrite,
  cancelInputWrite,
  onChangeInput,
  writeClient,
  clientsFromSearch,
}) => {
  const renderClient: ListRenderItem<ClientType> = ({item}) => (
    <ClientsInSearch {...item} />
  );
  return (
    <View>
      <View
        style={tw`w-full flex-row py-2 px-5 border-b border-gray-600 items-center`}>
        <Text style={tw`w-4/25 pr-2 text-base`}>{timeTitle}</Text>
        {client ? (
          <Text>time with client</Text>
        ) : (
          <FreeTime
            isInputWrite={isInputWrite}
            openInputWrite={openInputWrite}
            cancelInputWrite={cancelInputWrite}
            onChangeInput={onChangeInput}
            writeClient={writeClient}
          />
        )}
      </View>
      {isInputWrite ? (
        <ScrollView
          style={tw`bg-orange-400 px-2 w-full max-h-50 text-base text-green-700`}>
          <FlatList data={clientsFromSearch} renderItem={renderClient} />
        </ScrollView>
      ) : (
        ''
      )}
    </View>
  );
};
