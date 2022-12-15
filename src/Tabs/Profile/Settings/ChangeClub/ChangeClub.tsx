import React, {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { Button, Text, TextInput, View } from 'react-native'
// import { setClub } from '../../../../store/bll/meReduser'
// import tw from 'twrnc'
//
// export const ChangeClub = ({ navigation }) => {
//   const dispatch = useDispatch()
//   const { club } = useSelector(state => state.me.me)
//   const [newClub, setNewClub] = useState(club)
//   const changeName = e => {
//     setNewClub(e)
//   }
//   return (
//     <View>
//       <TextInput
//         style={tw`text-lg leading-5 h-10 text-center px-2 border-b border-gray-600`}
//         onChangeText={changeName}
//         autoFocus={true}
//       >
//         {newClub}
//       </TextInput>
//       <Text style={tw`px-2 py-1 opacity-50`}>
//         Нажмите "ОК" чтобы сохранить новый клуб или "Настройки", если хотите оставить предыщий.
//       </Text>
//       <Button
//         title={'OK'}
//         onPress={() => {
//           dispatch(setClub(newClub))
//           navigation.navigate('Profile', { screen: 'Settings' })
//         }}
//       ></Button>
//     </View>
//   )
// }
