import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

export default function App() {

  const [exchangerate,setExchangeRate] = useState('');
  const [numberofpkgs,setNoOfPkgs] = useState('');
  const [wightperkg , setWightPerKg] = useState('');
  const [pricekg , setPriceKg] = useState('');
   const [oceanfreight,setOceanFright] = useState(''); 
   const [ofperkg,setOFPerKg] = useState('');
   const [inspectioncharges,setInspectionCharges]=useState('');
   const [losisticcost,setLosisticCost] = useState('');
   const [legilazationdocument,setLegilazationDocument] = useState('');
   const [tenure,setTenure] = useState('');
  const [inwardbankcharge,setInwardBankCharge]= useState('');
   const [bankchargesfcl,setBankChargesFCL]=useState('');
   const [provision,setProvision]=useState('');
   const [commission,setCommission]=useState('');
  const [usd, setUsd] = useState('');

  // const [usd, setUsd] = useState('');

  const calculateTotal = () => {
    const total =
      Number(numberofpkgs) *
      Number(wightperkg)  ;   
  
    return total.toFixed(2);
  }
  
     const calculateTotal1 = () => {
      const total1 =
      Number(pricekg) *
        Number(exchangerate)  ;   
  
      return total1.toFixed(2);
    }
    const calculateTotal2 = () => {
      const total2 =
       Number(calculateTotal()) /
       Number(oceanfreight)  ;   
  
     return total2.toFixed(2);
     }
    const calculateTotal3 = () => {
       const total3 =
         Number(exchangerate)+2  ;   
  
       return total3.toFixed(2);
     }
     const calculateTotal4 = () => {
       const total4 =
        Number(calculateTotal2()) /
        Number(calculateTotal3())  ;   
  
      return total4.toFixed(2);
  }
  const calculateTotal5 = () => {
      const total5 =
        Number(calculateTotal()) /
       Number(inspectioncharges)  ;   
  
    return total5.toFixed(2);
  }
     const calculateTotal6 = () => {
      const total6 =
        Number(calculateTotal3()) *
        Number(calculateTotal5())  ;   
    
       return total6.toFixed(2);
     }
    const calculateTotal7 = () => {
      const total7 =
        Number(calculateTotal()) /
       Number(losisticcost)  ;   
  
       return total7.toFixed(2);
     }
     const calculateTotal8 = () => {
      const total8 =
         Number(calculateTotal()) /
        Number(legilazationdocument)  ;   
  
       return total8.toFixed(2);
     }
   const calculateTotal9 = () => {
      const total9 =
         Number(Number(calculateTotal1()*0.09) /365* Number(tenure));  
  
       return total9.toFixed(2);
     }
     const calculateTotal10 = () => {
       const total10 =
       Number(calculateTotal9()) /
       Number(exchangerate)  ;   
  
       return total10.toFixed(2);
     }
     const calculateTotal11 = () => {
      const total11 =
         Number(calculateTotal()) /
         Number(inwardbankcharge)  ;   
  
       return total11.toFixed(2);
     }
    const calculateTotal12 = () => {
       const total12 =
        Number(calculateTotal()) /
        Number(bankchargesfcl)  ;   
  
      return total12.toFixed(2);
     }
     const calculateTotal13 = () => {
      const total13 =
         Number(Number(numberofpkgs)*Number(provision) / 100);
  
       return total13.toFixed(2);
     }
     const calculateTotal14 = () => {
      const total14 =
         Number(calculateTotal3())*Number(exchangerate);
  
       return total14.toFixed(2);
     }
    const calculateTotal15 = () => {
       const total15 =
         Number(Number(numberofpkgs)*Number(commission)/100);
  
       return total15.toFixed(2);
     }
     const calculateTotal16 = () => {
      const total16 =
        Number(calculateTotal15())*Number(exchangerate);
  
       return total16.toFixed(2);
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
            placeholder="0"
            value={oceanfreight}
            onChangeText={setOceanFright}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Ocean Freight/Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal2()}
            onChangeText={calculateTotal2()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate / $ (For Ex Spot +/-2/-)</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal3()}
            onChangeText={calculateTotal3()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Ocean Freight / Kg
          </Text>
          <TextInput
            style={styles.inputs}
            placeholder=" "
            value={calculateTotal4()}
            onChangeText={calculateTotal4()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Inspection Charges ( If Any)</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={inspectioncharges}
            onChangeText={setInspectionCharges}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Inspection Charges/kg</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal5()}
            onChangeText={calculateTotal5()}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Inspection Charges / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder=" "
            value={calculateTotal6()}
            onChangeText={calculateTotal6()}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.label}>Losistic Cost </Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={losisticcost}
            onChangeText={setLosisticCost}
            keyboardType="numeric"
          />
        </View>
         <View style={styles.formRow}>
          <Text style={styles.labels}>Losistic Cost/kg </Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal7()}
            onChangeText={calculateTotal7()}
            keyboardType="numeric"
          />
        </View>    
    </View>
    
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,    
    marginBoggom: 50,  
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