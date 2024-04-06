import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import welcomeImage from '../assets/images/welcome.png'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
const welcome_image = Image.resolveAssetSource(welcomeImage).uri

const Page = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: welcome_image}} style={styles.welcome} />
            <Text style={styles.headline}>Welcome to Whatsapp Clone</Text>
            <Text style={styles.description}>
                Read Our{' '}
                <Text style={styles.link}>Privacy Policy</Text>
                . {'Tap "Agree & Continue" to accept the '}
                <Text style={styles.link}>Terms of Service</Text>
                .
            </Text>
            <Link href={"/otp"} replace asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Agree & continue</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    welcome: {
        width: '100%',
        height: 300,
        marginBottom: 80
    },
    headline:{
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: Colors.gray,
        marginBottom: 80,
    },
    link: {
        color: Colors.primary
    },
    button: {
        width: '100%',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 22,
        color: Colors.primary,
        fontWeight: 'bold',
    }
})