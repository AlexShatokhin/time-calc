import Button from '@/components/Button'
import Header from "@/components/Header"
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors } from '@/constants/colors'
import { router } from 'expo-router'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { verticalScale } from 'react-native-size-matters'
import Typo from './Typo'

type CalculationLayoutProps = {
    canGoBack: boolean,
    buttonText?: string,
    nextRoute: "/convert" | "/calculate" | "/",
    headerText: string,
	screenInstruction: string,
	children?: React.ReactNode,
	disableButton?: boolean,
	onNextPress?: () => boolean | void,
}

const CalculationLayout : FC<CalculationLayoutProps> = ({ canGoBack, buttonText, nextRoute, headerText, screenInstruction, children, disableButton, onNextPress }) => {
	const handleNextPress = () => {
		if (onNextPress) {
			const result = onNextPress()
			if (result === false) return
		} else {
			router.push(nextRoute)
		}
	}

	return (
		<ScreenWrapper>
            <Header canGoBack={canGoBack} text={headerText} />

			<View style={styles.contentWrapper}>
				<Animated.View entering={FadeInUp.duration(400).damping(12).springify()}>
					<Typo align='center' fontSize={20} weight='300' color={colors.darkGray}>{screenInstruction}</Typo>
				</Animated.View>
				
				<Animated.View entering={FadeInUp.duration(400).damping(12).springify().delay(200)}>
					{children}
				</Animated.View>

				<Animated.View entering={FadeInUp.duration(400).damping(12).springify().delay(300)}>
					<Button disabled={disableButton} onPress={handleNextPress}>{buttonText || "Продолжить"}</Button>
				</Animated.View>
			</View>

		</ScreenWrapper>
	)
}

export default CalculationLayout

const styles = StyleSheet.create({
	contentWrapper:{
		flex: 1,
		justifyContent: 'space-between',
		paddingVertical: verticalScale(40),
		paddingHorizontal: verticalScale(16),
	}
})