import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextToSignComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text to Sign Component Placeholder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});

export default TextToSignComponent;
