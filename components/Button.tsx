import { FC } from "react";
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../constants/Colors";
import Typo from "./Typo";

type ButtonProps = {
    onPress?: () => void;
    disabled?: boolean;
    textStyle?: TextStyle;
    buttonStyle?: ViewStyle | ViewStyle[];
    children?: React.ReactNode | string;
    fontSize?: number;
    color?: string;
    weight?: '400' | '500' | '600' | '700';
}

const Button: FC<ButtonProps> = ({
    onPress,
    disabled = false,
    textStyle,
    buttonStyle,
    children = 'Button',
    fontSize = 16,
    color = '#fff',
    weight = '500'
}) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                disabled && styles.buttonDisabled,
                ...(Array.isArray(buttonStyle) ? buttonStyle : buttonStyle ? [buttonStyle] : []),
            ]}
            activeOpacity={0.7}
        >
            {typeof children === 'string' ? (
                <Typo 
                    color={color} 
                    fontSize={fontSize} 
                    weight={weight}
                    style={textStyle}
                >
                    {children}
                </Typo>
            ) : (
                children
            )}
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        height: verticalScale(40),
        width: "100%",
        backgroundColor: colors.mediumBlack,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDisabled: {
        opacity: 0.5,
    },
})