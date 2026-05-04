import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [remember, setRemember] = useState(true);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header} />

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        {/* EMAIL */}
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* SENHA */}
        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        {/* OPTIONS */}
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.remember}
            onPress={() => setRemember(!remember)}
          >
            <View style={[styles.checkbox, remember && styles.checked]} />
            <Text style={styles.rememberText}>Lembrar-me</Text>
          </TouchableOpacity>

          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* LINK */}
        <Text style={styles.footer}>
          Ainda não tem uma conta?{" "}
          <Text style={styles.link}>Cadastrese</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
  },

  header: {
    height: 200,
    backgroundColor: "#5A8DEE",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -100,
    borderRadius: 20,
    padding: 20,
    elevation: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    marginBottom: 5,
    color: "#555",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },

  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  remember: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#5A8DEE",
    marginRight: 6,
  },

  checked: {
    backgroundColor: "#5A8DEE",
  },

  rememberText: {
    fontSize: 12,
  },

  forgot: {
    fontSize: 12,
    color: "#5A8DEE",
  },

  button: {
    backgroundColor: "#5A8DEE",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
  },

  link: {
    color: "#5A8DEE",
    fontWeight: "bold",
  },
});