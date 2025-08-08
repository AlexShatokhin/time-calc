import CalculationLayout from '@/components/CalculationLayout'
import Input from '@/components/Input'
import Typo from '@/components/Typo'
import {colors} from "@/constants/Colors"
import { addTime, convertDecimalToTime, subtractTime, validateHours, validateMinutes } from '@/utils'
import { formatTimeWithDeclension } from '@/utils/formatters'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

const CalculateWorkDayScreen = () => {

	const params = useLocalSearchParams();
	const { workTime } = params as { workTime: string };
	const [beginWorkDayTime, setBeginWorkDayTime] = useState({ hours: "", minutes: "" });
	const [endWorkDayTime, setEndWorkDayTime] = useState({ hours: "", minutes: "" });
	const [isCalculatingFromBegin, setIsCalculatingFromBegin] = useState(true);

	const handleBeginTimeChange = (field: 'hours' | 'minutes', value: string) => {
		setIsCalculatingFromBegin(true);
		
		const filteredValue = value.replace(/[^0-9]/g, '').slice(0, 2);
		if (field === 'hours') {
			const hours = parseInt(filteredValue, 10);
			if (isNaN(hours) || !validateHours(hours)) 
				setBeginWorkDayTime(prev => ({ ...prev, hours: "" }))
			else
				setBeginWorkDayTime(prev => ({ ...prev, hours: filteredValue }));
		} else {
			const minutes = parseInt(filteredValue, 10);
			if (isNaN(minutes) || !validateMinutes(minutes)) 
				setBeginWorkDayTime(prev => ({ ...prev, minutes: "" }))
			else
				setBeginWorkDayTime(prev => ({ ...prev, minutes: filteredValue }));
		}
	}

	const handleEndTimeChange = (field: 'hours' | 'minutes', value: string) => {
		setIsCalculatingFromBegin(false);
		
		const filteredValue = value.replace(/[^0-9]/g, '').slice(0, 2);
		if (field === 'hours') {
			const hours = parseInt(filteredValue, 10);
			if (isNaN(hours) || !validateHours(hours)) 
				setEndWorkDayTime(prev => ({ ...prev, hours: "" }))
			else
				setEndWorkDayTime(prev => ({ ...prev, hours: filteredValue }));
		} else {
			const minutes = parseInt(filteredValue, 10);
			if (isNaN(minutes) || !validateMinutes(minutes)) 
				setEndWorkDayTime(prev => ({ ...prev, minutes: "" }))
			else	
				setEndWorkDayTime(prev => ({ ...prev, minutes: filteredValue }));
		}
	}

	useEffect(() => {
		console.log("Begin Work Day Time:", beginWorkDayTime);
		if (workTime && isCalculatingFromBegin && beginWorkDayTime.hours && beginWorkDayTime.minutes) {
			const workTimeDecimal = parseFloat(workTime);
			const { hours: workHours, minutes: workMinutes } = convertDecimalToTime(workTimeDecimal.toString());

			const resultTime = addTime(+beginWorkDayTime.hours, +beginWorkDayTime.minutes, +workHours, +workMinutes);
			setEndWorkDayTime({
				hours: resultTime.hours.toString().padStart(2, '0'),
				minutes: resultTime.minutes.toString().padStart(2, '0')
			});
		}
	}, [workTime, isCalculatingFromBegin, beginWorkDayTime.hours, beginWorkDayTime.minutes]);

	useEffect(() => {
		console.log("End Work Day Time:", endWorkDayTime);
		if (workTime && !isCalculatingFromBegin && endWorkDayTime.hours && endWorkDayTime.minutes) {
			const workTimeDecimal = parseFloat(workTime);
			const { hours: workHours, minutes: workMinutes } = convertDecimalToTime(workTimeDecimal.toString());

			const resultTime = subtractTime(+endWorkDayTime.hours, +endWorkDayTime.minutes, +workHours, +workMinutes);
			setBeginWorkDayTime({
				hours: resultTime.hours.toString().padStart(2, '0'),
				minutes: resultTime.minutes.toString().padStart(2, '0')
			});
		}
	}, [workTime, isCalculatingFromBegin, endWorkDayTime.hours, endWorkDayTime.minutes]);

  	return (
		<CalculationLayout 
			canGoBack 
			buttonText='Начать заново' 
			nextRoute="/"
			headerText="Расчет рабочего дня"
			screenInstruction="Введите начало или конец рабочего дня сотрудника">
				
				{workTime && (
					<Typo align='center' fontSize={14} weight='400' color={colors.darkGray}>
						{`Рабочее время: ${formatTimeWithDeclension(workTime)}`}
					</Typo>
				)}

				<View style={styles.timeSection}>
					<Typo style={styles.sectionTitle} fontSize={17} weight='500'>Начало дня</Typo>
					<View style={styles.timeInputContainer}>
						<View style={styles.inputGroup}>
							<Input 
								value={beginWorkDayTime.hours}
								onChangeText={(text) => handleBeginTimeChange('hours', text)}
								placeholder='09'
								fontSize={20}
								weight='700'
								width={80}
								height={50}/>
							<Typo style={styles.inputLabel} fontSize={12} color={colors.darkGray}>часов</Typo>
						</View>
						<View style={styles.inputGroup}>
							<Input 
								value={beginWorkDayTime.minutes}
								onChangeText={(text) => handleBeginTimeChange('minutes', text)}
								placeholder='00'
								fontSize={20}
								weight='700'
								width={80}
								height={50}/>
							<Typo style={styles.inputLabel} fontSize={12} color={colors.darkGray}>минут</Typo>
						</View>
					</View>
				</View>
				<View style={styles.timeSection}>
					<Typo style={styles.sectionTitle} fontSize={17} weight='500'>Конец дня</Typo>
					<View style={styles.timeInputContainer}>
						<View style={styles.inputGroup}>
							<Input 
								value={endWorkDayTime.hours}
								onChangeText={(text) => handleEndTimeChange('hours', text)}
								placeholder='18'
								fontSize={20}
								weight='700'
								width={80}
								height={50}/>
							<Typo style={styles.inputLabel} fontSize={12} color={colors.darkGray}>часов</Typo>
						</View>
						<View style={styles.inputGroup}>
							<Input 
								value={endWorkDayTime.minutes}
								onChangeText={(text) => handleEndTimeChange('minutes', text)}
								placeholder='00'
								fontSize={20}
								weight='700'
								width={80}
								height={50}/>
							<Typo style={styles.inputLabel} fontSize={12} color={colors.darkGray}>минут</Typo>
						</View>
					</View>
				</View>
			</CalculationLayout>
  )
}

export default CalculateWorkDayScreen

const styles = StyleSheet.create({
	timeSection: {
		marginBottom: verticalScale(60),
		paddingHorizontal: verticalScale(20),
	},
	sectionTitle: {
		marginBottom: verticalScale(15),
		textAlign: 'center',
	},
	timeInputContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: verticalScale(5),
	},
	inputGroup: {
		flex: 1,
		alignItems: 'center',
	},
	inputLabel: {
		marginTop: verticalScale(5),
		textAlign: 'center',
	},
})