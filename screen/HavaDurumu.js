import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'a6daf2d756afebb0f52153efb5d17a89';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

const HavaDurumu = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        try {
          const response = await axios.get(API_URL + city);
          setWeatherData(response.data);
          setError(null);
        } catch (error) {
          setError("Şehir bulunamadı!");
          setWeatherData(null);
        }
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchWeather();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [city]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={text => setCity(text)}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>City: {weatherData.name}</Text>
          <Text style={styles.weatherText}>Temperature: {weatherData.main.temp}°C</Text>
          <Text style={styles.weatherText}>Description: {weatherData.weather[0].description}</Text>
        </View>
      )}
      <Text style={styles.footer}>Derya Gülmez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default HavaDurumu;
