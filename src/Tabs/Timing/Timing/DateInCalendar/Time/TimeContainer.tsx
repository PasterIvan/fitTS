import {FlatList, ListRenderItem, ScrollView, Text, View} from 'react-native';
import tw from 'twrnc';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/hooks';
import {ClientType, TimeType} from '../../../../../Types/StateTypes';
import {FreeTime} from './TimesVariant/FreeTime/FreeTime';
import {writeClientTC} from '../../../../../store/bll/dateReduser';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {clientAPI} from '../../../../../api/api';
import {ClientsInSearch} from './TimesVariant/FreeTime/SearchClient/ClientsInSearch';
import {Time} from './Time';

export const TimeContainer = ({
  timeId,
  timeTitle,
  client,
  training,
}: TimeType) => {
  const dispatch = useAppDispatch();
  // const navigation = useAppNavigation();
  // const [isInputTraining, setIsInputTraining] = useState(false);
  // const [trainingTitle, setTrainingTitle] = useState('');

  const dateId = useAppSelector(state => state.date.date.dateId);
  const {clientId} = useAppSelector(state => state.clientsFromSearch.client);
  // const clientNameSearch = useAppSelector(
  //   state => state.clientsFromSearch.clientNameSearch,
  // );
  // useEffect(() => {
  //   dispatch(getClientsInSearchTC({clientNameSearch}));
  // }, [dispatch, clientNameSearch]);
  // const clientsFromSearch = useAppSelector(
  //   state => state.clientsFromSearch.clients,
  // );

  // const writeClient = useCallback(() => {
  //   dispatch(writeClientTC({clientId, timeId, dateId}));
  //   setIsInputWrite(false);
  // }, [dispatch, clientId, timeId, dateId]);
  // const setName = (value: string) => {
  //   dispatch(setClientNameSearch(value));
  // };
  //
  // const cancelInputWrite = useCallback(() => {
  //   dispatch(setClientNameSearch(''));
  //   setIsInputWrite(false);
  // }, [dispatch, setIsInputWrite]);

  // const addTraining = useCallback(
  //   (/*timeId: string*/) => {
  //     // dispatch(setTraining({timeId, trainingTitle}));
  //     setIsInputTraining(false);
  //   },
  //   [/*dispatch, trainingTitle,*/ setIsInputTraining],
  // );

  // const cancelInputWrite = useCallback(() => {
  //   setClientNameSearch('');
  //   setIsInputWrite(false);
  // }, [setClientNameSearch, setIsInputWrite]);

  // const cancelInputTraining = useCallback(() => {
  // setTrainingTitle('');
  //   setIsInputTraining(false);
  // }, [setTrainingTitle, setIsInputTraining]);

  // const watchTraining = useCallback(
  //   () => {
  // dispatch(setExercises(training.exercises))
  // navigation.navigate('Training', {});
  // },
  // [
  /*navigation, timeId, timeTitle, client, training*/
  //   ],
  // );

  const [isInputWrite, setIsInputWrite] = useState(false);
  const [clientNameSearch, setClientNameSearch] = useState('');
  const [clientsFromSearch, setClientsFromSearch] = useState(
    [] as ClientType[],
  );

  const getClientsInSearchTC = createAsyncThunk(
    'clientsSearch',
    async (params: {clientNameSearch: string}) => {
      const res = await clientAPI.getClients(params);
      setClientsFromSearch(res.data);
    },
  );

  useEffect(() => {
    dispatch(getClientsInSearchTC({clientNameSearch}));
  }, [clientNameSearch]);

  const openInputWrite = () => {
    setIsInputWrite(true);
  };
  const onChangeInput = (value: string) => {
    setClientNameSearch(value);
  };
  const cancelInputWrite = useCallback(() => {
    setClientNameSearch('');
    setIsInputWrite(false);
  }, [setIsInputWrite]);

  const writeClient = useCallback(() => {
    dispatch(writeClientTC({clientId, timeId, dateId}));
    setIsInputWrite(false);
  }, [dispatch, clientId, timeId, dateId]);
  const renderClient: ListRenderItem<ClientType> = ({item}) => (
    <ClientsInSearch {...item} />
  );
  return (
    <Time
      timeTitle={timeTitle}
      client={client}
      isInputWrite={isInputWrite}
      openInputWrite={openInputWrite}
      cancelInputWrite={cancelInputWrite}
      onChangeInput={onChangeInput}
      writeClient={writeClient}
      clientsFromSearch={clientsFromSearch}
    />
  );
  // const renderClient: ListRenderItem<ClientType> = ({item}) => (
  //   <ClientsInSearch {...item} />
  // );

  // if (client) {
  //   if (training) {
  //     return (
  //       <View
  //         style={tw`w-full flex-row py-2 px-5 border-b border-gray-600 items-center`}>
  //         <Text style={tw`w-4/25 pr-2 text-base`}>{timeTitle}</Text>
  //         <View style={tw`w-5/25 pr-2 items-center`}>
  //           <Image
  //             style={tw`w-10 h-10 rounded-full`}
  //             source={require('../../../../Profile/img/ava-man.png')}
  //           />
  //           <Text style={tw`text-gray-600`}>{client.clientName}</Text>
  //         </View>
  //         <Text style={tw` w-8/25 pr-2 text-base font-semibold text-center`}>
  //           {training.trainingTitle}
  //         </Text>
  //         <TouchableOpacity
  //           style={tw`w-6/14 items-center`}
  //           onPress={watchTraining}>
  //           <Text style={tw`px-5 w-full text-base`}>Смотреть</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }
  //   return (
  //     <View
  //       style={tw`w-full flex-row py-2 px-5 border-b border-gray-600 items-center`}>
  //       <View style={tw`w-5/25 pr-2 items-center`}>
  //         <Image
  //           style={tw`w-10 h-10 rounded-full`}
  //           source={require('../../../../Profile/img/ava-man.png')}
  //         />
  //         <Text style={tw`text-gray-600`}>{client.clientName}</Text>
  //       </View>
  //       {isInputTraining ? (
  //         <View style={tw`flex-row w-13/25 pr-2 text-base items-center`}>
  //           <TextInput
  //             style={tw`w-15/25 h-full text-left mr-4`}
  //             multiline={true}
  //             numberOfLines={3}
  //             // onChangeText={setTrainingTitle}
  //             autoFocus={true}
  //             onEndEditing={cancelInputTraining}
  //           />
  //           <View style={tw` items-center`}>
  //             <TouchableOpacity onPress={cancelInputTraining}>
  //               <Text style={tw`px-2 pb-2 w-full text-base text-red-700`}>
  //                 Отмена
  //               </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() => {
  //                 /*addTraining(timeId)*/
  //               }}>
  //               <Text style={tw`px-2 w-full text-base text-green-700`}>
  //                 Добавить
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       ) : (
  //         <TouchableOpacity onPress={() => setIsInputTraining(true)}>
  //           <Text style={tw`px-5 w-full text-base text-orange-400`}>
  //             Добавить тренировку
  //           </Text>
  //         </TouchableOpacity>
  //       )}
  //     </View>
  //   );
  // }
  // return (
  //   <FreeTime
  //     timeTitle={timeTitle}
  //     clientId={clientId}
  //     clientName={clientName}
  //     dateId={dateId}
  //     timeId={timeId}
  //   />
  //   // <View style={tw`w-full flex-row border-gray-600 items-center`}>
  //   //   <Text style={tw` w-13/25 font-semibold text-center text-green-600`}>
  //   //     Свободное время
  //   //   </Text>
  //   //   <TouchableOpacity onPress={() => setIsInputWrite(true)}>
  //   //     <Text style={tw`px-5 w-full text-base`}>Записать</Text>
  //   //   </TouchableOpacity>
  //   // </View>
  // );
};
