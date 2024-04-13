import { FlatList, StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants"
import React from 'react'
import ChatListComponent from '../components/ChatListComponent'
import chats from "../assets/Mocks/Chats.json"
import { Appbar } from 'react-native-paper';

const ChatList = ({ navigation }) => {
    return (
        <View style={styles.viewContainer}>
            <Appbar.Header style={{ justifyContent: "flex-end" }}>
                <Appbar.Action icon="account" onPress={() => { navigation.navigate("Profile") }} />
            </Appbar.Header>
            <View style={styles.view}>
                <Text style={styles.title}>Chats</Text>
                <ChatListComponent navigation={navigation} chats={chats} />
            </View>
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "#ffffff",
        height: "100%"
    },
    view: {
        flexGrow: 1,
        flexDirection: 'column',
        margin: 18
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "600",
        color: "#3d348b"
    },
})