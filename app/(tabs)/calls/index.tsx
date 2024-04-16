import { useState } from 'react';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image, SafeAreaView } from 'react-native';
import calls from '@/assets/data/calls.json'
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';

const Page = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [items, setItems] = useState(calls)
    const [selectedOption, setSelectedOption] = useState('All')

    const onEdit = () => {
        let editingNew = !isEditing;
        setIsEditing(editingNew)
    }

    const removeCall = (toDelete: any) => {
        setItems(items.filter((item) => item.id !== toDelete.id));
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
            <Stack.Screen options={{
                headerLeft: () => {
                    return <TouchableOpacity onPress={onEdit}>
                        <Text style={{color: Colors.primary, fontSize: 18, paddingRight: 10}}>
                            {isEditing ? 'Done' : 'Edit'}
                        </Text>
                    </TouchableOpacity>
                }
            }}
            />

            <ScrollView contentInsetAdjustmentBehavior='automatic' contentContainerStyle={{paddingBottom: 40}}>
                <View style={defaultStyles.block}>
                    <FlatList
                        data={items}
                        scrollEnabled={false}
                        ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => (
                            <View>
                                <View style={[defaultStyles.item]}>
                                    {isEditing && <TouchableOpacity
                                        style={[{ paddingLeft: 8 }]}
                                        onPress={() => removeCall(item)}>
                                        <Ionicons name="remove-circle" size={24} color={Colors.red} />
                                    </TouchableOpacity>}

                                    <Image source={{uri: item.img}} style={styles.avatar} />

                                    <View style={{flex: 1, gap: 2}}>
                                        <Text style={{fontSize: 18, color: item.missed ? Colors.red : '#000'}}>{item.name}</Text>

                                        <View style={{flexDirection: 'row', gap: 4}}>
                                            <Ionicons name={item.video ? 'videocam' : 'call'} size={16} color={Colors.gray}/>
                                            <Text style={{color: Colors.gray, flex: 1}}>{item.incoming ? 'Incoming' : 'Outgoing'}</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            gap: 6,
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ color: Colors.gray }}>{format(item.date, 'MM.dd.yy')}</Text>
                                        <Ionicons name="information-circle-outline" size={24} color={Colors.primary}/>
                                    </View>
                                </View>
                            </View>
                        )}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
})

export default Page;
