import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Surface,
  useTheme,
  HelperText,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddProductScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [baseValue, setBaseValue] = useState('');
  const [additionalCosts, setAdditionalCosts] = useState('');
  const [profitPercentage, setProfitPercentage] = useState('');
  const [expectedSales, setExpectedSales] = useState('');
  const [fixedCosts, setFixedCosts] = useState('');
  const theme = useTheme();

  const calculateFinalPrice = () => {
    const base = parseFloat(baseValue) || 0;
    const additional = parseFloat(additionalCosts) || 0;
    const profit = parseFloat(profitPercentage) || 0;
    
    const totalCost = base + additional;
    const profitAmount = (totalCost * profit) / 100;
    return totalCost + profitAmount;
  };

  const calculateTotalProfit = () => {
    const finalPrice = calculateFinalPrice();
    const sales = parseFloat(expectedSales) || 0;
    const fixed = parseFloat(fixedCosts) || 0;
    
    return (finalPrice * sales) - fixed;
  };

  const handleSave = () => {
    // TODO: Implementar lógica de salvamento
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Surface style={styles.surface}>
            <Text style={styles.title}>Adicionar Produto</Text>

            <TextInput
              label="Nome do Produto"
              value={name}
              onChangeText={setName}
              mode="outlined"
              style={styles.input}
            />

            <TextInput
              label="Categoria"
              value={category}
              onChangeText={setCategory}
              mode="outlined"
              style={styles.input}
            />

            <TextInput
              label="Valor Base (R$)"
              value={baseValue}
              onChangeText={setBaseValue}
              mode="outlined"
              style={styles.input}
              keyboardType="numeric"
            />

            <TextInput
              label="Gastos Adicionais (R$)"
              value={additionalCosts}
              onChangeText={setAdditionalCosts}
              mode="outlined"
              style={styles.input}
              keyboardType="numeric"
            />

            <TextInput
              label="Porcentagem de Lucro (%)"
              value={profitPercentage}
              onChangeText={setProfitPercentage}
              mode="outlined"
              style={styles.input}
              keyboardType="numeric"
            />

            <TextInput
              label="Quantidade Prevista de Vendas"
              value={expectedSales}
              onChangeText={setExpectedSales}
              mode="outlined"
              style={styles.input}
              keyboardType="numeric"
            />

            <TextInput
              label="Gastos Fixos (R$)"
              value={fixedCosts}
              onChangeText={setFixedCosts}
              mode="outlined"
              style={styles.input}
              keyboardType="numeric"
            />

            <View style={styles.resultsContainer}>
              <Text style={styles.resultText}>
                Preço Final de Venda: R$ {calculateFinalPrice().toFixed(2)}
              </Text>
              <Text style={styles.resultText}>
                Lucro Total Estimado: R$ {calculateTotalProfit().toFixed(2)}
              </Text>
            </View>

            <Button
              mode="contained"
              onPress={handleSave}
              style={styles.button}
            >
              Salvar Produto
            </Button>
          </Surface>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    padding: 16,
  },
  surface: {
    padding: 20,
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  resultsContainer: {
    marginVertical: 20,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default AddProductScreen; 