import { TextInput, StyleSheet, View } from "react-native";

export default function CustomTextInput({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 18,
  },
});
