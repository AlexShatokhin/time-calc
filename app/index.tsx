import CalculationLayout from '@/components/CalculationLayout'
import Input from '@/components/Input'
import { filterTimeInput, normalizeTimeString, validateTimeFormat, validateWorkTime } from '@/utils'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, StyleSheet } from 'react-native'

const InputTimeScreen = () => {
	const [workTime, setWorkTime] = useState('')

	const handleInputChange = (text: string) => {
		const filteredText = filterTimeInput(text)
		if (filteredText.length <= 5) {
			setWorkTime(filteredText)
		}
	}

	const validateAndProceed = () => {
		if (!workTime) {
			Alert.alert('Ошибка', 'Пожалуйста, введите рабочее время')
			return false
		}

		if (!validateTimeFormat(workTime)) {
			Alert.alert('Ошибка', 'Введите время в формате 00,00 или 00.00')
			return false
		}

		const normalizedTime = normalizeTimeString(workTime)
		const timeValue = parseFloat(normalizedTime)

		if (!validateWorkTime(timeValue)) {
			Alert.alert('Ошибка', 'Время должно быть от 0.01 до 24.00 часов')
			return false
		}

		router.push({
			pathname: './convert' as any,
			params: { workTime: normalizedTime }
		})

		return true
	}

	return (
		<CalculationLayout 
			canGoBack={false} 
			nextRoute="/convert" 
			headerText="Ввод времени"
			screenInstruction="Введите рабочее время сотрудника"
			disableButton={!validateTimeFormat(workTime)}
			onNextPress={validateAndProceed}>

			<Input
				placeholder='8,5'
				fontSize={48}
				width={140}
				height={80}
				weight='800'
				value={workTime}
				onChangeText={handleInputChange}/>
		</CalculationLayout>
	)
}

export default InputTimeScreen

const styles = StyleSheet.create({})