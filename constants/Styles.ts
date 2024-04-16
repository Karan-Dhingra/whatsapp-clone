import Colors from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
    block: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 14,
        marginTop: 80,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.lightGray,
        marginLeft: 50,
    },
})
