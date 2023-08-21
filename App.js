import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [exchangerate, setExchangeRate] = useState("");
  const [numberofpkgs, setNoOfPkgs] = useState("");
  const [wightperkg, setWightPerKg] = useState("");
  const [pricekg, setPriceKg] = useState("");
  const [oceanfreight, setOceanFright] = useState("");
  const [ofperkg, setOFPerKg] = useState("");
  const [inspectioncharges, setInspectionCharges] = useState("");
  const [losisticcost, setLosisticCost] = useState("");
  const [legilazationdocument, setLegilazationDocument] = useState("");
  const [tenure, setTenure] = useState("");
  const [inwardbankcharge, setInwardBankCharge] = useState("");
  const [bankchargesfcl, setBankChargesFCL] = useState("");
  const [provision, setProvision] = useState("");
  const [commission, setCommission] = useState("");
  const [rodtep, setRoDTEP] = useState("");
  const [exportbenefits, setExportBenefits] = useState("");
  const [usd, setUsd] = useState("");
  const [DBK, setDBK] = useState(0.019);
  const [RoDTEPNew, setRoDTEPNew] = useState(0.038);

  // const [usd, setUsd] = useState('');

  // Quantity /FCL
  const calculateTotal = () => {
    const total = Number(numberofpkgs) * Number(wightperkg);

    return total.toFixed(2);
  };
  // Sales Calculation
  const calculateTotal1 = () => {
    const total1 = Number(pricekg) * Number(exchangerate);

    return total1.toFixed(2);
  };
  // Forwording Cost
  const calculateTotal2 = () => {
    const total2 = Number(oceanfreight) / Number(calculateTotal());

    return total2.toFixed(2);
  };
  const calculateTotal3 = () => {
    const total3 = Number(exchangerate) + 2;

    return total3.toFixed(2);
  };
  const calculateTotal4 = () => {
    const total4 = Number(calculateTotal2()) * Number(calculateTotal3());

    return total4.toFixed(2);
  };
  // Inspection Charges
  const calculateTotal5 = () => {
    const total5 = Number(inspectioncharges) / Number(calculateTotal());

    return total5.toFixed(2);
  };
  const calculateTotal6 = () => {
    const total6 = Number(calculateTotal3()) * Number(calculateTotal5());

    return total6.toFixed(2);
  };
  //  Legilazation Document
  const calculateTotal7 = () => {
    const total7 = Number(losisticcost) / Number(calculateTotal());

    return total7.toFixed(2);
  };
  const calculateTotal8 = () => {
    const total8 = Number(legilazationdocument) / Number(calculateTotal());

    return total8.toFixed(2);
  };
  //  Interesting Calculation
  const calculateTotal9 = () => {
    const total9 = Number(
      (Number(calculateTotal1() * 0.09) / 365) * Number(tenure)
    );

    return total9.toFixed(2);
  };
  const calculateTotal10 = () => {
    const total10 = Number(calculateTotal9()) / Number(exchangerate);

    return total10.toFixed(2);
  };
  //  Foreign Bank Charges
  const calculateTotal11 = () => {
    const total11 = Number(inwardbankcharge) / Number(calculateTotal());

    return total11.toFixed(5);
  };

  const inwardmulti = () => {
    const totalinward = calculateTotal11() * Number(exchangerate);

    return totalinward.toFixed(5);
  };
  //  Bank Courier Charges
  const calculateTotal12 = () => {
    const total12 = Number(bankchargesfcl) / Number(calculateTotal());

    return total12.toFixed(2);
  };
  //  Provision%
  const calculateTotal13 = () => {
    const total13 = Number(Number(pricekg) * Number(provision)) / 100;

    return total13.toFixed(2);
  };
  const calculateTotal14 = () => {
    const total14 = Number(calculateTotal13()) * Number(exchangerate);

    return total14.toFixed(2);
  };
  //  Sales Commission Expenses
  const calculateTotal15 = () => {
    const total15 = Number((Number(pricekg) * Number(commission)) / 100);

    return total15.toFixed(2);
  };
  const calculateTotal16 = () => {
    const total16 = Number(calculateTotal15()) * Number(exchangerate);

    return total16.toFixed(2);
  };
  const calculateTotal17 = () => {
    const total17 =
      Number(calculateTotal4()) +
      Number(calculateTotal6()) +
      Number(calculateTotal7()) +
      Number(calculateTotal8()) +
      Number(calculateTotal9()) +
      Number(calculateTotal11()) +
      Number(calculateTotal12()) +
      Number(calculateTotal14()) +
      Number(calculateTotal16());

    return total17.toFixed(2);
  };
  const calculateTotal18 = () => {
    const calculateTotal18 =
       Number(calculateTotal1()) - Number(calculateTotal17()) ;

    return calculateTotal18.toFixed(2);
  };
  const calculateTotal19 = () => {
    const calculateTotal19 = Number(exchangerate) - 2;
    return calculateTotal19.toFixed(2);
  };
  const calculateTotal20 = () => {
    const calculateTotal20 =
      Number(Number(calculateTotal1()) - Number(calculateTotal2())) * 0.019 
    return calculateTotal20.toFixed(2);
  };

  const calculateTotal21 = () => {
    const calculateTotal21 =
      Number(Number(pricekg) - Number(calculateTotal2())) *0.038 *Number(calculateTotal19());
    return calculateTotal21.toFixed(2);
  };
  const calculateTotal22 = () => {
    const calculateTotal22 = Number(calculateTotal21()) + Number(calculateTotal20());
    return calculateTotal22.toFixed(2);
  };
  const calculateTotal23 = () => {
    const calculateTotal23 =
      Number(calculateTotal18()) + Number(calculateTotal22());
    return calculateTotal23.toFixed(2);
  };
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
            keyboardType="numeric"
          />
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
            placeholder="0"
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
          <Text style={styles.label}>
            Exchange Rate / $ (For Ex Spot +/-2/-)
          </Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal3()}
            onChangeText={calculateTotal3()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Ocean Freight / Kg</Text>
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
        <View style={styles.formRow}>
          <Text style={styles.label}>Legilazation Document</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={legilazationdocument}
            onChangeText={setLegilazationDocument}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Legilazation / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal8()}
            onChangeText={calculateTotal8()}
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
            placeholder="0"
            value={tenure}
            onChangeText={setTenure}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Interest / Kg @ ( ₹ )</Text>
          <TextInput
            style={styles.input}
            placeholder="82.65"
            value={calculateTotal9()}
            onChangeText={calculateTotal9()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Interest / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal10()}
            onChangeText={calculateTotal10()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Foreign Bank Charges</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Inward Bank Charges / FCL</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={inwardbankcharge}
            onChangeText={setInwardBankCharge}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Inward Bank Charges / Kg </Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal11()}
            onChangeText={calculateTotal11()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate / $</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Inward Bank Charges / Kg </Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={inwardmulti()}
            onChangeText={inwardmulti()}
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
            placeholder="0"
            value={bankchargesfcl}
            onChangeText={setBankChargesFCL}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Bank Charges / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal12()}
            onChangeText={calculateTotal12()}
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
            placeholder="0"
            value={provision}
            onChangeText={setProvision}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Provision Amount /Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal13()}
            onChangeText={calculateTotal13()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Exchange Rate </Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={exchangerate}
            onChangeText={setExchangeRate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Prov. For Quality Amount /Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal14()}
            onChangeText={calculateTotal14()}
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
            placeholder="0"
            value={commission}
            onChangeText={setCommission}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Commission Amount /Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal15()}
            onChangeText={calculateTotal15()}
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
            placeholder="0"
            value={calculateTotal16()}
            onChangeText={calculateTotal16()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Total Expenses</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal17()}
            onChangeText={calculateTotal17()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Net Realisation before Exp. Benefit</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal18()}
            onChangeText={calculateTotal18()}
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
            placeholder="0"
            value={calculateTotal19()}
            onChangeText={calculateTotal19()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>DBK @ in%</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={DBK}
            onChangeText={setDBK}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>DBK Amount / Kg</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal20()}
            onChangeText={calculateTotal20()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>RoDTEP</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={RoDTEPNew}
            onChangeText={setRoDTEPNew}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>RoDTEP Amount / Kg (CAP 11.4)</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={calculateTotal21()}
            onChangeText={calculateTotal21()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>RoDTEP Amount / Kg</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={rodtep}
            onChangeText={setRoDTEP}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Export Benefits</Text>
          <TextInput
            style={styles.inputss}
            placeholder="0"
            value={calculateTotal22()}
            onChangeText={calculateTotal22()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.labels}>Net Sales Realisation</Text>
          <TextInput
            style={styles.inputs}
            placeholder="0"
            value={calculateTotal23()}
            onChangeText={calculateTotal23()}
            keyboardType="numeric"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 10,
  },

  formContainer: {
    flex: 1,
    padding: 20,
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 2,
    marginRight: 10,
    fontWeight: "",
  },
  input: {
    flex: 3,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
  },
  inputs: {
    flex: 3,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    backgroundColor: "skyblue",
  },
  inputss: {
    flex: 3,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    backgroundColor: "lightgreen",
  },
  labels: {
    flex: 2,
    marginRight: 10,
    fontWeight: "bold",
  },
});
