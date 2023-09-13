import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Nome'/>
        <TextInput style={styles.input} placeholder='Gênero'/>
        <TextInput style={styles.input} placeholder='Data de nascimento'/>
        <TextInput style={styles.input} placeholder='Usuário'/>
        <TextInput style={styles.input} placeholder='Senha'/>
        <TextInput style={styles.input} placeholder='E-mail'/>
        <TextInput style={styles.input} placeholder='Confirmar e-mail'/>
        <TextInput style={styles.input} placeholder='CPF'/>
        <TextInput style={styles.input} placeholder='Idioma do currículo'/>
        <TouchableOpacity style={styles.button}>Cadastrar</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    padding: 10,
    width: '50%',
  },
  button: {
    padding: 15,
    margin: '10%',
    width: '75%',
    backgroundColor: '#4B98B8',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'arial',
    fontWeight: 'bold',
    borderRadius: 5,
  },
});
