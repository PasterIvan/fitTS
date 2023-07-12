import React from 'react';
import {FlatList, Image, ListRenderItem, Text, View} from 'react-native';
import tw from 'twrnc';
import {CustomTextInput} from '../../../common/TextInput/CustomTextInput';
import {ClientType, TimeType} from '../../../Types/StateTypes';
import {ClientInSearch} from './Search/ClientInSearch';
import Icon from 'react-native-vector-icons/AntDesign';

type AddClientModalProps = {
  time: TimeType;
  date: string;
  clientsFromSearch: ClientType[];
  clientFromSearch: ClientType;
  clientId: string;
  onChangeInput: (value: string) => void;
  cancelInputWrite: () => void;
  writeClient: () => void;
};

export const AddClientModal: React.FC<AddClientModalProps> = ({
  time,
  date,
  clientsFromSearch,
  clientFromSearch,
  clientId,
  onChangeInput,
  cancelInputWrite,
  writeClient,
}) => {
  const renderClient: ListRenderItem<ClientType> = ({item}) => (
    <ClientInSearch {...item} />
  );
  return (
    <View style={tw`flex-1 bg-gray-50 items-center `}>
      <Text style={tw`w-full pr-2 text-base text-center`}>
        {time.timeTitle} {date}
      </Text>

      <View style={tw`w-full flex-row items-center`}>
        {clientFromSearch.clientName !== '' ? (
          <View style={tw`items-center px-2`}>
            <Image
              style={tw`w-20 h-20 rounded-full`}
              source={require('../../Profile/img/ava-man.png')}
            />
            <Text style={tw`text-gray-600`}>{clientFromSearch.clientName}</Text>
          </View>
        ) : (
          <View style={tw`w-24 items-center`}>
            <Icon name="search1" size={50} color="grey" />
          </View>
        )}
        <CustomTextInput
          disabled={!clientId}
          onChangeInput={onChangeInput}
          cancelModal={cancelInputWrite}
          action={writeClient}
        />
      </View>

      <View style={tw`w-full border-t`}>
        {clientsFromSearch.length === 0 ? (
          <Text style={tw`text-center py-2`}>Ни чего не найдено</Text>
        ) : (
          <FlatList data={clientsFromSearch} renderItem={renderClient} />
        )}
      </View>
    </View>
  );
};
