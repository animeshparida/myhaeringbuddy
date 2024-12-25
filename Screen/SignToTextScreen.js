// SignToTextScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CameraComponent from '../components/CameraComponents'; // Corrected import path

const SignToTextScreen = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (uri) => {
    setCapturedImage(uri); // Save the captured image URI to state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-to-Text</Text>
      {capturedImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: capturedImage }} style={styles.image} />
          <Text>Image Captured!</Text>
        </View>
      ) : (
        <CameraComponent onCapture={handleCapture} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default SignToTextScreen;
