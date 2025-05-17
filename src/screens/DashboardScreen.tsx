import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = ({ navigation }: any) => {
  const theme = useTheme();

  const menuItems = [
    {
      title: 'Adicionar Produto',
      description: 'Cadastre novos produtos ou serviços',
      icon: 'plus-circle',
      onPress: () => navigation.navigate('AddProduct'),
    },
    {
      title: 'Relatórios',
      description: 'Visualize relatórios de vendas e lucros',
      icon: 'chart-bar',
      onPress: () => navigation.navigate('Reports'),
    },
    {
      title: 'Produtos',
      description: 'Gerencie seus produtos existentes',
      icon: 'package',
      onPress: () => navigation.navigate('Products'),
    },
    {
      title: 'Configurações',
      description: 'Configure suas preferências',
      icon: 'cog',
      onPress: () => navigation.navigate('Settings'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Title style={styles.welcomeText}>Bem-vindo ao Precifica Fácil</Title>
          <Paragraph style={styles.subtitle}>
            Gerencie seus produtos e visualize seus lucros
          </Paragraph>
        </View>

        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={item.onPress}
            >
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="contained"
                  onPress={item.onPress}
                  style={styles.cardButton}
                >
                  Acessar
                </Button>
              </Card.Actions>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
  cardButton: {
    marginTop: 8,
  },
});

export default DashboardScreen; 