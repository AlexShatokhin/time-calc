
import { colors } from '@/constants/colors';
import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

type TypoProps = {
    children?: string;
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    fontSize?: number;
    style?: TextStyle;
    color?: string;
    align?: "left" | "center" | "right" | "justify";
}

const Typo : FC<TypoProps> = ({children, style, fontSize = 16, weight = "400", color = colors.black, align}) => {
    const textStyles : TextStyle = {
        fontWeight: weight,
        fontSize: verticalScale(fontSize),
        color,
        textAlign: align || "left",
    }
    return <Text style={[textStyles, style]}>{children}</Text>
}

export default Typo
