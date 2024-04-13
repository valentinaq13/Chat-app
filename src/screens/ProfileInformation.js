import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants"
import { Avatar, Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import profile from "../assets/Mocks/Profile.json"

const ProfileInformation = () => {
    const [name, setName] = React.useState(profile.name);
    const [phone, setPhone] = React.useState(profile.phone);
    const [status, setStatus] = React.useState(profile.status);
    const [hasChanged, setHasChanged] = React.useState(false);
    return (
        <View style={styles.viewContainer}>
            <View style={styles.view}>
                <View style={styles.container}>
                    <Avatar.Icon size={50} icon="account" />
                    <View style={styles.columnContainer}>
                        <TextInput
                            label="Name"
                            value={name}
                            onChangeText={text => { setName(text), setHasChanged(true) }}
                            mode='outlined'
                            style={{ marginBottom: 10 }}
                        />
                        <TextInput
                            label="Phone"
                            value={phone}
                            onChangeText={text => { setPhone(text), setHasChanged(true) }}
                            mode='outlined'
                            style={{ marginBottom: 10 }}
                        />
                        <TextInput
                            label="Status"
                            value={status}
                            onChangeText={text => { setStatus(text), setHasChanged(true) }}
                            mode='outlined'
                            style={{ marginBottom: 10 }}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={() => setHasChanged(false)} disabled={!hasChanged}>
                        Guardar Cambios
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default ProfileInformation

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "#ffffff",
        height: "100%"
    },
    view: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexDirection: 'column',
        margin: 18,
        marginTop: 30,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        marginLeft: 15,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        width: "100%"
    },
})