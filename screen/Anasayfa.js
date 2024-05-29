import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Anasayfa({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        Ana Ekran
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Kurslarım
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Kurs Bilgi
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('YasSayac')}
        style={{ backgroundColor: 'lightblue', borderRadius: 5, marginTop: 20, padding: 10 }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Yaş Sayaç
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HavaDurumu')}
        style={{ backgroundColor: 'lightblue', borderRadius: 5, marginTop: 20, padding: 10 }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Hava Durumu
        </Text>
      </TouchableOpacity>
    </View>
  );
}
