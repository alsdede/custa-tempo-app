import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { CurrencyInput } from "@/components/CurrencyInput";
import Colors from "@/constants/Colors";
import { TextInput } from "@/components/TextInput";
import { ArrowDown, ChevronDown } from "lucide-react-native";
import ModalSelect from "@/components/ModalSelect";
import { useState } from "react";

const languages = [
  { value: "pt", label: "Português" },
  { value: "en", label: "Inglês" },
];
const currencies = [
  { value: "brl", label: "🇧🇷 BRL" },
  { value: "euro", label: "🇪🇺 Euro" },
    { value: "dolar", label: "🇺🇸 Dolar" },
];
export default function TabTwoScreen() {
  const [language, setLanguage] = useState("pt");
  const [currency, setCurrency] = useState("brl");
  const [isVisibleLang, setIsVisibleLang] = useState(false);
  const [isVisibleCurrency, setIsVisibleCurrency] = useState(false);
  const selectedLanguageLabel =   languages.find((item) => item.value === language)?.label || "Selecione o idioma"
  const selectedCurrencyLabel =   currencies.find((item) => item.value === currency)?.label || "Selecione a moeda"

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          borderColor: Colors.light.black,
          borderWidth: 1,
          borderRadius: 16,
          padding: 12,
          backgroundColor: "#fff",
        }}
      >
        <CurrencyInput placeholder="00,00" label="💰 Entrada líquida" />
      </View>
      <View
        style={{
          width: "100%",
          borderColor: Colors.light.black,
          borderWidth: 1,
          borderRadius: 16,
          padding: 12,
          marginTop: 16,
          backgroundColor: "#fff",
        }}
      >
        <TextInput label="Média de dias trabalhadas por semana ⓘ" />
        <TextInput label="Média de horas trabalhadas por dia ⓘ" />
      </View>
      <View
        style={{
          width: "100%",
          borderColor: Colors.light.black,
          borderWidth: 1,
          borderRadius: 16,
          paddingHorizontal: 20,
          marginTop: 16,
          height: 48,
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Pressable
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => {
            setIsVisibleLang(!isVisibleLang);
          }}
        >
         <Text>
          {selectedLanguageLabel}
</Text>
          <ChevronDown size={16} />
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          borderColor: Colors.light.black,
          borderWidth: 1,
          borderRadius: 16,
          paddingHorizontal: 20,
          marginTop: 16,
          height: 48,
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Pressable
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => {   setIsVisibleCurrency(!isVisibleCurrency);}}
        >
          <Text>{selectedCurrencyLabel}</Text>
          <ChevronDown size={16} />
        </Pressable>
      </View>
      <ModalSelect
        data={languages}
        isVisible={isVisibleLang}
        onClose={() => setIsVisibleLang(false)}
        onSelectItem={(value) => setLanguage(value)} 
        selected={language}
      />
        <ModalSelect
        data={currencies}
        isVisible={isVisibleCurrency}
        onClose={() => setIsVisibleCurrency(false)}
        onSelectItem={(value) => setCurrency(value)} 
        selected={currency}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
