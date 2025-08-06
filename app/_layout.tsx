import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{headerShown: false}}/>
    </GestureHandlerRootView>
  )
}

export default RootLayout

const styles = StyleSheet.create({})