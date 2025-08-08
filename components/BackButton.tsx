import { colors } from '@/constants/Colors'
import { router } from "expo-router"
import { ArrowLeftIcon } from "phosphor-react-native"
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
 
const BackButton = () => {
	return (
		<TouchableOpacity onPress={() => router.back()}>
			<ArrowLeftIcon size={30} color={colors.mediumBlack}/>
		</TouchableOpacity>
	)
}

export default BackButton

const styles = StyleSheet.create({})