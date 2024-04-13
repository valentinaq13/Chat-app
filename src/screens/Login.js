import { StyleSheet, View, Text } from 'react-native'
import Constants from "expo-constants"
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userError, setUserError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    const validateEmail = (email) => {
        // Expresión regular para validar el formato de un correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleLogin = () => {
        if (!validateEmail(user)) {
            setUserError("Correo electrónico inválido");
        } else {
            setUserError(""); // Reiniciar el error si el correo es válido
        }

        if (password.length < 6) {
            setPasswordError("La contraseña debe tener al menos 6 caracteres");
        } else {
            setPasswordError(""); // Reiniciar el error si la contraseña tiene al menos 6 caracteres
        }

        if (validateEmail(user) && password.length >= 6) {
            setPassword("")
            setUser("")
            navigation.navigate('ChatList')
        }
    };

    return (
        <View style={styles.viewContainer}>
            <View style={styles.view}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        label="Email"
                        value={user}
                        onChangeText={text => setUser(text)}
                        style={{ marginBottom: 10 }}
                        mode='outlined'
                        error={userError}
                    />
                    <TextInput
                        label="Contraseña"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={{ marginBottom: 10 }}
                        mode='outlined'
                        error={passwordError}
                    />
                    <Text style={styles.errorText}>{userError}</Text>
                    <Text style={styles.errorText}>{passwordError}</Text>
                </View>
                <View style={styles.container}>
                    <Button mode="contained" onPress={handleLogin}>
                        Iniciar sesión
                    </Button>
                </View>
            </View>
        </View>
    )
};

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
    title: {
        fontSize: 18,
        marginTop: 30
    },
    container: {
        flexGrow: 1,
    },
    errorText: {
        color: "#d62828"
    }
});

export default Login