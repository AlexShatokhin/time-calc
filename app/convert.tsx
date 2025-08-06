import CalculationLayout from '@/components/CalculationLayout'
import Typo from '@/components/Typo'
import { colors } from '@/constants/colors'
import { formatDisplayTime } from '@/utils/formatters'
import { router, useLocalSearchParams } from 'expo-router'
import { Check } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

const ConvertTimeScreen = () => {
	const params = useLocalSearchParams()
	const { workTime } = params;
	const [isChecked, setIsChecked] = useState(false)
	const [displayTime, setDisplayTime] = useState({ hours: 0, minutes: 0 })

	useEffect(() => {
		if (workTime && typeof workTime === 'string') {
			try {
				const timeValue = parseFloat(workTime)
				if (!isNaN(timeValue) && timeValue > 0) {
					const hours = Math.floor(timeValue)
					const minutes = Math.round((timeValue - hours) * 60)
					setDisplayTime({ hours, minutes })
				}
			} catch (error) {
				console.error('Error parsing workTime:', error)
				setDisplayTime({ hours: 0, minutes: 0 })
			}
		} else {
			setDisplayTime({ hours: 0, minutes: 0 })
		}
	}, [workTime])

	const toggleCheckbox = () => setIsChecked(!isChecked)

	const getTotalTime = () => {
		const baseMinutes = displayTime.hours * 60 + displayTime.minutes
		const totalMinutes = isChecked ? baseMinutes + 30 : baseMinutes
		const hours = Math.floor(totalMinutes / 60)
		const minutes = totalMinutes % 60
		return { hours, minutes }
	}

	const handleNextPress = () => {
		const { hours, minutes } = getTotalTime()
		const totalTimeInDecimal = hours + (minutes / 60)
		
		router.push({
			pathname: "/calculate" as any,
			params: {
				workTime: totalTimeInDecimal.toFixed(2)
			}
		})
	}

	const { hours: totalHours, minutes: totalMinutes } = getTotalTime()

	// Отладочная информация
	console.log('Convert screen data:', {
		workTime,
		displayTime,
		totalHours,
		totalMinutes,
		isChecked
	})

	// Форматированное отображение времени
	const displayText = formatDisplayTime(totalHours, totalMinutes)

  	return (
		<CalculationLayout 
			canGoBack 
			nextRoute="/calculate" 
			headerText="Конвертация времени"
			screenInstruction="В часах данное время будет выглядеть так"
			onNextPress={handleNextPress}>
				<Typo align='center' weight='700' fontSize={30}>
					{displayText}
				</Typo>
				<TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
					<View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
						{isChecked && <Check size={verticalScale(16)} color={colors.white} />}
					</View>
					<Typo align='center' weight='400' fontSize={16}>+30 минут обеда</Typo>
				</TouchableOpacity>
			</CalculationLayout>

  )
}

export default ConvertTimeScreen

const styles = StyleSheet.create({
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: verticalScale(20),
		paddingHorizontal: verticalScale(20),
	},
	checkbox: {
		width: verticalScale(20),
		height: verticalScale(20),
		borderWidth: verticalScale(2),
		borderColor: colors.gray,
		borderRadius: verticalScale(4),
		marginRight: verticalScale(10),
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkboxChecked: {
		borderColor: colors.primary,
		backgroundColor: colors.primary,
	},
	checkmark: {
		width: verticalScale(6),
		height: verticalScale(10),
		borderBottomWidth: verticalScale(2),
		borderRightWidth: verticalScale(2),
		borderColor: colors.white,
		marginBottom: verticalScale(2),
	},
})