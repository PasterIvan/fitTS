import React from 'react';
// import { Button, Text, CustomTextInput, View } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
// import { setName } from '../../../../store/bll/meReduser'
// import tw from 'twrnc'
// import { useAppDispatch } from "../../../../hooks/hooks";
//
// export const ChangeName = ({ navigation }: ) => {
//   const dispatch = useAppDispatch()
//   const { name } = useSelector(state => state.me.me)
//   const [newName, setNewName] = useState(name)
//   const changeName = e => {
//     setNewName(e)
//   }
//   return (
//     <View>
//       <CustomTextInput
//         style={tw`text-lg leading-5 h-10 text-center px-2 border-b border-gray-600`}
//         onChangeText={changeName}
//         autoFocus={true}
//       >
//         {newName}
//       </CustomTextInput>
//       <Text style={tw`px-2 py-1 opacity-50`}>
//         Нажмите "ОК" чтобы сохранить новое имя или "Настройки", если хотите оставить предыщущее.
//       </Text>
//       <Button
//         title={'OK'}
//         onPress={() => {
//           dispatch(setName(newName))
//           navigation.navigate('Profile', { screen: 'Settings' })
//         }}
//       ></Button>
//     </View>
//   )
// }
