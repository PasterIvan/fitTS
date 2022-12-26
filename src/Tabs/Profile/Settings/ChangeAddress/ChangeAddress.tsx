import React, {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { Button, Text, CustomTextInput, View } from 'react-native'
// import { setAddress } from '../../../../store/bll/meReduser'
// import tw from 'twrnc'
//
// export const ChangeAddress = ({ navigation }) => {
//   const dispatch = useDispatch()
//   const { address } = useSelector(state => state.me.me)
//   const [newAddress, setNewAddress] = useState(address)
//   const changeName = e => {
//     setNewAddress(e)
//   }
//   return (
//     <View>
//       <CustomTextInput
//         style={tw`text-lg leading-5 h-10 text-center px-2 border-b border-gray-600`}
//         onChangeText={changeName}
//         autoFocus={true}
//       >
//         {newAddress}
//       </CustomTextInput>
//       <Text style={tw`px-2 py-1 opacity-50`}>
//         Нажмите "ОК" чтобы сохранить новый адрес или "Настройки", если хотите оставить предыщий.
//       </Text>
//       <Button
//         title={'OK'}
//         onPress={() => {
//           dispatch(setAddress(newAddress))
//           navigation.navigate('Profile', { screen: 'Settings' })
//         }}
//       ></Button>
//     </View>
//   )
// }
