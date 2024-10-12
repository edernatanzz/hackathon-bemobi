import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem Vindo - Pedro</Text>

      <View style={styles.dateContainer}>
        <View style={styles.date}>
          <Text>sex</Text>
          <Text>16</Text>
        </View>
        <View style={styles.date}>
          <Text>sab</Text>
          <Text>17</Text>
        </View>
        <View style={styles.date}>
          <Text>dom</Text>
          <Text>18</Text>
        </View>
        <View style={styles.date}>
          <Text>seg</Text>
          <Text>19</Text>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
    marginTop: 20,
    gap:50
  },
  date: {
    alignItems: 'center',
  },
});

export default HomePage;
