import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'

type WithSafeAreaView = {
  children: JSX.Element
}
export const WithSafeAreaView = (props: WithSafeAreaView) => {
  return <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
}
