import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idiomaCurriculo, setIdiomaCurriculo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastrar = () => {
    console.log('Valores informados:');
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('Data de nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('E-mail:', email);
    console.log('Confirmar e-mail:', confirmarEmail);
    console.log('CPF:', cpf);
    console.log('Idioma do currículo:', idiomaCurriculo);

    setMensagem('Dados cadastrados com sucesso!');

    setNome('');
    setGenero('');
    setDataNascimento('');
    setUsuario('');
    setSenha('');
    setEmail('');
    setConfirmarEmail('');
    setCpf('');
    setIdiomaCurriculo('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Nome' value={nome} onChangeText={setNome}/>
        <TextInput style={styles.input} placeholder='Gênero' value={genero} onChangeText={setGenero}/>
        <TextInput style={styles.input} placeholder='Data de nascimento' value={dataNascimento} onChangeText={setDataNascimento}/>
        <TextInput style={styles.input} placeholder='Usuário' value={usuario} onChangeText={setUsuario}/>
        <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} value={senha} onChangeText={setSenha}/>
        <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.input} placeholder='Confirmar e-mail' value={confirmarEmail} onChangeText={setConfirmarEmail}/>
        <TextInput style={styles.input} placeholder='CPF' value={cpf} onChangeText={setCpf}/>
        <TextInput style={styles.input} placeholder='Idioma do currículo' value={idiomaCurriculo} onChangeText={setIdiomaCurriculo}/>
        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>Cadastrar</TouchableOpacity>
        {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}
      </View>
      {nome}
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
    margin: 5,
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
  mensagem: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
