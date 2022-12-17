import React, {useCallback, useState} from 'react';
import {useAppDispatch} from '../../../../../../../hooks/hooks';
import {setTraining} from '../../../../../../../store/bll/timeReduser';
import {TimeWithClient} from './TimeWithClient';
import {ClientType} from '../../../../../../../Types/StateTypes';

type TimeWithClientContainerProps = {
  timeId: string;
  client: ClientType;
};

export const TimeWithClientContainer: React.FC<
  TimeWithClientContainerProps
> = ({timeId, client}) => {
  const dispatch = useAppDispatch();
  const [isInputTraining, setIsInputTraining] = useState(false);
  const [trainingTitle, setTrainingTitle] = useState('');

  const addTraining = useCallback(() => {
    dispatch(setTraining({timeId, trainingTitle}));
    setIsInputTraining(false);
  }, [dispatch, trainingTitle, timeId, setIsInputTraining]);

  const onChangeInput = (value: string) => {
    setTrainingTitle(value);
  };

  const openInputTraining = useCallback(() => {
    setIsInputTraining(true);
  }, [setIsInputTraining]);

  const cancelInputTraining = useCallback(() => {
    setTrainingTitle('');
    setIsInputTraining(false);
  }, [setTrainingTitle, setIsInputTraining]);

  // const watchTraining = useCallback(() => {
  //   dispatch(setExercises(training.exercises));
  //   navigation.navigate('TimingTab', {screen: 'Training'});
  // }, [navigation, timeId, timeTitle, client, training]);

  return (
    <TimeWithClient
      client={client}
      isInputTraining={isInputTraining}
      openInputTraining={openInputTraining}
      cancelInputTraining={cancelInputTraining}
      onChangeInput={onChangeInput}
      addTraining={addTraining}
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
