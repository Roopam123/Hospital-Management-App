import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {

    return (
        <View style={styles.login}>
            <Image source={require('../../assets/Images/login-without-background.png')} style={styles.image} />
            <Text style={styles.title}>Your Unlimited Appointment Booking App</Text>
            <Text style={styles.subtitle}>Book Appointment Effectively And Manage your health jurney</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={() => {
                console.log("I am clicked");
            }}>
                <Text style={styles.loginBtnText}>Login with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        gap: 15
    },
    image: {
        width: "100%",
        transform: [{ scale: 1.2 }],
        marginVertical: 50
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "800",
        color: "blue"
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "500"
    },
    loginBtn: {
        backgroundColor: "blue",
        width: "70%",
        height: "8%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    loginBtnText: {
        color: "white",
        fontSize: 22,
        fontWeight: "600"
    }
})
export default Login