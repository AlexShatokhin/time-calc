import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import ScreenWrapper from '@/components/ScreenWrapper'
import { router } from 'expo-router'
import React from 'react'
import { Animated, StyleSheet } from 'react-native'

const HistoryScreen = () => {
  return (
		<ScreenWrapper>
			<BackButton />
			<Animated.View>

			</Animated.View>
			
			<Animated.View>

			</Animated.View>

			<Animated.View>
				<Button onPress={() => router.push("/convert")}>Продолжить</Button>
			</Animated.View>
		</ScreenWrapper>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})