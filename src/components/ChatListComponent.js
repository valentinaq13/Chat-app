import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ChatListComponent = ({ navigation, chats }) => {
    return (
        <FlatList
            data={chats}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Chat', { contact: item.contact })}>
                    <View style={styles.chatContainer}>
                        <Text style={styles.name}>{item.contact}</Text>
                        <Text>{item.lastMessage}</Text>
                        <Text style={styles.date}>{item.lastMessageTime}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default ChatListComponent

const styles = StyleSheet.create({
    chatContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        //backgroundColor: "#e2eafc" 
    },
    date: {
        fontSize: 12,
        color: "#6c757d"
    },
    name: {
        color: "#8e7dbe",
        fontWeight: "bold",
        fontSize: 16,
    }
})