import { colors } from "@/constants/colors"
import { router } from "expo-router"
import { ArrowLeft } from "phosphor-react-native"
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
 
const BackButton = () => {
	return (
		<TouchableOpacity onPress={() => router.back()}>
			<ArrowLeft size={30} color={colors.mediumBlack}/>
		</TouchableOpacity>
	)
}

export default BackButton

const styles = StyleSheet.create({})