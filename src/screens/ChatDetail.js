import { StyleSheet, FlatList, TextInput, TouchableOpacity, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from "expo-constants"
import Chat from "../assets/Mocks/SpecificChat.json"

const ChatDetail = ({ route }) => {
    const [chats, setChats] = useState([{
        contact: route.params.contact,
        messages: [],
    }]);
    const [messageText, setMessageText] = useState('');

    const sendMessage = (newMessage) => {
        const updatedChats = chats?.map(chat => {
            if (chat.contact === route.params.contact) {
                return {
                    ...chat,
                    messages: [
                        ...chat.messages,
                        {
                            sender: "You",
                            content: newMessage,
                            time: new Date().toLocaleTimeString()
                        }
                    ]
                };
            }
            return chat;
        });
        setChats(updatedChats);
        setMessageText('');
    };

    useEffect(() => {
        const filteredChat = Chat.filter(el => el.contact == route.params.contact)
        filteredChat.length ? setChats(filteredChat) : null;
    }, [route.params.contact]);

    return (
        <View style={styles.viewContainer}>
            <View style={styles.view}>
                <FlatList
                    data={chats}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.title}>{item?.contact}</Text>
                            <FlatList
                                data={item?.messages}
                                keyExtractor={(message, index) => index.toString()}
                                renderItem={({ item: message }) => (
                                    <View style={styles.chatContainer}>
                                        <Text>{message?.sender}: {message?.content}</Text>
                                        <Text style={styles.date}>{message?.time}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    )}
                />
                {/* Formulario para enviar mensajes */}
                <View style={styles.buttonContainer}>
                    <TextInput
                        style={{ flex: 1, borderWidth: 1, borderColor: 'gray', marginRight: 10, padding: 5 }}
                        placeholder="Escribe tu mensaje..."
                        onChangeText={(text) => setMessageText(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => sendMessage(messageText)} >
                        <Text style={styles.text}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ChatDetail

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "#ffffff",
        height: "100%"
    },
    view: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexDirection: 'column',
        margin: 18
    },
    chatContainer: {
        backgroundColor: "#dee2ff",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    date: {
        fontSize: 12,
        color: "#6c757d"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },
    button: {
        backgroundColor: "#6a4c93",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#ffffff",
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row', alignItems: 'center', marginTop: 20,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
    },
})