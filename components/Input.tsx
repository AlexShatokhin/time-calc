import { colors } from '@/constants/colors'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { verticalScale } from 'react-native-size-matters'

type InputProps = {
	placeholder?: string,
	fontSize?: number,
	weight?: '400' | '500' | '600' | '700' | '800' | '900',
	height?: number,
	width?: number,
	value?: string,
	onChangeText?: (text: string) => void,
}

const Input = ({ placeholder, fontSize = 16, weight, height = 100, width = 50, value, onChangeText }: InputProps) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<View >
			<TextInput 
				style={[
					styles.input, 
					{ borderBottomColor: isFocused ? colors.primary : colors.mediumBlack },
					{ fontSize: fontSize || verticalScale(fontSize), fontWeight: weight || '400', height: verticalScale(height) || verticalScale(70), width: width || verticalScale(50) }
				]}
				placeholderTextColor={colors.darkGray}
				placeholder={placeholder || "Введите значение"}
				value={value}
				onChangeText={onChangeText}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	)
}

export default Input

const styles = StyleSheet.create({
	input: {
		backgroundColor: colors.lightGray,
		paddingHorizontal: verticalScale(8),
		paddingVertical: verticalScale(12),
		borderBottomWidth: verticalScale(1),
		textAlign: 'center',
		marginHorizontal: "auto",
		color: colors.mediumBlack,
	},
})