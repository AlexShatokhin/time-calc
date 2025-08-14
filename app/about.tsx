import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors } from '@/constants/Colors'
import { PhoneCallIcon, TelegramLogoIcon } from 'phosphor-react-native'
import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { verticalScale } from 'react-native-size-matters'

const HistoryScreen = () => {

	const handlePhoneCall = () => {
		const phoneNumber = '+37377864160';
		Linking.openURL(`tel:${phoneNumber}`);
	}

	const handleTelegram = () => {
		const telegramUsername = "@sashatokhin";
		Linking.openURL(`https://t.me/${telegramUsername}`);
	}

	return (
		<ScreenWrapper>
			<View style={styles.backButtonWrapper}>
				<BackButton />
			</View>
			<View style={styles.screenContainer}>
				<Animated.View entering={FadeInUp.duration(800).damping(12).springify()} style={styles.developerSection}>
					<View style={styles.developerHeader}>
						<Typo fontSize={18} weight='600' color={colors.softBlack}>Разработчик</Typo>
					</View>
					<View style={styles.developerInfo}>
						<Typo fontSize={16} weight='500' color={colors.softBlack}>Александр Шатохин</Typo>
						<Typo fontSize={14} weight='400' color={colors.softBlack}>Web/Mobile разработчик</Typo>
					</View>
					<View style={styles.contactButtonsContainer}>
						<View style={styles.contactButton}>
							<Button 
								onPress={handlePhoneCall} 
								buttonStyle={styles.phoneButton}
								fontSize={14}
								weight='500'>
								<Text>
									<PhoneCallIcon color={colors.white} size={verticalScale(18)}/> <Typo color={colors.white} weight='500'>Позвонить</Typo>
								</Text>
							</Button>
						</View>
						<View style={styles.contactButton}>
							<Button 
								onPress={handleTelegram} 
								buttonStyle={styles.telegramButton}
								fontSize={verticalScale(14)}
								weight='500'>
								<Text>
									<TelegramLogoIcon color={colors.white} size={verticalScale(18)}/> <Typo color={colors.white} weight='500'>Telegram</Typo>
								</Text>
							</Button>
						</View>
					</View>
				</Animated.View>
			</View>
		</ScreenWrapper>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
	backButtonWrapper: {
		marginTop: verticalScale(14),
		marginLeft: verticalScale(8)
	},
	screenContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: verticalScale(16),
	},
	developerSection: {
		marginTop: verticalScale(30),
		alignItems: 'center',
		width: '100%',
	},
	developerHeader: {
		marginBottom: verticalScale(16),
	},
	developerInfo: {
		alignItems: 'center',
		marginBottom: verticalScale(24),
		gap: verticalScale(4),
	},
	contactButtonsContainer: {
		width: '100%',
		gap: verticalScale(12),
	},
	contactButton: {
		width: '100%',
	},
	phoneButton: {
		display: "flex",
		alignItems: 'center',
		backgroundColor: '#4CAF50',
		height: verticalScale(48),
	},
	telegramButton: {
		display: "flex",
		alignItems: 'center',
		backgroundColor: '#0088cc',
		height: verticalScale(48),
	},
})