import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { TextInput } from "@/components/TextInput";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function TabOneScreen() {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: Colors.light.background, paddingHorizontal: 20 },
      ]}
    >
      <Image
        style={{ height: 200, width: 200 }}
        resizeMode="contain"
        source={require("@/assets/images/custa_tempo_logo.png")}
      />
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: 20,
          borderRadius: 32,
        }}
      >
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
          {/* <Text>💰 Quantia</Text> */}
          <CurrencyInput placeholder="00,00" label="💰 Preço do produto" />
        </View>
        <View
          style={{
            backgroundColor: "#ffff",
            borderColor: "#EBEBEB",
            borderWidth: 1,
            borderRadius: 16,
            padding: 12,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 12,
          }}
        >
          <Text fontSize={14}>Seu ganho por hora</Text>
          <Text weight="700Bold" fontSize={16}>
            R$30,00
          </Text>
        </View>
        <View
          style={{
            padding: 16,
            backgroundColor: Colors.light.tint,
            width: "100%",
            borderRadius: 16,
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ color: "#ffff" }} weight="700Bold" fontSize={18}>
            ⌛ Você precisa trabalhar
          </Text>
          <View style={{ flexDirection: "row",marginTop:12 }}>
            <View
              style={{
                flex: 1,
                flexDirection:"column",
                alignItems: "center",
                borderRightColor: "#fff",
                borderRightWidth: 1,
                backgroundColor: Colors.light.tint,
              }}
            >
              <Text style={{ color: "#ffff" }} weight="900Black" fontSize={40}>
                0
              </Text>
               <Text style={{ color: "#ffff" }} fontSize={16}>
                Dias
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                borderRightColor: "#fff",
                borderRightWidth: 1,
                backgroundColor: Colors.light.tint,
              }}
            >
              <Text style={{ color: "#ffff" }} weight="900Black" fontSize={40}>
                0
              </Text>
               <Text style={{ color: "#ffff" }}  fontSize={16}>
                Horas
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                borderRightColor: "#fff",
                borderRightWidth: 1,
                backgroundColor: Colors.light.tint,
              }}
            >
              <Text style={{ color: "#ffff" }} weight="900Black" fontSize={40}>
                0
              </Text>
               <Text style={{ color: "#ffff" }}  fontSize={16}>
                Min.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: Colors.light.tint,
              }}
            >
              <Text style={{ color: "#ffff" }} weight="900Black" fontSize={40}>
                0
              </Text>
               <Text style={{ color: "#ffff" }}  fontSize={14}>
                Seg.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
