import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { InfoIcon } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import BackButton from './BackButton';
import Typo from './Typo';

type HeaderProps = {
	canGoBack?: boolean;
	text: string;
}

const Header = ({ canGoBack, text }: HeaderProps) => {
  return (
    <View style={styles.container}>
		{canGoBack ? (
			<View style={styles.backButtonContainer}>
				<BackButton />
			</View>
		) : <View style={styles.spacer} />}
		<View style={styles.titleContainer}>
			<Typo align="center" fontSize={17} weight='600' color={colors.mediumBlack}>{text}</Typo>
		</View>
		<TouchableOpacity onPress={() => router.push("/about")}>
			<InfoIcon
				size={30} 
				color={colors.mediumBlack} />
		</TouchableOpacity>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		paddingVertical: 12,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
		minHeight: 60,
	},
	backButtonContainer: {
		width: 40,
		alignItems: 'flex-start',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	spacer: {
		width: 40, // Равная ширина с backButtonContainer для центрирования
	},
})