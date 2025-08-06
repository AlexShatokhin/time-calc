import { colors } from '@/constants/colors'
import { StatusBar } from 'expo-status-bar'
import React, { FC } from 'react'
import { Dimensions, Platform, StyleSheet, View } from 'react-native'

type ScreenWrapperProps = {
    children?: React.ReactNode;
    style?: object;
}

const ScreenWrapper : FC<ScreenWrapperProps> = ({children, style}) => {
  return (
    <View style = {[styles.container, style]}>
        <StatusBar style="dark" />
        {children}
    </View>
  )
}

export default ScreenWrapper


const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS == "ios" ? height * 0.06 : 25,
    }
})