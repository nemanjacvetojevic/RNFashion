import React from "react"
import { View, Text, Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window")
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        width
    },
    title: {
        fontSize: 75,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center",
        lineHeight: 80,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
        
    }
})
interface SlideProps {
    label: string;
    right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
    const transform =  [
        {translateY: (SLIDE_HEIGHT - 100) / 2},
        {translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        {rotate: right ? "-90deg" : "90deg"}
    ];

    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>
                    {label}
                </Text>
            </View>
        </View>
    )
}

export default Slide