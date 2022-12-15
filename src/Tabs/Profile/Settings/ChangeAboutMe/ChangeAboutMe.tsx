import React, {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { Button, Text, TextInput, View } from 'react-native'
// import { setAboutMe } from '../../../../store/bll/meReduser'
// import tw from 'twrnc'
//
// export const ChangeAboutMe = ({ navigation }) => {
//   const dispatch = useDispatch()
//   const { aboutMe } = useSelector(state => state.me.me)
//   const [newAboutMe, setNewAboutMe] = useState(aboutMe)
//   const changeName = e => {
//     setNewAboutMe(e)
//   }
//   return (
//     <View>
//       <TextInput
//         style={tw`h-3/5 text-left text-lg leading-5 h-10 text-center px-2 border-b border-gray-600`}
//         multiline={true}
//         numberOfLines={3}
//         onChangeText={changeName}
//         autoFocus={true}
//       >
//         {newAboutMe}
//       </TextInput>
//       <Text style={tw`px-2 py-1 opacity-50`}>
//         Нажмите "ОК" чтобы сохранить описание о себе или "Настройки", если хотите оставить предыщее.
//       </Text>
//       <Button
//         title={'OK'}
//         onPress={() => {
//           dispatch(setAboutMe(newAboutMe))
//           navigation.navigate('Profile', { screen: 'Settings' })
//         }}
//       ></Button>
//     </View>
//   )
// }
