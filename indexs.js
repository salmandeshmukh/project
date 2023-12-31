import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const App = () => {
  const [exchangerate,setExchangeRate] = useState('');
  const [numberofpkgs,setNoOfPkgs] = useState('');
  const [wightperkg , setWightPerKg] = useState('');
  const [pricekg , setPriceKg] = useState('');
  // const [usd, setUsd] = useState('');

 const calculateTotal = () => {
    const total =
      Number(numberofpkgs) *
      Number(wightperkg)      

    return total.toFixed(2);
  }

  const calculateTotal1 = () => {
    const total1 =
      Number(pricekg) *
      Number(exchangerate)      

    return total1.toFixed(2);
  }
  
  return (
    <ScrollView style={styles.formContainer}>
    <View style={styles.container}>
      <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Count (CCW)</Text>
          <TextInput
            style={styles.input}
            // placeholder="82.65"
            value={60}
            // onChangeText={setExchangeRate}
            // keyboardType="numeric"
          />
        </View>
     
      
        <View style={styles.formRow}>
          <Text style={styles.label}>No-of-PKgs</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={numberofpkgs}
            onChangeText={setNoOfPkgs}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Wt/kg</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={wightperkg}
            onChangeText={setWightPerKg}
            keyboardType="numeric" />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Quantity / FCL</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal()}
            onChangeText={calculateTotal()}
            keyboardType="numeric"
          />
          
         </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Sales Calculation</Text>
          
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Price / Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={pricekg}
            onChangeText={setPriceKg}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate / $</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Price / Kg</Text>          
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal1()}
            onChangeText={calculateTotal1()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Forwording Cost</Text>
        
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Ocean Freight/ FCL</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Ocean Freight/Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate / $</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Ocean Freight / Kg
</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Inspection Charges ( If Any)</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Inspection Charges/kg</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Inspection Charges / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Losistic Cost </Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Losistic Cost/kg </Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Legilazation Document
</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Legilazation  / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
          </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Interest Calculation</Text>
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Tenure</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Interest / Kg @ ( ₹ )</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Interest / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Foreign Bank Charges</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Inward Bank Charges / FCL</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Inward Bank Charges / Kg </Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate / $</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Inward Bank Charges / Kg </Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Bank Courier Charges</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Bank Charges / FCL</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Bank Charges / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Provision for Quality Claim</Text>
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Provision %</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Provision Amount /Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate </Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Prov. For Quality Amount /Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Sales Commission Expenses</Text>
         
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Commission</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Commission Amount /Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Commission Exchange Rate </Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Commission Amount /Kgm</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Total Expenses</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Net Realisation before Exp. Benefit</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Export Benefits</Text>
         
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Customs Exchange-Rate</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>DBK @</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>DBK Amount / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>RoDTEP</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>RoDTEP Amount / Kg (CAP 11.4)</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>RoDTEP Amount  / Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Export Benefits</Text>
          <TextInput
            style={styles.inputss}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Net Sales Realisation</Text>
          <TextInput
            style={styles.inputs}
            placeholder="82.65"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  formContainer: {
    flex: 1,
    padding: 20,
  
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 2,
    marginRight: 10,
    fontWeight: '',
  },
  input: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  inputs:{
     flex: 3,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
   backgroundColor: 'skyblue',
  },
  inputss:{
     flex: 3,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
   backgroundColor: 'lightgreen',
  },
  labels:{
    flex:2,
    marginRight:10,
    fontWeight:'bold',

  }
  
});

export default App;